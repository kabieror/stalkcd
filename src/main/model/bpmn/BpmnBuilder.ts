import { Process, BpmnElementType, EndEvent, StartEvent, BpmnSourceElement, BpmnTargetElement, SequenceFlow, ConditionalExpression, BpmnElement, ScriptTask, Gateway, BpmnIntermediateElement, ExclusiveGateway, ParallelGateway, BpmnHelper, BoundaryEvent, ConditionalEvent, BpmnOutgoing } from "./Bpmn";

import { Step } from "../pipeline/Step";
import { pad } from "../../util";
import { start } from "repl";
import { IAgentOption } from "../pipeline/AgentSection";
import { IEnvironmentVariable } from "../pipeline/EnvironmentSection";
const randomize = require('randomatic');

export class BpmnBuilder {
    constructor (
        private parentBuilder?: BpmnBuilder,
        private process: Process = new Process(BpmnBuilder.generateId('Process')),
    ) {
        this.current = this.createStartEvent();
    }

    /**
     * The nested builder that is currently active.
     * All requests to this builder are forwarded to the nested one.
     */
    private redirect?: BpmnBuilder;

    private activeBranching?: {
        start: Gateway
        end: Gateway
    };

    private activePostSection?: {
        startElement: BpmnElement
        outsideSuccessor?: BpmnSourceElement,
        previousBuilder: BpmnBuilder
    };

    private current?: BpmnSourceElement;

    private isFinished = false;

    /**
     * Appends a step to the current process
     * @param step The step to append to the current process
     */
    public step(step: Step): void {
        if (this.redirect)
            return this.redirect.step(step);
        if (this.isFinished)
            throw new Error('The process is already finished.');

        if (!step.command) {
            return;
        }
        
        this.next(this.createScriptTask(step.label, step.command));
    }

    /**
     * Starts a nested stage
     */
    public beginStage(name: string): void {
        if (this.redirect)
            return this.redirect.beginStage(name);
        if (this.isFinished)
            throw new Error('The process is already finished.');

        let source: BpmnSourceElement;

        if (this.activeBranching) {
            // Add branch to active gateway.
            source = this.activeBranching.start;
        } else if (this.current) {
            // No branching active. Extend regular sequence flow.
            source = this.current;
        } else {
            throw new Error(`A stage cannot be the first element in a model`);
        }

        const subProcess = this.createSubProcess(name);
        this.connect(source, subProcess);
        this.current = subProcess;

        if (this.activeBranching) {
            this.connect(subProcess, this.activeBranching.end);
            this.current = this.activeBranching.end;
        }

        this.redirect = new BpmnBuilder(this, subProcess);
    }

    /**
     * Starts a conditional stage
     * @param expression The conditional expression
     */
    public beginConditionalStage(name: string, expression: string): void {
        if (this.redirect)
            return this.redirect.beginConditionalStage(name, expression);
        if (this.isFinished)
            throw new Error('The process is already finished.');

        let startGateway: Gateway;
        let endGateway: Gateway;

        if (this.activeBranching) {
            // Add branch to active gateway.
            startGateway = this.activeBranching.start;
            endGateway = this.activeBranching.end;
        } else {
            // No branching active. Create dedicated exclusive gateway.
            startGateway = this.createExclusiveGateway();
            this.next(startGateway);

            // End-Gateway
            endGateway = this.createExclusiveGateway();

            // Default flow
            const defaultFlow = this.connect(startGateway, endGateway);
            startGateway.$.default = defaultFlow.$.id;
        }

        // Sub-Process
        const subProcess = this.createSubProcess(name);
        const primaryFlow = this.connect(startGateway, subProcess, expression, [ expression ]);
        primaryFlow['bpmn:conditionExpression'] = [
            {
                $: {
                    'xsi:type': 'bpmn:tFormalExpression', 
                    language: 'Groovy',
                },
                _: expression,
            }
        ];

        this.redirect = new BpmnBuilder(this, subProcess);

        // Connect sub process to end gateway
        this.connect(subProcess, endGateway);
        this.current = endGateway;
    }

    /**
     * Ends the current stage
     */
    public endStage(): void {
        if (this.redirect)
            return this.redirect.endStage();
        if (this.isFinished)
            throw new Error('The process is already finished.');

        if (this.parentBuilder) {
            return this.finishProcess();
        }
        // Don't do anything if we are already on the highest level
    }

    /**
     * Starts processing the steps from a post section
     * @param condition 
     */
    public beginPostSection(condition: string): void {
        if (this.redirect)
            return this.redirect.beginPostSection(condition);
        if (this.isFinished) 
            throw new Error('The process is already finished.');
        if (!this.parentBuilder)
            throw new Error('A post section cannot be started without an active stage');

        this.redirect = this.parentBuilder;
        this.parentBuilder.redirect = undefined;
        this.parentBuilder._beginPostSection(this.process, condition, this);
    }

