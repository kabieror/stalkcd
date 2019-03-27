import { Pipeline } from "../model/pipeline/Pipeline";
import { Process } from "../model/bpmn/Bpmn";
import { Builder } from "xml2js";
import { BpmnBuilder } from "../model/bpmn/BpmnBuilder";
import { Stage } from "../model/pipeline/Stage";
import { BpmnLayouter } from "./BpmnLayouter";
import { PostCondition } from "../model/pipeline/PostSection";

export class BpmnWriter {

    async write(pipeline: Pipeline): Promise<string> {
        const process = this.processPipeline(pipeline);
        const cleanedProcess = process.clean();
        const layout = new BpmnLayouter().layout(process);
        // const layout = {};
        const bpmn = {
            'bpmn:definitions': {
                $: {
                    'xmlns:bpmn': 'http://www.omg.org/spec/BPMN/20100524/MODEL',
                    'xmlns:bpmndi': 'http://www.omg.org/spec/BPMN/20100524/DI',
                    'xmlns:di': 'http://www.omg.org/spec/DD/20100524/DI',
                    'xmlns:dc': 'http://www.omg.org/spec/DD/20100524/DC',
                    'xmlns:camunda': 'http://camunda.org/schema/1.0/bpmn',
                    'xmlns:xsi': 'http://www.w3.org/2001/XMLSchema-instance',
                    id: BpmnBuilder.generateId('Definitions'),
                    targetNamespace: 'http://bpmn.io/schema/bpmn',
                },
                'bpmn:process': [process],
                'bpmndi:BPMNDiagram': [layout],
            }
        };
        const xml = new Builder().buildObject(bpmn);
        return xml;
    }

    /**
     * Transform a StalkCD pipeline into a BPMN process
     */
    processPipeline(pipeline: Pipeline): Process {
        let builder = new BpmnBuilder();
        if (pipeline.agent) {
            builder.processAgentSection(pipeline.agent);
        }
        if (pipeline.options) {
            builder.processProperties('option', pipeline.options);
        }
        if (pipeline.tools) {
            builder.processProperties('tool', pipeline.tools);
        }
        if (pipeline.triggers) {
            builder.processProperties('trigger', pipeline.triggers);
        }
        if (pipeline.environment) {
            builder.processEnvironmentSettings(pipeline.environment);
        }


        for (const stage of pipeline.stages) {
            this.processStage(stage, builder);
        }

        return builder.finalize();
    }

    processStage(stage: Stage, builder: BpmnBuilder, createSubStage = true): BpmnBuilder {
        if (createSubStage) {
            builder.beginStage(stage.name);
        }

        if (stage.agent) {
            builder.processAgentSection(stage.agent);
        }
        if (stage.options) {
            builder.processProperties('option', stage.options);
        }
        if (stage.tools) {
            builder.processProperties('tool', stage.tools);
        }
        if (stage.environment) {
            builder.processEnvironmentSettings(stage.environment);
        }

        if (stage.post) {
            for (const condId in PostCondition) {
                if (isNaN(Number(condId))) {
                    continue;
                }
                const condition = PostCondition[Number(condId)];
                if (!stage.post.has(condition)) {
                    continue;
                }

                builder.beginPostSection(condition);
                for (const step of stage.post.get(condition)) {
                    builder.step(step);
                }
                builder.endPostSection();
            }
        }

        if (stage.stages) {
            // Process sub-stages
            if (stage.parallel) {
                builder.beginParallelStages(stage.name);
            }
            for (const subStage of stage.stages) {
                if (subStage.when) {
                    builder.beginConditionalStage(subStage.name, subStage.when);
                } else {
                    builder.beginStage(subStage.name);
                }
                this.processStage(subStage, builder, false);
                builder.endStage();
            }
            if (stage.parallel) {
                builder.endParallelStages();
            }
        } else if (stage.steps) {
            // Process steps
            for (const step of stage.steps) {
                builder.step(step);
            }
        } else {
            // Neither stages nor steps could be found.
            console.log(`Warning: Stage ${stage.name} has neither stages nor steps.`);
        }

        if (createSubStage) {
            builder.endStage();
        }

        return builder;
    }

}