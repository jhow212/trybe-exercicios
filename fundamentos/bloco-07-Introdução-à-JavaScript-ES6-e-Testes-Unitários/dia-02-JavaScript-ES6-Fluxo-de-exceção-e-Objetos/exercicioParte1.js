const erro1 = (n1, n2) => {
  if (!n1 || !n2) {
    throw new Error('Necessário dois números');
  }
}

const erro2 = (n1,n2) => {
  if (isNaN(n1) || isNaN(n2)){
    throw new Error('Necessario que insira somente números');
  }
}

function sum() {
  try {
    const value1 = document.getElementById('value1').value;
    const value2 = document.getElementById('value2').value;
    const result = parseInt(value1) + parseInt(value2);
    erro1(value1, value2);
    erro2(value1, value2);
    document.getElementById('result').innerHTML = `Resultado: ${result}`;
    
  }  catch (error) {
    document.getElementById('result').innerHTML = `AVISO: ${error.message}`;
  } finally {
    document.getElementById('value1').value = '';
    document.getElementById('value2').value = '';
  }
  
}

window.onload = () => {
  const button = document.getElementById('button');
  button.addEventListener('click', sum);
}