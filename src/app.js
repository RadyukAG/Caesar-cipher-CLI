const options = require('./utils/options');
const process = require('process');
process.stdin.resume();
process.stdin.setEncoding('utf-8');
process.stdin.on('data', (data) => {
    console.log(data.slice(1));
})
console.log(options);