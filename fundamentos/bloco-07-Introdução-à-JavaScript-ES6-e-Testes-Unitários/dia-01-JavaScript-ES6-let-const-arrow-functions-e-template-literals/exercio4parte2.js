let skills = ['CSS', 'JS', 'DOM', 'HTML', 'Soft Skills'];


const recebe = (substituir, palavra) => {
  let preparando = substituir.split('');
  let letra = 'x';
  let mudanca = '';

  for (let i = 0; i < preparando.length; i += 1) {
    if (preparando[i] === letra) {
      preparando[i] = palavra;
    }
    mudanca = mudanca + preparando[i];
  }
  return mudanca;
}

console.log(recebe('Trybe x aqui', 'bebeto'));
// agradecimentos ao meu amigo gabriel grippa <3
const segunda = (a) => {
  let primeira = recebe('Trybe x aqui', 'bebeto');
  a.sort();
  let resultado = '';

  for (const i of a) {
    resultado = `${resultado} ${i}`;
  }
  return `${primeira} Minhas cinco principais habilidades são: ${resultado}`;
}
console.log(segunda(skills));
