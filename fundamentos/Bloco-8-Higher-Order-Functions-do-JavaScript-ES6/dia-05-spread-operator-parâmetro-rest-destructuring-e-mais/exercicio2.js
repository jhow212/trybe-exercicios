// 2 - Crie uma função sum que dado um número variável de elementos retorna a soma desses elementos.
// Dica: use parâmetro rest .

// escreva sum abaixo
const sum = (...elementos) => {
  return elementos.reduce((acc, curr) => acc + curr, 0);
}

console.log(sum(2, 4, 6, 9, 100));