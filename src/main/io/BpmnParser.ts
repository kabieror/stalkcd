import { Pipeline } from "../model/pipeline/Pipeline";
import { parseString } from 'xml2js';
import { SequenceFlow, StartEvent, ExclusiveGateway, ParallelGateway, Gateway, EndEvent, Process, BpmnElementType, BpmnElement, ScriptTask, Task, BpmnOutgoing, BoundaryEvent, ConditionalEvent, ErrorEvent, BpmnHelper } from "../model/bpmn/Bpmn";
import { PipelineBuilder } from "../model/pipeline/PipelineBuilder";
import { findInMap } from "../util";
import { PostCondition } from "../model/pipeline/PostSection";
import { Step } from "../model/pipeline/Step";
import { IAgentOption, AgentOption } from "../model/pipeline/AgentSection";
import { IOptionsSection } from "../model/pipeline/OptionsSection";

export class BpmnParser {

    constructor (
    ) { }

    async parse(input: string): Promise<Pipeline> {
        return new Promise<Pipeline>((resolve, reject) => {
            parseString(input, async (err, xml) => {
                if (err) {
                    reject(err);
                }
                if (!xml || !xml['bpmn:definitions']) {
                    reject(new Error('No valid BPMN definition could be found.'));
                }
                try {
                    resolve(await this.parseRoot(xml['bpmn:definitions']));
                } catch (err) {
                    reject(err);
                }
            });
        });
    }

    async parseRoot(root: any): Promise<Pipeline> {
        if (!root['bpmn:process']) {
            throw new Error('No BPMN process could be found.');
        }
        if (!Array.isArray(root['bpmn:process'])) {
            throw new Error('The BPMN process element has an unexpected format.');
        }
        if (root['bpmn:process'].length < 1) {
            throw new Error('No BPMN process could be found');
        }
        
        const builder = new PipelineBuilder();
        new ProcessTranslator(builder).translate(root['bpmn:process'][0]);
        return builder.pipeline;
    }
}

class GatewayStatus {
    constructor(
        public id: number,
        public startId: string | undefined,
        public endId: string | undefined,
        public totalBranches: number,
        public processedBranches: number = 0,
    ) { }
}

class ProcessTranslator {

    constructor(
        private builder: PipelineBuilder,
    ) { }

    /**
     * All known IDs connected to their BPMN elements
     */
    private dictionary = new Map<string, BpmnElement>();

    /**
     * All defined boundary events in the scope of the current process
     */
    private boundaryEvents = new Map<string, BoundaryEvent>();

    /**
     * All defined sequence flows in the scope of the current process
     */
    private sequenceFlows = new Map<string, SequenceFlow>();

    /**
     * The elements that are to be processed in different branches
     */
    private nextElementsStack: BpmnElement[] = [];

    /**
     * All elements that have been processed already
     */
    private processedSequenceFlows = new Map<string, boolean>();

    /**
     * The status of all known gateways
     */
    private gatewayStack: GatewayStatus[] = [];
    private get gatewayStatus(): GatewayStatus | undefined {
        return this.gatewayStack.length > 0 ? this.gatewayStack[this.gatewayStack.length - 1] : undefined;
    }

    private gatewayCounter: number = 0;

