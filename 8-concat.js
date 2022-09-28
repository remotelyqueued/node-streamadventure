let body = '';
process.stdin.on('data', chunk => (body += chunk));
process.stdin.on('end', () => {
    process.stdout.write(body.split('').reverse().join(''));
});

// 1.
// const concat = require('concat-stream');
// process.stdin.pipe(
//     concat(function (data) {
//         process.stdout.write(data.toString().split('').reverse().join(''));
//     })
// );

// oficial solution
// const concat = require('concat-stream');
// process.stdin.pipe(
//     concat(function (src) {
//         const s = src.toString().split('').reverse().join('');
//         process.stdout.write(s);
//     })
// );
