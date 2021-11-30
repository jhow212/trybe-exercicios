const a = 6;
const b = 19;

let adicao = a + b;
let subtracao = a - b;
let multiplicacao = a * b;
let divisao = a / b;
let modulo = a % b;

console.log(adicao);
console.log(subtracao);
console.log(multiplicacao);
console.log(divisao);
console.log(modulo);

const num1 = 28;
const num2 = 23;

if (num1 > num2) {
    console.log("o primeiro numero é maior");
}
else if (num1 < num2){
    console.log("o segundo numero é maior");
}
else {
    console.log("os numeros são iguais")
}


const numero1 = 12;
const numero2 = 28;
const numero3 = 46;

if (numero1 > numero2 && numero1 > numero3) {
    console.log("o numero1 é o maior");
}
else if (numero2 > numero1 && numero2 > numero3){
    console.log("o numero2 é o maior");
}
else {
    console.log("o numero3 é o maior")
}

const verificacao = -5;

if (verificacao >= 1) {
    console.log("numero positivo!")
}
else if (verificacao <= -1) {
    console.log("numero negativo!")
}
else {
    console.log("valor 0")
}

const angulo1 = 80;
const angulo2 = 80;
const angulo3 = 20;

if (angulo1 + angulo2 + angulo3 === 180) {
    console.log(true)
}
else if (angulo1 < 0 || angulo2 < 0 || angulo3 < 0 ) {
    console.log("Erro")
}
else {
    console.log(false)
}