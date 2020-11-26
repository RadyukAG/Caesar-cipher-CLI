const errorProcess = require('./errorProcess');
const fs = require('fs');

function optionsCheck(options) {
    if (options.shift === undefined) {
        errorProcess('Shift argument is required', 9);
    }
    if (options.action !== 'encode' && options.action !== 'decode') {
        errorProcess('Action argument should be decode or encode', 9);
    }
    if (fs.existsSync(options.input)) {
        try {
            fs.accessSync(options.input, fs.constants.R_OK);
        } catch {
            errorProcess(`Could not read ${options.input} file`);
        }
    }
    if (fs.existsSync(options.output)) {
        try {
            fs.accessSync(options.output, fs.constants.W_OK);
        } catch {
            errorProcess(`Could not write into ${options.output} file`);
        }
    }
}

module.exports = optionsCheck;
