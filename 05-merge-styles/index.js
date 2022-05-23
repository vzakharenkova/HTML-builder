const fs = require('fs');
const fsProm = require('fs').promises;
const path = require('path');
const pathCSS = path.join(__dirname, '/styles');
const resultCSSPath = path.join(__dirname, '/project-dist', 'bundle.css');
// const writeStream = fs.WriteStream(resultCSSPath, 'utf-8');

joinCSS();

async function joinCSS() {
    const files = await fsProm.readdir(pathCSS, {
        withFileTypes: true,
      });
      files.forEach(async (file, index) => {
        if (file.isFile() && path.extname(file.name) === '.css') {
          const filePath = path.join(__dirname, '/styles', file.name);
          const readStream = fs.createReadStream(filePath, 'utf-8');
          const writeStream = fs.createWriteStream(resultCSSPath, 'utf-8');
          readStream.pipe(writeStream);
        }
      });

}