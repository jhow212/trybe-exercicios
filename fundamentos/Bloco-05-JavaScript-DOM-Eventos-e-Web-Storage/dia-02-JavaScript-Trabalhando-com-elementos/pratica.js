let ondeVoceEsta = document.getElementById('elementoOndeVoceEsta');

ondeVoceEsta.parentElement.style.color = 'purple'

let primeiroF = document.getElementById('primeiroFilhoDoFilho');

let pai = ondeVoceEsta.parentElement;

primeiroF.innerText = 'Terminei'

pai.firstElementChild
ondeVoceEsta.previousElementSibling
ondeVoceEsta.nextSibling
ondeVoceEsta.nextElementSibling

let terceiroFPai = pai.lastElementChild.previousElementSibling

console.log(pai.firstElementChild)
console.log(ondeVoceEsta.previousElementSibling)
console.log(ondeVoceEsta.nextSibling)
console.log(ondeVoceEsta.nextElementSibling)
console.log(terceiroFPai)

