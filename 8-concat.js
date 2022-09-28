// read from process.stdin
// convert buffer to string and reverse it
// send to process.stdout

const concat = require('concat-stream');

process.stdin.pipe(
    concat(function (data) {
        process.stdout.write(data.toString().split('').reverse().join(''));
    })
);
