const estados = document.getElementById('seuestado');
const todos = ['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Distrito Federal', 'Espírito Santo', 'Goiás ','Maranhão', 'Mato Grosso', 'Mato Grosso do Sul ', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte',
    'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins']
console.log(estados);
// for (let i = 0; i <= 26; i += 1) {
//   let estado = estados + [i];
  
//   criando.id ='vqv'
// }
let cadaUm = '';

for (let i = 0; i < todos.length; i +=1) {
  cadaUm = todos[i];
  let criando = document.createElement('Option');
  criando.innerHTML = cadaUm 
  estados.appendChild(criando);
  // console.log(tags);
}

