const { Writable } = require('stream');

class MyWritable extends Writable {
    _write(chunk, encoding, next) {
        console.log(`writing: ${chunk.toString()}`);
        next();
    }
}

const stream = new MyWritable();
process.stdin.pipe(stream);