    private _beginPostSection(
        process: Process,
        condition: string,
        previousBuilder: BpmnBuilder,
    ): void {
        const startEvent = this.createConditionalEvent(process, condition);

        this.activePostSection = {
            startElement: startEvent,
            outsideSuccessor: this.current,
            previousBuilder,
        };

        this.current = startEvent;
        this.redirect = undefined;
        previousBuilder.redirect = this;
    }

    /**
     * Finishes a post section
     */
    public endPostSection(): void {
        if (this.redirect)
            return this.redirect.endPostSection();
        if (this.isFinished)
            throw new Error('The process is already finished.');

        if (this.activePostSection) {
            this.current = this.activePostSection.outsideSuccessor;
            this.redirect = this.activePostSection.previousBuilder;
            this.activePostSection.previousBuilder.redirect = undefined;
            this.activePostSection = undefined;
        }
    }

    /**
     * Starts a parallel branching
     */
    public beginParallelStages(caption: string): void {
        if (this.redirect)
            return this.redirect.beginParallelStages(caption);
        if (this.isFinished)
            throw new Error('The process is already finished.');
        
        const startGateway = this.createParallelGateway(caption);
        this.next(startGateway);

        const endGateway = this.createParallelGateway();

        this.activeBranching = {
            start: startGateway,
            end: endGateway,
        };
    }

    /**
     * Ends the parallel branching
     */
    public endParallelStages(): void {
        if (this.redirect)
            return this.redirect.endParallelStages();
        if (this.isFinished)
            throw new Error('The process is already finished.');
            
        this.activeBranching = undefined;
    }

    /**
     * Inserts the agent settings from a StalkCD pipeline into a BPMN process
     */
    public processAgentSection(agent?: IAgentOption[]): void {
        if (this.redirect)
            return this.redirect.processAgentSection(agent);
        if (this.isFinished)
            throw new Error('The process is already finished.');

        const startEvent = this.process["bpmn:startEvent"][0];

        if (agent) {
            if (agent.length === 1 && !agent[0].value && !agent[0].options) {
                BpmnHelper.setExtensionProperty(startEvent, 'agent', agent[0].name);
            } else {
                this.insertAgentOptions(agent, 'agent', startEvent);
            }
        }
    }

    public processProperties(key: string, values: string[]): void {
        if (this.redirect) {
            return this.redirect.processProperties(key, values);
        }
        if (this.isFinished) {
            throw new Error('The process is already finished.');
        }

        const startEvent = this.process["bpmn:startEvent"][0];

        for (const value of values) {
            BpmnHelper.setExtensionProperty(startEvent, key, value);
        }
    }

    public processEnvironmentSettings(environment: IEnvironmentVariable[]): void {
        if (this.redirect) {
            return this.redirect.processEnvironmentSettings(environment);
        }
        if (this.isFinished) {
            throw new Error('The process is already finished.');
        }

        const startEvent = this.process["bpmn:startEvent"][0];

        for (const variable of environment) {
            BpmnHelper.setExtensionProperty(startEvent, 'environment.' + variable.name, variable.value);
        }
    }
    
    private insertAgentOptions(options: IAgentOption[], parentId: string | undefined, target: BpmnElement): void {
        for (const o of options) {
            const optionId = (parentId ? parentId + '.' : '') + o.name;
            if (o.value) {
                BpmnHelper.setExtensionProperty(target, optionId, o.value);
            }
            if (o.options) {
                this.insertAgentOptions(o.options, parentId + '.' + o.name, target);
            }
        }
    }

    public finalize(): Process {
        if (this.redirect)
            this.redirect.finalize();
        if (this.isFinished)
            throw new Error('The process is already finished.');

        this.finishProcess();
        return this.process;
    }

    /**
     * Adds a start event to a process
     */
    private createStartEvent(): StartEvent {
        const res: StartEvent = {
            $: {
                id: BpmnBuilder.generateId('StartEvent'),
            },
            $type: BpmnElementType.StartEvent,
            "bpmn:extensionElements": [],
            "bpmn:outgoing": [],
        };
        this.process["bpmn:startEvent"].push(res);
        return res;
    }

