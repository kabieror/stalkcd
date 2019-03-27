import { BpmnElementType } from "./Bpmn";

export interface ProcessDiagram {
    $: {
        id: string
    }
    'bpmndi:BPMNPlane': {
        $: {
            id: string
            bpmnElement: string
        }
        'bpmndi:BPMNShape': Shape[]
        'bpmndi:BPMNEdge': Edge[]
    }[]
}

export interface Shape {
    $: {
        id: string
        bpmnElement: string
        isExpanded?: boolean
        isMarkerVisible?: boolean
    }
    'dc:Bounds': Bounds[]
}

export interface Edge {
    $: {
        id: string
        bpmnElement: string
    }
    'di:waypoint': Waypoint[]
    'bpmndi:BPMNLabel': Bounds[]
}

export interface Waypoint {
    $: {
        x: number
        y: number
    }
}

export interface Bounds {
    $: {
        x: number
        y: number
        width: number
        height: number
    }
}
