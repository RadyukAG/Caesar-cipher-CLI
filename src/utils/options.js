const process = require('process');
const args = require('minimist')(process.argv.slice(2));
const codeOptions = {
    action: args.action || args.a,
    shift: args.shift || args.s,
    input: args.input || args.i,
    output: args.output || args.o,
}

module.exports = codeOptions;