    /**
     * Creates a new conditional event attached to an existing BPMN element
     * @param element The element to attach the event to
     * @param condition The condition of the event
     */
    private createConditionalEvent(element: BpmnElement, condition: string, interrupting: boolean = false): ConditionalEvent {
        const res: ConditionalEvent = {
            $: {
                id: BpmnBuilder.generateId('ConditionalEvent'),
                attachedToRef: element.$.id,
                cancelActivity: interrupting,
                name: condition,
            },
            $type: BpmnElementType.BoundaryEvent,
            "bpmn:conditionalEventDefinition": [{
                "bpmn:condition": [{
                    $: {
                        "xsi:type": 'bpmn:tFormalExpression',
                    },
                    _: condition,
                }],
            }],
            "bpmn:extensionElements": [],
            "bpmn:outgoing": [],
        }
        this.process["bpmn:boundaryEvent"].push(res);
        return res;
    }

    /**
     * Creates an end event and finalizes the (sub)process
     */
    private finishProcess(): void {
        if (this.isFinished) {
            return;
        }
        
        const end: EndEvent = {
            $: {
                id: BpmnBuilder.generateId('EndEvent'),
            },
            $type: BpmnElementType.EndEvent,
            "bpmn:incoming": [],
            "bpmn:extensionElements": [],
        }
        this.process["bpmn:endEvent"].push(end);
        
        if (this.activeBranching) {
            // Finish branching
            this.current = this.activeBranching.end;
        }

        this.isFinished = true;
        if (this.parentBuilder) {
            this.parentBuilder.redirect = undefined;
        }

        this.connect(this.current, end);
    }

    private createScriptTask(name: string | undefined, script: string): ScriptTask {
        const id = BpmnBuilder.generateId('ScriptTask');
        const res: ScriptTask = {
            $: {
                id,
                name: name ? name : id,
                scriptFormat: "jenkins",
            },
            $type: BpmnElementType.ScriptTask,
            "bpmn:incoming": [],
            "bpmn:outgoing": [],
            "bpmn:script": [ script.trim() ],
            "bpmn:extensionElements": [],
        };
        this.process["bpmn:scriptTask"].push(res);
        return res;
    }

    private createExclusiveGateway(name: string = ''): ExclusiveGateway {
        return this.createGateway(name, BpmnElementType.ExclusiveGateway);
    }

    private createParallelGateway(name: string = ''): ParallelGateway {
        return this.createGateway(name, BpmnElementType.ParallelGateway);
    }

    private createGateway<T extends Gateway>(
        name: string = '',
        type: BpmnElementType.ExclusiveGateway|BpmnElementType.ParallelGateway,
    ): T {
        const id = BpmnBuilder.generateId(BpmnElementType[type]);
        const res: Gateway = {
            $: {
                id,
                name
            },
            $type: type,
            "bpmn:extensionElements": [],
            "bpmn:incoming": [],
            "bpmn:outgoing": [],
        }
        if (type === BpmnElementType.ParallelGateway) {
            this.process["bpmn:parallelGateway"].push(res);
        } else {
            this.process["bpmn:exclusiveGateway"].push(res);
        }
        return res as T;
    }

    /**
     * Creates a new sub process
     */
    private createSubProcess(name?: string): Process {
        const res: Process = new Process(BpmnBuilder.generateId('SubProcess'));
        res.$.name = name ? name : res.$.id;

        this.process["bpmn:subProcess"].push(res);

        return res;
    }

    /**
     * Appends an element to the regular sequence flow
     * @param element The element to append to the previous element
     */
    private next(element: BpmnIntermediateElement): SequenceFlow {
        const flow = this.connect(this.current, element);
        this.current = element;
        return flow;
    }

    /**
     * Creates a sequence flow between two BPMN elements
     */
    private connect(
        source: BpmnSourceElement | undefined,
        target: BpmnTargetElement,
        name: string = '',
        conditions: string[] = [],
    ): SequenceFlow {
        if (!source) {
            throw new Error('The current process is not yet started or already finished');
        }
        const flow: SequenceFlow = {
            $: {
                id: BpmnBuilder.generateId('SequenceFlow'),
                name,
                sourceRef: source.$.id,
                targetRef: target.$.id,
            },
            $type: BpmnElementType.SequenceFlow,
            "bpmn:conditionExpression": conditions.map(expr => {
                return {
                    $: {
                        'xsi:type': 'bpmn:tFormalExpression',
                        language: 'Groovy',
                    },
                    _: expr,
                } as ConditionalExpression;
            }),
            "bpmn:extensionElements": [],
        };
        source["bpmn:outgoing"].push(flow.$.id);
        target["bpmn:incoming"].push(flow.$.id);
        this.process["bpmn:sequenceFlow"].push(flow);
        return flow;
    }


    private static cId = 0;

    public static generateId(name: string): string {
        if (name && !name.endsWith('_')) {
            name += '_';
        }
        BpmnBuilder.cId++;
        return name + pad(BpmnBuilder.cId, 7);
    }
}