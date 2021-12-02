//Exercicio 1
function verificandoPalindromo(palavra) {
  let reverse = palavra.split("").reverse().join("")

  if (reverse === palavra) {
    return true;
  } else {
    return false;
  }
}
console.log(verificandoPalindromo("arara"));
console.log(verificandoPalindromo("joao"));

//Exercicio 2
let teste = [2, 4, 6, 7, 10, 0, -3];

function verificandoMaiorIndice(array) {
  let resultado = 0;
  let maiorNumero = 0;

  for (let index = 0; index < array.length; index += 1) {
    resultado = array[index];

    if (resultado > maiorNumero) {
      maiorNumero = resultado;
    }
  }
  let indice = array.indexOf(maiorNumero);
  return indice;
}

console.log(verificandoMaiorIndice(teste));

//Exercicio 3
function verificandoMaiorNumero(array) {
  let resultado = 0;
  let maiorNumero = 0;

  for (let index = 0; index < array.length; index += 1) {
    resultado = array[index];

    if (resultado > maiorNumero) {
      maiorNumero = resultado;
    }
  }
  return maiorNumero;
}

console.log(verificandoMaiorNumero(teste));