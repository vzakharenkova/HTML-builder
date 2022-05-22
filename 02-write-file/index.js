const fs = require('fs');
const path = require('path');
const process = require('process');
const stdin = process.stdin;


fs.writeFile(
    path.join(__dirname, 'data.txt'),
    '',
    (err) => {
      if (err) throw err
  })

console.log('Привет! Введи, пожалуйста, какой-либо текст');

stdin.on('data', (data) => {
    if (data.toString().trim() === 'exit') {
        console.log('Удачи в обучении!');
        process.exit(0);
    } else {
        fs.appendFile(path.join(__dirname, 'data.txt'), data, (err) => {
            if (err) throw err;
          });
    }
});

process.on('SIGINT', () => {
    console.log('Удачи в обучении!');
    process.exit(0);
});