    /**
     * Builds a Stalk-CD Pipeline from a BPMN process
     * @param src The BPMN process to translate
     * @param builder The BPMN builder to use
     */
    public translate(src: Process): Pipeline {
        if (!src || !src.$) {
            throw new Error('The BPMN process has an unexpected format. Could not find any attribute.');
        }
        if (!src.$.id) {
            throw new Error('The BPMN process does not have an ID.');
        }

        this.sequenceFlows = this.loadBpmnElement<SequenceFlow>(src, 'bpmn:sequenceFlow', BpmnElementType.SequenceFlow, true);
        const startEvents = this.loadBpmnElement<StartEvent>(src, 'bpmn:startEvent', BpmnElementType.StartEvent, true);
        this.boundaryEvents = this.loadBpmnElement<BoundaryEvent>(src, 'bpmn:boundaryEvent', BpmnElementType.BoundaryEvent, false);
        this.loadBpmnElement<EndEvent>(src, 'bpmn:endEvent', BpmnElementType.EndEvent, true);
        this.loadBpmnElement<ParallelGateway>(src, 'bpmn:parallelGateway', BpmnElementType.ParallelGateway, false);
        this.loadBpmnElement<ExclusiveGateway>(src, 'bpmn:exclusiveGateway', BpmnElementType.ExclusiveGateway, false);
        this.loadBpmnElement<Process>(src, 'bpmn:subProcess', BpmnElementType.Process, false);
        this.loadBpmnElement<Task>(src, 'bpmn:task', BpmnElementType.Task, false);
        this.loadBpmnElement<ScriptTask>(src, 'bpmn:scriptTask', BpmnElementType.ScriptTask, false);

        if (startEvents.entries.length > 1) {
            throw new Error(`Process '${src.$.id}' must not have more than one start event.`);
        }

        
        let currentElement: BpmnElement | undefined = startEvents.values().next().value;
        while (currentElement) {
            switch(currentElement.$type) {
                case BpmnElementType.SequenceFlow:
                    // Follow sequence flow
                    currentElement = this.processSequenceFlow(currentElement as SequenceFlow);
                    continue;
                case BpmnElementType.StartEvent:
                    const agent = this.extractAgentSection(currentElement);
                    const options = this.extractProperties(currentElement, 'option');
                    const tools = this.extractProperties(currentElement, 'tool');
                    const input = this.extractProperties(currentElement, 'input');
                    const triggers = this.extractProperties(currentElement, 'trigger');
                    if (agent) {
                        this.builder.setAgentSection(agent);
                    }
                    if (options) {
                        this.builder.setOptions(options);
                    }
                    if (tools) {
                        this.builder.setTools(tools);
                    }
                    if (input) {
                        this.builder.setInput(input);
                    }
                    if (triggers) {
                        this.builder.setTriggers(triggers);
                    }
                    currentElement = this.getSuccessors(currentElement as StartEvent);
                    break;
                case BpmnElementType.EndEvent:
                    currentElement = undefined;
                    break;
                case BpmnElementType.Process:
                    // Create dedicated stage for sub-processes
                    const proc = currentElement as Process;

                    this.processSubProcess(proc);

                    currentElement = this.getSuccessors(proc);
                    break;
                case BpmnElementType.ExclusiveGateway:
                    // Start new stage on gateways
                    currentElement = this.processGateway(currentElement as ExclusiveGateway);
                    break;
                case BpmnElementType.ParallelGateway:
                    // Start new stage on gateways
                    currentElement = this.processGateway(currentElement as ParallelGateway);
                    break;
                case BpmnElementType.Task:
                    const task = currentElement as Task;
                    this.builder.step(new Step({
                        label: task.$.name,
                        command: task.$.name,
                    }));
                    currentElement = this.getSuccessors(task);
                    break;
                case BpmnElementType.ScriptTask:
                    this.processScriptTask(currentElement as ScriptTask);
                    currentElement = this.getSuccessors(currentElement as ScriptTask);
                    break;
                default:
                    throw new Error(`Process '${src.$.id}' contains the unsupported element '${currentElement.$type}'.`);
            }
            if (!currentElement && this.nextElementsStack.length > 0) {
                // Process stored elements when a branch ends
                currentElement = this.nextElementsStack.pop();
            }
        }

        if (this.gatewayStatus) {
            throw new Error(`Could not find any closing gateway for #${this.gatewayStatus.startId}`);
        }

        return this.builder.pipeline;
    }

    /**
     * Loads all BPMN elements of one kind and connects them to their ID
     * @param src The BPMN process element
     * @param key The type of BPMN element to load
     * @param required Whether there is at least one element required
     */
    private loadBpmnElement<T>(
        src: any,
        key: string,
        type: BpmnElementType,
        required: boolean
    ): Map<string, T> {
        if (!src[key]) {
            if (required) {
                throw new Error(`Could not find any ${key} element`);
            }
            return new Map<string, T>();
        }
        const res = new Map<string, T>();
        for (const i of src[key]) {
            if (!i.$) {
                throw new Error(`Could not find attributes of a ${key} element`);
            }

            i.$type = type;

            res.set(i.$.id, i);
            this.dictionary.set(i.$.id, i);
        }
        return res;
    }

