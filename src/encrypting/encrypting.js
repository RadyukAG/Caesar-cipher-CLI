const abc = require('../data/data');

function encode(shift) {
    return function (chunk) {
        const result = chunk.toString('utf-8').split('').map((el) => {
            const idx = abc.indexOf(el);
            if (idx < 0) {
                return el;
            }
            const newIdx = idx + shift;
            return newIdx < abc.length ? abc[newIdx] : abc[newIdx - abc.length];
        });
        return result.join('');
    }
}

function decode(shift) {
    return function (chunk) {
        const result = chunk.toString('utf-8').split('').map((el) => {
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
    return action === 'encode' ? encode(shift) : decode(shift);
}

module.exports = streamTransform;
