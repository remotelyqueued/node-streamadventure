// read from process.stdin
// convert buffer to string and reverse it
// send to process.stdout

const data = [];
process.stdin
    .on('data', function (chunk) {
        data.push(chunk.toString().split('').reverse().join(''));
    })
    .pipe(process.stdout);