    /**
     * Returns the first successor and inserts all remaining successors in a list of next elements.
     * @param element 
     * @param dictionary 
     * @param nextElementsStack 
     */
    private getSuccessors(element: BpmnOutgoing) {
        for (let i = 1; i < element["bpmn:outgoing"].length; i++) {
            const targetId = element["bpmn:outgoing"][i];
            const target = this.dictionary.get(targetId);
            if (!target) {
                throw new Error(`Could not find an element with the ID '${targetId}'`);
            }
            this.nextElementsStack.push(target);
        }
        return this.dictionary.get(element["bpmn:outgoing"][0]);
    }

    private processSequenceFlow(flow: SequenceFlow): BpmnElement | undefined {
        if (this.processedSequenceFlows.has(flow.$.id)) {
            // Don't follow a path twice
            return undefined;
        }

        if (flow["bpmn:conditionExpression"] && flow["bpmn:conditionExpression"].length > 0) {
            if (!this.builder.currentStage || !this.builder.currentStage.isEmpty) {
                throw new Error(`Found invalid conditional sequence flow ${flow.$.id}. There has to be a gateway before a conditional sequence flow.`);
            }
            if (flow.$.name) {
                this.builder.currentStage.name = flow.$.name;
            }
            this.builder.currentStage.when = flow["bpmn:conditionExpression"][0]._;
        }

        this.processedSequenceFlows.set(flow.$.id, true);
        return this.dictionary.get(flow.$.targetRef);
    }

    /**
     * Adds a sub process as stage to the built pipeline
     * @param proc The sub process
     */
    private processSubProcess(proc: Process) {
        const levelBefore = this.builder.currentStageLevel;
        this.builder.beginStage({
            name: proc.$.name ? proc.$.name : 'SubProcess',
        });
        new ProcessTranslator(this.builder).translate(proc);
        this.processBoundaryEvents(proc);
        if (levelBefore < this.builder.currentStageLevel) {
            this.builder.endStage();
        }
    }

    /**
     * Extracts agent settings from a BPMN element
     * @param src The element the agent settings should be extracted from
     */
    private extractAgentSection(src: BpmnElement): IAgentOption[] | undefined {
        const srcAgent = BpmnHelper.getExtensionProperties(src, /^agent$/);
        if (srcAgent && srcAgent.length > 0) {
            return [{
                name: srcAgent[0].$.value,
            }];
        }
        const srcAgents = BpmnHelper.getExtensionProperties(src, /^agent\./);
        if (!srcAgents || srcAgents.length === 0) {
            return undefined;
        }
        const options: IAgentOption[] = [];
        for (const element of srcAgents) {
            AgentOption.constructFromKeyValuePair(element.$.name, element.$.value, options);
        }
        return options;
    }

    private extractProperties(src: BpmnElement, name: string): string[] | undefined {
        const srcElements = BpmnHelper.getExtensionProperties(src, new RegExp(`^${name}$`));
        if (!srcElements || srcElements.length === 0) {
            return undefined;
        }
        const res: string[] = [];
        for (const o of srcElements) {
            res.push(o.$.value);
        }
        return res;
    }

    /**
     * Adds a task to the currently built pipeline
     */
    private processScriptTask(task: ScriptTask) {
        this.builder.step(new Step({
            label: task.$.name,
            command: task["bpmn:script"].join('\n'),
        }));
    }

