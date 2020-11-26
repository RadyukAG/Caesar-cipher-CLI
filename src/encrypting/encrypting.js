const abc = require('../data/data');

function encode(shift) {
    return function (chunk) {
        const result = chunk.split('').map((el) => {
            const idx = abc.indexOf(el);
            if (idx < 0) {
                return el;
            }
            return idx + shift < abc.length ? abc[idx + shift] : abc[idx + shift - (abc.length - 1)];
        });
        return result.join('');
    }
}

function decode(shift) {
    return function (chunk) {
        const result = chunk.split('').map((el) => {
            const idx = abc.indexOf(el);
            if (idx < 0) {
                return el;
            }
            return idx - shift >= 0 ? abc[idx + shift] : abc[abc.length - 1 - (shift - idx)];
        });
        return result.join('');
    }

}

const streamTransform = function (action, shift) {
    return action === 'encode' ? encode : decode;
}

module.exports = streamTransform;
