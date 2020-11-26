const process = require('process');

function errorProcess(message, code) {
    process.stderr.write(`${message}\n`);
    process.exit(code);
}

module.exports = errorProcess;
