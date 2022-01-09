// const JustValidate = require('just-validate')

// const validate = new JustValidate('#teste');
const validate = new window.JustValidate('#teste');
validate.addField('#comeco', [
  {
    rule: 'minLength',
    value: 3,

  },
  {
    rule: 'maxLength',
    value: 40,
  },
  {
    rule: 'required',
    errorMessage: 'Name is required',
  }
])
  .addField('#seuemail', [
    {
      rule: 'required',
      errorMessage: 'Email is required',
    },
    {
      rule: 'email',
      errorMessage: 'Email is invalid!',
    },
    {
      rule: 'maxLength',
      value: 50,
    }
  ])
  .addField('#seucpf', [
    {
      rule: 'maxLength',
      value: 11,
    },
    {
      rule: 'required',
      errorMessage: 'CPF is required',
    }
  ])
  .addField('#seuendereco', [
    {
      rule: 'maxLength',
      value: 200,
    },
    {
      rule: 'required',
      errorMessage: 'Endereço is required',
    }
  ])
  .addField('#suacidade', [
    {
      rule: 'maxLength',
      value: 28,
    },
    {
      rule: 'required',
      errorMessage: 'Cidade is required',
    }
  ])
  .addField('#seuestado', [
    {
      rule: 'required',
      errorMessage: 'Estado is required',
    }
  ])
  .addField('#tipo', [
    {
      rule: 'required',
      errorMessage: 'Moradia is required',
    }
  ])
  .addField('#resumo', [
    {
      rule: 'maxLength',
      value: 1000,
    },
    {
      rule: 'required',
      errorMessage: 'Resumo is required'
    }
  ])
  .addField('#empregado', [
    {
      rule: 'maxLength',
      value: 40,
    },
    {
      rule: 'required',
      errorMessage: 'Cargo is required'
    }
  ])
  .addField('#areadoemprego', [
    {
      rule: 'maxLength',
      value: 500,
    },
    {
      rule: 'required',
      errorMessage: 'Descrição is required'
    }
  ]);

document.getElementById('inicio').DatePickerX.init();

const teste = document.getElementById('teste');

const estados = document.getElementById('seuestado');
const todos = ['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Distrito Federal', 'Espírito Santo', 'Goiás ', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul ', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins']



console.log(estados);


let cadaUm = '';

for (let i = 0; i < todos.length; i += 1) {
  cadaUm = todos[i];
  let criando = document.createElement('Option');
  criando.innerHTML = cadaUm
  estados.appendChild(criando);
}

const arrumando = document.getElementById('botao');

function salvando(event) {
  event.preventDefault()
  let nova = document.createElement('div');
  nova.id = 'dados'
  teste.appendChild(nova)
  nova.id = 'dados'
  console.log(arrumando)
}

arrumando.addEventListener('click', salvando)



arrumando.addEventListener('click', names)
console.log(arrumando)