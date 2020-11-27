const { Transform } = require('stream');
const fs = require('fs');
const process = require('process');
const coding = require('../encrypting/encrypting');

function codeStreams({ input, output, action, shift }) {
    const streamInput = fs.existsSync(input) ? fs.createReadStream(input, 'utf-8') : process.stdin;
    const streamOutput = fs.existsSync(output) ? fs.createWriteStream(output, {flags: 'a'}) : process.stdout;
    const transformAction = coding(action, shift);
    const streamTransform = new Transform({
        transform(chunk, enc, callback) {
            const nextChunk = transformAction(chunk);
            this.push(nextChunk);
            callback();
        }
    });
    return {
        streamInput,
        streamTransform,
        streamOutput,
    }
}

module.exports = codeStreams;
