let clickCount = 0;
let textoDaTela = document.getElementById("text");
const botao = document.getElementById("btn");
botao.addEventListener("click", () => textoDaTela.innerHTML = `Esse botão foi apertado:
${clickCount +=1} vezes `);