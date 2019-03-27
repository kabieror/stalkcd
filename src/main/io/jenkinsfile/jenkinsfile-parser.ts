import { ANTLRInputStream, CommonTokenStream } from 'antlr4ts';
import { jenkinsfileLexer } from "./antlr4/jenkinsfileLexer";
import { jenkinsfileParser } from "./antlr4/jenkinsfileParser";
import { Pipeline } from "../../model/pipeline/Pipeline";
import { PipelineParser } from './PipelineParser';

export class JenkinsfileParser {

    constructor() {

    }

    parse(input: string): Pipeline {
        const inputStream = new ANTLRInputStream(input);
        const lexer = new jenkinsfileLexer(inputStream);
        const tokenStream = new CommonTokenStream(lexer);
        const parser = new jenkinsfileParser(tokenStream);
        const res = parser.pipeline();
        const pipeline = res.accept(new PipelineParser());
        return pipeline;
    }

}


