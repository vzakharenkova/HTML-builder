const fs = require('fs');
const path = require('path');
const text = path.join(__dirname, '/text.txt');

const readStream = fs.createReadStream(text, 'utf-8');

readStream.on('data', (item) => {
  process.stdout.write(item);
});
