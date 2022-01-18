// Ao chamar a função doingThings:
const doingThings = (wakeUp) => {
    console.log(wakeUp());
}

// Ela deve retornar o valor do respectivo parâmetro, neste caso:
// Acordando!!
const acorda = () => 'Acordando!!'
const cafe = () => 'Bora tomar café!!'
const dormir = () => 'Partiu dormir!!'

doingThings(acorda);
doingThings(cafe);
doingThings(dormir);