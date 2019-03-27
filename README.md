# StalkCD
This application has been developed as part of the master's thesis "Resilient Continuous Delivery Pipelines Based on BPMN" by Oliver Kabierschke.

## Prerequisites
To run the software, [Node.js](https://nodejs.org) is required as run-time environment. 

## Installation
In the directory of this repository, run the following command:

```shell
npm install
```

Now, compile the TypeScript code to JavaScript.

```shell
./node_modules/.bin/tsc
```

Or, if you have installed typescript globally (`npm -g i typescript`), just run:

```shell
tsc
```

## Execute Transformations
The application can be used to transform Jenkinsfiles to BPMN and back. You can get help on the usage of the tool by running `./stalkcd`.
For more detailed help, append '-h' to a command, e.g.: `./stalkcd jenkins2stalkcd -h`.

Some example commands:

```shell
./stalkcd jenkins2stalkcd -s ./Jenkinsfile -t ./Jenkinsfile.yml
./stalkcd stalkcd2bpmn -s ./Jenkinsfile.yml -t ./Jenkinsfile.bpmn
./stalkcd bpmn2stalkcd -s ./Jenkinsfile.bpmn -t ./Jenkinsfile.yml
./stalkcd stalkcd2jenkins -s ./Jenkinsfile.yml -t ./Jenkinsfile
```

## Download Sample Jenkinsfiles
The tool can download sample Jenkinsfiles from GitHub. During execution, it asks for your GitHub credentials, as the search API accross repositories is only accessible for logged-in users.

You have to provide a search expression. For example, to find all Jenkinsfiles written in the declarative syntax, you could use an expression like *'pipeline agent filename:Jenkinsfile in:file'*.

Example:

```shell
./stalkcd download-sample-jenkinsfiles -d ./res/Jenkinsfiles.source -q 'pipeline agent filename:Jenkinsfile in:file'
```

Note that the GitHub API only returns up to approx. 1000 search results. If you need more results, you can slightly vary the search expression and run the command multiple times. Already downloaded files will not be downloaded once again.

# Development
As development environment, we recommend using Visual Studio Code.

## Start continuous compilation
The typescript compiler supports automatically compiling the sources upon changes to the source files. Just run:

```bash
tsc -watch
```