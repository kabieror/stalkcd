const cleaner = require('deep-cleaner');

export enum BpmnElementType {
    Process,
    SequenceFlow,
    StartEvent,
    EndEvent,
    BoundaryEvent,
    Task,
    ScriptTask,
    ExclusiveGateway,
    ParallelGateway,
}

export interface BpmnExtensionElements {
    'camunda:properties': {
        'camunda:property': CamundaProperty[];
    }[];
}

export interface CamundaProperty {
    $: {
        name: string;
        value: string;
    }
}

export interface BpmnElement {
    $: {
        id: string;
    }
    $type: BpmnElementType;
    'bpmn:extensionElements': BpmnExtensionElements[];
}

export interface BpmnIncoming {
    'bpmn:incoming': string[];
}

export interface BpmnOutgoing {
    'bpmn:outgoing': string[];
}

export interface BpmnSourceElement extends BpmnOutgoing, BpmnElement {

}

export interface BpmnTargetElement extends BpmnIncoming, BpmnElement {

}

export interface BpmnIntermediateElement extends BpmnElement, BpmnIncoming, BpmnOutgoing {
    
}

export class Process implements BpmnElement, BpmnIncoming, BpmnOutgoing {
    constructor(id: string) {
        this.$.id = id;
    }

    '$type': BpmnElementType = BpmnElementType.Process;

    '$': {
        id: string;
        name?: string;
        isExecutable: boolean;
    } = {
        id: '',
        isExecutable: true,
    }

    'bpmn:sequenceFlow': SequenceFlow[] = [];
    'bpmn:startEvent': StartEvent[] = [];
    'bpmn:boundaryEvent': BoundaryEvent[] = [];
    'bpmn:endEvent': EndEvent[] = [];
    'bpmn:scriptTask': ScriptTask[] = [];
    'bpmn:exclusiveGateway': ExclusiveGateway[] = [];
    'bpmn:parallelGateway': ParallelGateway[] = [];
    'bpmn:subProcess': Process[] = [];
    'bpmn:incoming': string[] = [];
    'bpmn:outgoing': string[] = [];
    'bpmn:extensionElements': BpmnExtensionElements[] = [];

    clean(): Process {
        cleaner(this, '$type');
        return this;
    }

}

export interface ConditionalExpression {
    $: {
        'xsi:type': string,
        language: string,
    }
    _: string,
}

export interface SequenceFlow extends BpmnElement {
    $: {
        id: string;
        name: string;
        sourceRef: string;
        targetRef: string;
    };

    'bpmn:conditionExpression': ConditionalExpression[];
}

export interface StartEvent extends BpmnElement, BpmnOutgoing {
    $: {
        id: string;
    }
}

export interface EndEvent extends BpmnElement, BpmnIncoming {
    $: {
        id: string;
    }
}

export interface BoundaryEvent extends BpmnElement, BpmnOutgoing {
    $: {
        id: string;
        attachedToRef: string;
        cancelActivity?: boolean;
        name: string;
    }
}

export interface ConditionalEvent extends BoundaryEvent {
    'bpmn:conditionalEventDefinition': {
        'bpmn:condition': {
            $: {
                'xsi:type': string;
            }
            _: string;
        }[];
    }[];
}

export interface ErrorEvent extends BoundaryEvent {
    'bpmn:errorEventDefinition': any[];
}

export interface Gateway extends BpmnElement, BpmnIncoming, BpmnOutgoing {
    $: {
        id: string;
        name?: string;
        default?: string;
    }
}

export interface ParallelGateway extends Gateway {

}

export interface ExclusiveGateway extends Gateway {

}

export interface Task extends BpmnElement, BpmnIncoming, BpmnOutgoing {
    $: {
        id: string;
        name: string;
    }
}

export interface ScriptTask extends Task {
    $: {
        id: string;
        name: string;
        scriptFormat: 'jenkins';
    }

    'bpmn:script': string[];
}

export class BpmnHelper {

    static getExtensionProperty(obj: BpmnElement, name: string): string | undefined {
        const base = this.getOrCreateProperty<Array<CamundaProperty>|undefined>(obj, [
            'bpmn:extensionElements',
            0,
            'camunda:properties',
            0,
            'camunda:property'
        ], undefined);

        if (base === undefined) {
            return undefined;
        }

        const prop = base.find(i => i.$.name === name);
        return prop ? prop.$.value : undefined;
    }

    static getExtensionProperties(obj: BpmnElement, pattern: RegExp): CamundaProperty[] {
        const base = this.getOrCreateProperty<Array<CamundaProperty>|undefined>(obj, [
            'bpmn:extensionElements',
            0,
            'camunda:properties',
            0,
            'camunda:property'
        ], undefined);

        if (base === undefined) {
            return [];
        }

        return base.filter(i => pattern.test(i.$.name));
    }

    /**
     * Sets an extension property of a BPMN element to a specified value
     * @param obj The BPMN element to set the extension property
     * @param name The name of the property to set
     * @param value The value of the property to set
     */
    static setExtensionProperty(obj: BpmnElement, name: string, value: string): void {
        this.getOrCreateProperty<Array<CamundaProperty>>(obj, [
            'bpmn:extensionElements',
            0,
            'camunda:properties',
            0,
            'camunda:property'
        ], []).push({
            $: { name, value }
        });
    }

    /**
     * Gets a property from an object based on a path.
     * If it does not exist, it is created based on the default value and then returned.
     * @param obj The object to get the property from
     * @param path The path of the property to get
     * @param defaultValue The value to insert into the object if the property does not exist
     */
    static getOrCreateProperty<T>(
        obj: any,
        path: (string|number)[],
        defaultValue: T,
    ): T {
        let i = 0;
        for (i = 0; i < path.length - 1; i++) {
            if (obj[path[i]]) {
                obj = obj[path[i]];
            } else if (defaultValue === undefined) {
                return undefined as any;
            } else {
                if (typeof(path[i+1]) === 'number') {
                    // Create array
                    obj[path[i]] = [];
                    obj = obj[path[i]];
                } else {
                    // Create object
                    obj[path[i]] = {};
                    obj = obj[path[i]];
                }
            }
        }
        if (obj[path[i]]) {
            return obj[path[i]];
        } else if (defaultValue === undefined) {
            return undefined as any;
        } else {
            obj[path[i]] = defaultValue;
            return defaultValue;
        }
    }

}