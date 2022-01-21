const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

// const nota = (certo, respostas, func) => {
//   func()
// }

const verifica = (certo, respostas) => {
  let pontos = 0;

  for (let index = 0; index < respostas.length; index += 1) {
    for (let i = 0; i < certo.length; i += 1) {
      if (respostas[index] === certo[i]) {
        pontos += 1;
      }  
      if (respostas[index] !== certo[i]) {
        pontos = pontos - 0.5;
      } 
    }
  }
  return pontos
}

console.log(verifica(RIGHT_ANSWERS, STUDENT_ANSWERS))
// console.log(nota(RIGHT_ANSWERS, STUDENT_ANSWERS, verifica))