const estados = document.getElementById('seuestado');
const todos = ['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Distrito Federal', 'Espírito Santo', 'Goiás ','Maranhão', 'Mato Grosso', 'Mato Grosso do Sul ', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte',
    'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins']
const teste = document.getElementById('teste');



console.log(estados);


let cadaUm = '';

for (let i = 0; i < todos.length; i +=1) {
  cadaUm = todos[i];
  let criando = document.createElement('Option');
  criando.innerHTML = cadaUm 
  estados.appendChild(criando);
}

const arrumando = document.getElementById('botao');

function salvando (event) {
  event.preventDefault()
  let nova = document.createElement('div');
  nova.id = 'dados'
  teste.appendChild(nova)
  nova.id = 'dados'
  console.log(arrumando)
}

arrumando.addEventListener('click', salvando)
function names () {
  let praca = document.getElementById('dados')
  const nomez = document.getElementById('comeco').value;
  praca.innerHTML = nomez
  const emails = document.getElementById('seuemail').value;
  const cpfs = document.getElementById('seucpf').value
  // const enderecos = document.getElementById('seuendereco').value
  // const cidades = document.getElementById('suacidade').value
  // const estadual = document.getElementById('seuestado').value
  // const casas = document.getElementById('tipo').value
  // const predios = document.getElementById('tipos').value
  // const resumos = document.getElementById('resumo').value
  // const cargos = document.getElementById('empregado').value
  // const descricoes = document.getElementById('areadoemprego').value
  // const datas = document.getElementById('inicio').value
  
  praca.innerHTML = emails
  praca.innerHTML = cpfs
  // praca.innerHTML = enderecos
  // praca.innerHTML = cidades
  // praca.innerHTML = estadual
  // praca.innerHTML = casas
  // praca.innerHTML = predios
  // praca.innerHTML = resumos
  // praca.innerHTML = cargos
  // praca.innerHTML = descricoes
  // praca.innerHTML = datas
  
}
arrumando.addEventListener('click', names)
console.log(arrumando)