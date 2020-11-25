const stream = require('stream');
const fs = require('fs');
const process = require('process');

function codeStream({ input, output, action, shift }) {
    const streamInput = fs.existsSync(input) ? fs.createReadStream(input) : process.stdin;
    const streamOutput = fs.existsSync(output) ? fs.createWriteStream(output) : process.stdout;
    const transform = 
}

module.exports = codeStream;
