document.getElementById('futuro').innerText = 'formado na trybe e trabalhando'

document.getElementsByClassName('main-content')[0].style.background = 'rgb(76,164,109)'

document.getElementsByClassName('center-content')[0].style.background = 'White'

document.getElementsByClassName('title')[0].innerText = 'Exercício 5.1 - JavaScript'

let tag = document.getElementsByTagName('p')
for (let i = 0; i < tag.length; i += 1) {
   let upperCase = tag[i].innerText.toUpperCase()
    tag[i].innerText = upperCase;
    
}

let tagTexto = document.getElementsByTagName('p')

for (let i = 0; i < tagTexto.length; i += 1) {
    console.log(tagTexto[i].innerText);
}
