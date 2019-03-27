import { Process, BpmnElement } from "../model/bpmn/Bpmn";
import * as dagre from 'dagre';
import { ProcessDiagram, Waypoint, Bounds, Shape } from "../model/bpmn/BpmnDiagram";

export class GraphNode {
    constructor(
        public parent?: GraphNode,
    ) {
        if (parent) {
            parent.children.push(this);
        }
    }

    graph = new dagre.graphlib.Graph();

    children: GraphNode[] = [];

    width?: number;
    height?: number;
}

export interface VisualBounds {
    minX: number;
    maxX: number;
    minY: number;
    maxY: number;
}

export interface SubGraphData extends dagre.Label, dagre.GraphLabel {
    // The element that is represented by this sub graph
    element?: BpmnElement;

    isSubGraph?: boolean;
}

export class BpmnLayouter {

    constructor () {

    }

    public layout(process: Process): ProcessDiagram {
        const rootGraph = this.calculate(process);
        const diagram: ProcessDiagram = {
            $: {
                id: 'BPMNDiagram_1',
            },
            "bpmndi:BPMNPlane": [{
                $: {
                    id: process.$.id + '_di',
                    bpmnElement: process.$.id,
                },
                "bpmndi:BPMNShape": [],
                "bpmndi:BPMNEdge": [],
            }],
        }
        this.apply(rootGraph, diagram);
        return diagram;
    }

    private calculate(
        process: Process,
        parentGraph?: GraphNode,
    ): GraphNode {
        const graphNode = new GraphNode(parentGraph);
        const graph = graphNode.graph;

        const graphData = {
            marginx: 50,
            marginy: 36,
            align: 'DR',
            ranker: 'tight-tree',
        };
        graph.setGraph(graphData);
        graph.setDefaultEdgeLabel(() => { return {} });

        for (const element of process["bpmn:startEvent"]) {
            graph.setNode(element.$.id, {
                element,
                width: 36,
                height: 36,
            });
        }

        for (const element of process["bpmn:endEvent"]) {
            graph.setNode(element.$.id, {
                element,
                width: 36,
                height: 36,
            });
        }

        if (process["bpmn:boundaryEvent"]) {
            for (const element of process["bpmn:boundaryEvent"]) {
                graph.setNode(element.$.id, {
                    element,
                    width: 36,
                    height: 36,
                });
                // Connect to according sub process
                graph.setEdge(element.$.attachedToRef, element.$.id, {
                    element,
                    mergeNodes: true,
                });
            }
        }

        if (process["bpmn:exclusiveGateway"]) {
            for (const element of process["bpmn:exclusiveGateway"]) {
                graph.setNode(element.$.id, {
                    element,
                    width: 50,
                    height: 50,
                });
            }
        }

        if (process["bpmn:parallelGateway"]) {
            for (const element of process["bpmn:parallelGateway"]) {
                graph.setNode(element.$.id, {
                    element,
                    width: 50,
                    height: 50,
                });
            }
        }

        if (process["bpmn:scriptTask"]) {
            for (const element of process["bpmn:scriptTask"]) {
                graph.setNode(element.$.id, {
                    element,
                    width: 80,
                    height: 100,
                });
            }
        }

        if (process["bpmn:subProcess"]) {
            for (const element of process["bpmn:subProcess"]) {
                const subGraph = this.calculate(element, graphNode);
                const subLabel: SubGraphData = subGraph.graph.graph();
                subLabel.isSubGraph = true;
                subLabel.element = element;
    
                // Insert the sub process graph into this graph
                graph.setNode(element.$.id, subLabel);
            }
        }

        for (const element of process["bpmn:sequenceFlow"]) {
            graph.setEdge(element.$.sourceRef, element.$.targetRef, {
                element,
            });
        }

        dagre.layout(graph);

        graphNode.width = graph.graph().width;
        graphNode.height = graph.graph().height;

        return graphNode;
    }

