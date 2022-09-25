const { Readable } = require('stream');

const stream = new Readable();

stream._read = () => {};
stream.push(process.argv[2]);
stream.pipe(process.stdout);

// official solution
// const { Readable } = require('stream');
// class ReadableStream extends Readable {
//     _read(size) {}
// }
// const stream = new ReadableStream();
// stream.push(process.argv[2]);
// stream.pipe(process.stdout);

// consuming a readable stream
// stream.pipe(writeable); // pushes data to writeable
// stream.on('readable', () => {}); // have to use read(size) to collect data
// stream.on('data', () => {}); // need to use pause() and resume()

// adding data to stream
// stream.push()
