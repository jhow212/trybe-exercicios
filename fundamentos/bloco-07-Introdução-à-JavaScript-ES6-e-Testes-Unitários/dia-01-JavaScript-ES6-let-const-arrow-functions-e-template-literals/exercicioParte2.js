const fatorial = number => {
    let resultado = 1;

    for (let i = 2; i <= number; i +=1) {
        resultado *= i;
    }
    return resultado;
}

console.log(fatorial(3));

//EXERCICIO 2 

const maiorPalavra = frase => {
    let arrayPalavra = frase.split(' ');
    let maiorPalavra = 0;
    let resultado = '';

    for (const palavra of arrayPalavra) {
        if (palavra.length > maiorPalavra) {
            maiorPalavra = palavra.length;
            resultado = palavra;
        }
    }
    return resultado;
}

console.log(maiorPalavra("to ansioso para hoje e para dia 21!"));