    /**
     * Apply the graph layout to the BPMN XML
     * @param graphNode 
     * @param diagram 
     */
    private apply(graphNode: GraphNode, diagram: ProcessDiagram) {
        let xOff = 0;
        let yOff = 0;

        // Traverse all parent nodes to compute the overall offset
        let cNode = graphNode;
        while (cNode.parent) {
            const graphInfo = cNode.graph.graph() as dagre.Label;
            xOff += this.fixCoordinateX(graphInfo);
            yOff += this.fixCoordinateY(graphInfo);
            cNode = cNode.parent;
        }

        // Move boundary events
        for (const graphEdge of graphNode.graph.edges()) {
            const edgeData = graphNode.graph.edge(graphEdge);
            if (edgeData.mergeNodes) {
                // Merge nodes in case of boundary events
                const v = graphNode.graph.node(graphEdge.v);
                const w = graphNode.graph.node(graphEdge.w);
                this.moveToBoundary(w, v);
                graphNode.graph.removeEdge(graphEdge.v, graphEdge.w);

                this.fixEdges(graphEdge.w, graphNode.graph);
            }
        }

        // Apply nodes to BPMN diagram
        for (const nodeId of graphNode.graph.nodes()) {
            const node = graphNode.graph.node(nodeId);
            if (!node) {
                throw new Error(`Could not find layout specification for ${nodeId}`);
            }
            const shape: Shape = {
                $: {
                    id: `${nodeId}_di`,
                    bpmnElement: nodeId,
                },
                "dc:Bounds": [{
                    $: {
                        // Exchange x and y to create a flow from left to right
                        // Instead top to bottom
                        x: this.fixCoordinateY(node) + yOff,
                        y: this.fixCoordinateX(node) + xOff,
                        width: node.height,
                        height: node.width,
                    }
                }]
            };
            if (node.isSubGraph) {
                shape.$.isExpanded = true;
            }
            diagram["bpmndi:BPMNPlane"][0]["bpmndi:BPMNShape"].push(shape);
        }

        // Apply edges to BPMN diagram
        for (const graphEdge of graphNode.graph.edges()) {
            const edgeData = graphNode.graph.edge(graphEdge);
            const bpmnEdge = {
                $: {
                    id: `${edgeData.element.$.id}_di`,
                    bpmnElement: edgeData.element.$.id,
                },
                "bpmndi:BPMNLabel": edgeData.element.$.name,
                "di:waypoint": edgeData.points.map(p => {
                    return <Waypoint>{
                        $: {
                            x: p.y + yOff,
                            y: p.x + xOff,
                        }
                    };
                }),
            };
            diagram["bpmndi:BPMNPlane"][0]["bpmndi:BPMNEdge"].push(bpmnEdge);
        }

        for (const child of graphNode.children) {
            this.apply(child, diagram);
        }
    }

    private fixCoordinateX(bounds: {x?: number, width?: number}): number {
        if (!bounds.x || !bounds.width) {
            throw new Error('The bounds are incomplete.');
        }
        return bounds.x - (bounds.width / 2);
    }

    private fixCoordinateY(bounds: {y?: number, height?: number}): number {
        if (!bounds.y || !bounds.height) {
            throw new Error('The bounds are incomplete.');
        }
        return bounds.y - (bounds.height / 2);
    }

    /**
     * Re-connects all incoming and outgoing edges to a given node
     * @param nodeName The name of the node to fix edges of
     * @param graph The graph object
     */
    private fixEdges(nodeName: string, graph: dagre.graphlib.Graph) {
        const node = graph.node(nodeName);

        const outEdges = graph.outEdges(nodeName);
        if (outEdges) {
            for (const edge of outEdges) {
                const data = graph.edge(edge);
                this.moveToBoundary(data.points[0], node);
            }
        }

        const inEdges = graph.inEdges(nodeName);
        if (inEdges) {
            for (const edge of inEdges) {
                const data = graph.edge(edge);
                this.moveToBoundary(data.points[data.points.length], node);
            }
        }
    }

    /**
     * Moves an element to the boundary of a target element.
     * @param element The element to move
     * @param target The target where to move the element to
     */
    private moveToBoundary(element: {x: number, y: number}, target: dagre.Node) {
        const bounds = this.getBounds(target);

        if (element.x > bounds.maxX) {
            element.x = bounds.maxX;
        }
        if (element.x < bounds.minX) {
            element.x = bounds.minX;
        }
        if (element.y > bounds.maxY) {
            element.y = bounds.maxY;
        }
        if (element.y < bounds.minY) {
            element.y = bounds.minY;
        }
    }

    private getBounds(element: dagre.Node): VisualBounds {
        return {
            minX: element.x - (element.width / 2),
            maxX: element.x + (element.width / 2),
            minY: element.y - (element.height / 2),
            maxY: element.y + (element.height / 2),
        }
    }
}