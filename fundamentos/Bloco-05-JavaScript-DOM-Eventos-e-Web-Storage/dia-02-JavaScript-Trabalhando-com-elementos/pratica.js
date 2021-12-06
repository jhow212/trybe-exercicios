let ondeVoceEsta = document.getElementById('elementoOndeVoceEsta');

ondeVoceEsta.parentElement.style.color = 'purple'

let primeiroF = document.getElementById('primeiroFilhoDoFilho');

let pai = ondeVoceEsta.parentElement;

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

// document.querySelector('#primeiroFilhoDoFilho').innerText = 'Achei'

// console.log(document.getElementById('pai').firstElementChild)

// console.log(document.getElementById('elementoOndeVoceEsta'))