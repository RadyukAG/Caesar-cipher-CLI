const process = require('process');

function createErrorProcess(message, code) {
    process.stderr.write(`${message}\n`);
    process.exit(code);
}

module.exports = createErrorProcess;