    /**
     * Processes a gateway
     * @param gateway 
     * @param builder 
     * @returns The next element to process
     */
    private processGateway(gateway: Gateway): BpmnElement | undefined {
        const eGateway = gateway as ExclusiveGateway;
        if (eGateway["bpmn:incoming"].length === 1 && eGateway["bpmn:outgoing"].length > 1) {
            // Starting gateway
            this.gatewayCounter++;

            const name = gateway.$.name ? gateway.$.name : `gw${this.gatewayCounter}`;

            // Begin Branching stage
            this.builder.beginStage({
                name,
                parallel: gateway.$type === BpmnElementType.ParallelGateway,
            });

            // Begin stage for first branch
            this.builder.beginStage({
                name: `gw${this.gatewayCounter}b1`,
            });
            
            this.gatewayStack.push(new GatewayStatus(
                this.gatewayCounter,
                eGateway.$.id,
                undefined,
                eGateway["bpmn:outgoing"].length,
            ));
            return this.getSuccessors(gateway);

        } else if (eGateway["bpmn:incoming"].length > 1 && eGateway["bpmn:outgoing"].length === 1) {

            if (!this.gatewayStatus) {
                throw new Error(`Could not identify opening gateway for closing gateway '${eGateway.$.id}'`);
            }

            // Ending gateway
            if (++this.gatewayStatus.processedBranches < this.gatewayStatus.totalBranches) {
                // If there are remaining branches, don't process the ending gateway

                // Start next branch
                this.builder.endStage();
                this.builder.beginStage({
                    name: `gw${this.gatewayStatus.id}b${this.gatewayStatus.processedBranches + 1}`,
                });

                return undefined;
            }

            // All branches of the gateway have been processed
            this.gatewayStack.pop();

            // End last branch
            this.builder.endStage();

            // End branching stage
            this.builder.endStage();

            return this.getSuccessors(gateway);
        } else {
            throw new Error(`Could not determine whether gateway '${eGateway.$.id}' has starting or ending function.`);
        }
    }

    /**
     * Adds conditional post blocks to the current process
     * @param proc The process being built
     */
    private processBoundaryEvents(proc: Process) {
        const events = findInMap(this.boundaryEvents, (e) => e.$.attachedToRef === proc.$.id);
        for (const event of events as Array<any>) {
            if (event["bpmn:conditionalEventDefinition"]) {
                this.processConditionalEvent(event as ConditionalEvent);
            } else if (event["bpmn:errorEventDefinition"]) {
                this.processErrorEvent(event as ErrorEvent);
            }
        }
    }

    /**
     * Processes a conditional event
     */
    private processConditionalEvent(event: ConditionalEvent) {
        if (event["bpmn:conditionalEventDefinition"].length < 1) {
            throw new Error(`The conditional event ${event.$.id} lacks condition definitions.`)
        }
        const conditions = event["bpmn:conditionalEventDefinition"][0]["bpmn:condition"];
        if (conditions.length < 1) {
            throw new Error(`The conditional event ${event.$.id} lacks conditions.`)
        }

        const condition = conditions[0];
        if (condition.$["xsi:type"] !== 'bpmn:tFormalExpression') {
            throw new Error(`The conditional event ${event.$.id} has an unsupported condition expression of type '${condition.$["xsi:type"]}'`);
        }

        switch (condition._) {
            case 'always':
                this.builder.beginPostSection(PostCondition.always);
                this.processBoundaryEventSteps(event);
                this.builder.endPostSection();
        }
    }
    
    /**
     * Processes an error event
     */
    private processErrorEvent(event: ErrorEvent) {
        this.builder.beginPostSection(PostCondition.failure);
        this.processBoundaryEventSteps(event);
        this.builder.endPostSection();
    }

    /**
     * Follows the sequence flow of a boundary event and adds all steps to the pipeline
     */
    private processBoundaryEventSteps(event: BoundaryEvent) {
        let nextKeys = event["bpmn:outgoing"];

        while (nextKeys) {
            if (nextKeys.length !== 1) {
                throw new Error(`The boundary event '${event.$.id}' must have exactly one outgoing sequence flow.`);
            }
            const sf = this.sequenceFlows.get(nextKeys[0]);
            if (!sf) {
                throw new Error(`Could not find the outgoing sequence flow '${nextKeys[0]}' of boundary event '${event.$.id}'`);
            }
            const element = this.dictionary.get(sf.$.targetRef);
            if (!element) {
                throw new Error(`Could not find the element '${sf.$.targetRef}' that is following sequence flow '${sf.$.id}'`);
            }

            switch (element.$type) {
                case BpmnElementType.ScriptTask:
                    const script = element as ScriptTask;
                    this.processScriptTask(script);
                    nextKeys = script["bpmn:outgoing"];
                    break;
                default:
                    throw new Error(`The element type of '${element.$.id}' is not supported in boundary events`);
            }
        }
    }
}
