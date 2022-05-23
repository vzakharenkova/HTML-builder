const fs = require('fs');
const fsProm = require('fs').promises;
const path = require('path');

const projectDistPath = path.join(__dirname, '/project-dist');
makeDir (projectDistPath);

async function makeDir (projectDistPath) {
    await fs.rm(projectDistPath, {
      recursive: true,
      force: true,
    });
  
    await fs.mkdir(projectDistPath, {
      recursive: true,
    });
}