const fs = require('fs');

async function main() {
  try {
    await fs.writeFile('./meu-arquivo.txt', 'Meu textão');
    console.log('Arquivo lido com sucesso!');
  } catch (err) {
    console.error(`Erro ao escrever o arquivo: ${err.message}`);
  }
}

main();
