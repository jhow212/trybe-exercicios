const check = (number) => {
  if (sorteio() === number) {
    const bom = `${number} Parabéns você ganhou` 
    return bom;
  } else {
    const ruim = `${number} Tente novamente` 
    return ruim;
  };
}

const sorteio = () => { 
  const numero = Math.floor((Math.random() * 5) +1) 
  return numero;
}

console.log(check(4));