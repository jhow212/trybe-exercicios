let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

console.log(numbers[0]);
console.log(numbers[1]);
console.log(numbers[2]);
console.log(numbers[3]);
console.log(numbers[4]);
console.log(numbers[5]);
console.log(numbers[6]);
console.log(numbers[7]);
console.log(numbers[8]);
console.log(numbers[9]);

let soma = numbers[0] + numbers[1] + numbers[2] + numbers[3] + numbers[4] + numbers[5] + numbers[6] + numbers[7] + numbers[8] + numbers[9];

let divisao = numbers[0] + numbers[1] + numbers[2] + numbers[3] + numbers[4] + numbers[5] + numbers[6] + numbers[7] + numbers[8] + numbers[9] / 10;
console.log(soma);
console.log(divisao);

if (divisao > 20) {
  console.log("valor maior que 20");
}
else {
  console.log("valor menor ou igual a 20");
}


let resultado = 0;
let maiorNumero = 0;

for(let index = 0; index < numbers.length; index +=1) {
   resultado = numbers[index];

  if (resultado > maiorNumero) {
    maiorNumero = resultado;
  }
}
console.log(maiorNumero);