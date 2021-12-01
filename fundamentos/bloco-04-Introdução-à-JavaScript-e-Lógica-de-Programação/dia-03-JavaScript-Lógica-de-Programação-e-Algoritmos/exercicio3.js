let array = ['java', 'javascript', 'python', 'html', 'css'];

let resultado = '';
let maiorPalavra = '';

for(let index = 0; index < array.length; index +=1) {
   resultado = array[index];

  if (resultado.length > maiorPalavra.length) {
    maiorPalavra = resultado;
  }
}
console.log(maiorPalavra);