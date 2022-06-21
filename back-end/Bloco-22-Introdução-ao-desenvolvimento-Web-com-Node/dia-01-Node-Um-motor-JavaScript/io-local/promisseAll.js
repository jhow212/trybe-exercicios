const fs = require('fs');

Promise.all([
  fs.readFile('file.txt'),
  fs.readFile('file2.txt'),
  fs.readFile('file3.txt'),
])
  .then(([file, file2, file3]) => {
    const fileSizeSum = file.byteLength + file2.byteLength + file3.byteLength;
    console.log(`Lidos 3 arquivos totalizando ${fileSizeSum} bytes`);
  })
  .catch((err) => {
    console.error(`Erro ao ler os arquivos: ${err.message}`);
  });
