let ondeVoceEsta = document.getElementById('elementoOndeVoceEsta');

ondeVoceEsta.parentElement.style.color = 'purple'

let primeiroF = document.getElementById('primeiroFilhoDoFilho');

let pai = ondeVoceEsta.parentElement;

primeiroF.innerText = 'Terminei'

pai.firstElementChild
ondeVoceEsta.previousElementSibling
ondeVoceEsta.nextSibling
ondeVoceEsta.nextElementSibling

let terceiroFPai = pai.firstChild.nextElementSibling.nextElementSibling

console.log(pai.firstElementChild)
console.log(ondeVoceEsta.previousElementSibling)
console.log(ondeVoceEsta.nextSibling)
console.log(ondeVoceEsta.nextElementSibling)
console.log(terceiroFPai)


let irmaoMaisNovo = document.createElement('section');
pai.appendChild(irmaoMaisNovo);
irmaoMaisNovo.id = 'irmaoMaisNovo';

let filhoDeOndeVcEsta = document.createElement('section')
ondeVoceEsta.appendChild(filhoDeOndeVcEsta);
filhoDeOndeVcEsta.id = 'terceiroFilhoDoFilho';

let primeiroFilhoDoPrimeirofilhoDoFilho = document.createElement('section')
primeiroF.appendChild(primeiroFilhoDoPrimeirofilhoDoFilho)
primeiroFilhoDoPrimeirofilhoDoFilho.id = 'primeiroFilhoDoPrimeirofilhoDoFilho'

let voltandoEAvancandoParaTerceiroFilho = primeiroFilhoDoPrimeirofilhoDoFilho.parentElement.parentElement.parentElement.firstChild.nextElementSibling.nextElementSibling.nextElementSibling;

function remover (idDoPai, idDoFilho) {
    idDoPai.removeChild(idDoFilho)
}
remover(pai, irmaoMaisNovo)
remover(pai, primeiroFilho)
remover(elementoOndeVoceEsta, segundoEUltimoFilhoDoFilho)
remover(elementoOndeVoceEsta, terceiroFilhoDoFilho)
remover(pai, terceiroFilho)
remover(pai, quartoEUltimoFilho)


console.log(document.getElementById('pai'));
console.log(document.getElementById('paiDoPai'));
