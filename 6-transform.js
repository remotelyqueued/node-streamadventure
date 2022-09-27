const { Transform } = require('stream');

const transform = new Transform();

transform._transform = (chunk, encoding, next) => {
    transform.push(chunk.toString().toUpperCase());
    next();
};

process.stdin.pipe(transform).pipe(process.stdout);

// 1.
// const through = require('through2');
// const stream = through(write, end);
// function write(buffer, encoding, next) {
//     this.push(buffer.toString().toUpperCase());
//     next();
// }
// function end(done) {
//     done();
// }
// process.stdin.pipe(stream).pipe(process.stdout);

// official solution
// const through = require('through2');
// const tr = through(function (buf, _, next) {
//     this.push(buf.toString().toUpperCase());
//     next();
// });
// process.stdin.pipe(tr).pipe(process.stdout);
