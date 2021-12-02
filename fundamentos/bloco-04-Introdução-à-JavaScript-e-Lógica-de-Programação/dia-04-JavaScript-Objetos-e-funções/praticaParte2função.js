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


 
