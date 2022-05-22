
const fs = require('fs').promises;
const path = require('path');
const newFolder = path.join(__dirname, 'files-copy');
const oldFolder = path.join(__dirname, 'files');

copyFiles(oldFolder, newFolder);

async function copyFiles (oldFolder, newFolder) {
    await fs.rm(newFolder, {
      recursive: true,
      force: true,
    });
  
    await fs.mkdir(newFolder, {
      recursive: true,
    });
  
    const files = await fs.readdir(oldFolder, {
        withFileTypes: true,
      });
    files.forEach(async (file, index) => {
      if (file.isFile()) {
        const copyingFile = path.join(oldFolder, file.name);
        const copyedFile = path.join(newFolder, file.name);
        await fs.copyFile(copyingFile, copyedFile, 2);
      }
    });
  };
  
  
