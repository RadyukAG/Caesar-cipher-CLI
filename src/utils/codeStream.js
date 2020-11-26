const stream = require('stream');
const fs = require('fs');
const process = require('process');
const coding = require('../coding/coding');

function codeStream({ input, output, action, shift }) {
    const streamInput = fs.existsSync(input) ? fs.createReadStream(input) : process.stdin;
    const streamOutput = fs.existsSync(output) ? fs.createWriteStream(output) : process.stdout;
    const transformAction = coding(action, shift);
    const transformStream = new stream.Transform({
        transform(chunk, enc, callback) {
            const nextChunk = transformAction(chunk);
            this.push(nextChunk);
            callback();
        }
    })
    stream.pipeline(
        streamInput,
        transformStream,
        streamOutput,
    )
}

module.exports = codeStream;
