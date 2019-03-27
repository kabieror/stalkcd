
export interface IAgentOption {
    name: string;
    value?: string;
    options?: IAgentOption[];
}

export class AgentOption {

    static constructFromKeyValuePair(key: string, value: string, target: IAgentOption[]) {
        const pathStack = key.split('.');

        // Drop first element 'agent'
        if (pathStack.length > 0 && pathStack[0] === 'agent') {
            pathStack.shift();
        }

        // The agent option element to insert the value to
        let targetOption: IAgentOption | undefined;

        while (pathStack.length > 0) {
            // Construct the Agent Options based on the names of the properties
            const pathElement = pathStack.shift();
            if (!pathElement) continue;

            // Take existing agent options, if they exist
            let cTarget = target.find(o => o.name === pathElement);

            if (cTarget) {
                // Re-use existing agent options
                let nextTarget: IAgentOption[] | undefined = cTarget.options;
                if (!nextTarget) {
                    nextTarget = [];
                    cTarget.options = nextTarget;
                }
                targetOption = cTarget;
                target = nextTarget;
            } else {
                // If no agent option exists, create a new one for this path element
                const newTarget: IAgentOption[] = [];
                targetOption = {
                    name: pathElement,
                    options: newTarget,
                };
                target.push(targetOption);
                target = newTarget;
            }
        }

        if (!targetOption) {
            return;
        }

        delete targetOption.options;
        targetOption.value = value;
    }
}
