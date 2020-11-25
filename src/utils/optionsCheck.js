function optionsCheck(options) {
    if (options.input === undefined) {
        throw new Error ('Input file does not exist');
    }
    if (options.output === undefined) {
        throw new Error ('Output file does not exist');
    }
}

module.exports = optionsCheck;
