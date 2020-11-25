const stream = require('stream');
const fs = require('fs');
const process = require('process');

function optionsCheck(options) {
    if (options.input === undefined) {
        throw new Error ('Input file does not exist');
    }
    if (options.output === undefined) {
        throw new Error ('Output file does not exist');
    }
}

function codeStream({ input, output, action, shift }) {
    let streamInput;
    let streamOutput;
    if (!streamInput) {
        streamInput = process.stdin;
    } else {
        if (!fs.existsSync(input)) {
            
        }
        streamInput = fs.createReadStream(input);
    }
    if (!streamOutput) {
        streamOutput = process.stdout;
    } else {
        if (!fs.existsSync(output)) {

        }
    }

}

module.exports = codeStream;
