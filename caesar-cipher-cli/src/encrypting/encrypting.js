const abc = require('../data/data');

function encode(shift) {
    return function (chunk) {
        const result = chunk.toString('utf-8').split('').map((el) => {
            const isUpperCase = el === el.toUpperCase();
            const idx = abc.indexOf(el.toLowerCase());
            if (idx < 0) {
                return el;
            }
            const newIdx = idx + shift;
            const encodeEl = newIdx < abc.length ? abc[newIdx] : abc[newIdx - abc.length];
            return isUpperCase ? encodeEl.toUpperCase() : encodeEl;
        });
        return result.join('');
    }
}

function decode(shift) {
    return function (chunk) {
        const result = chunk.toString('utf-8').split('').map((el) => {
            const isUpperCase = el === el.toUpperCase();
            const idx = abc.indexOf(el.toLowerCase());
            if (idx < 0) {
                return el;
            }
            const newIdx = idx - shift;
            const decodeEl = newIdx >= 0 ? abc[newIdx] : abc[abc.length + newIdx];
            return isUpperCase ? decodeEl.toUpperCase() : decodeEl;
        });
        return result.join('');
    }

}

const streamTransform = function (action, shift) {
    return action === 'encode' ? encode(shift) : decode(shift);
}

module.exports = streamTransform;
