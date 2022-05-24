const fs = require('fs');
const fsProm = require('fs').promises;
const path = require('path');
const pathCSS = path.join(__dirname, '/styles');
const resultCSSPath = path.join(__dirname, '/project-dist', 'bundle.css');

joinCSS();

async function joinCSS() {
  let writeStream = fs.WriteStream(resultCSSPath, 'utf-8');
  const files = await fsProm.readdir(pathCSS, {
    withFileTypes: true,
  });
  for await (file of files) {
    if (file.isFile() && path.extname(file.name) === '.css') {
      const filePath = path.join(__dirname, '/styles', file.name);
      const stream = new fs.ReadStream(filePath, 'utf-8');
      stream.on('readable', async () => {
        let buffer = await stream.read();
        if (buffer) {
          const style = buffer.toString();
          writeStream.write(`${style}\n\n`);
        }
      });
    }
  }
}
