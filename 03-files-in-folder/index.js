const fs = require('fs').promises;;
const path = require('path');

(async function readDir() {
    const files = await fs.readdir(path.join(__dirname, 'secret-folder'), { withFileTypes: true });
    for await (let file of files) {
      if (file.isFile()) {
        const filePath = path.join(__dirname, 'secret-folder', file.name);
        const stat = await fs.stat(filePath);
        console.log(`${path.basename(filePath, path.extname(filePath))} - ${path.extname(filePath).slice(1)} - ${stat.size} bytes`);
      };
    };
})();