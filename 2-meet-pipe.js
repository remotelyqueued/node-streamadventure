const fs = require('fs');
const file = process.argv[2];

// readable => writable
fs.createReadStream(file).pipe(process.stdout);
