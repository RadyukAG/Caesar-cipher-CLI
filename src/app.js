const options = require('./utils/options');
const codeStreams = require('./utils/codeStreams');
const optionsCheck = require('./utils/optionsCheck');
const stream = require('stream');

optionsCheck(options);
const { streamInput, streamTransform, streamOutput } = codeStreams(options);

stream.pipeline(
    streamInput,
    streamTransform,
    streamOutput,
    (err) => {
        if (err) {
            console.error('An error has occurred: ', err);
        }
        else {
            console.log('Done!');
        }
    }
);