const url = `https:api.coincap.io/v2/assets`;

const cryptoM = document.getElementById('cryptoM');

const criandoLista = (cadaUm) => {
  cadaUm.forEach((cryptos) => {
    const vamosFazer = document.createElement('li');
    const {
      nome,
      simbulo,
      valor
    } = cryptos;
    vamosFazer.innerHTML = `${nome} (${simbulo}): ${valor}`;
    cryptoM.appendChild(vamosFazer)
  })
}

const apiBitCoin = async () => {

  const resposta = await fetch(url);
  const response = await resposta.json();
  const cadaUm = response.data.filter((_, index) => index <= 10)
    .map((moeda) => {
      return {
        nome: moeda.name,
        simbulo: moeda.symbol,
        valor: parseFloat(moeda.priceUsd).toFixed(2),
      }
    });
  criandoLista(cadaUm);
}

window.onload = apiBitCoin()
  .catch((error) => cryptoM.innerHTML = 'Sem money hoje');