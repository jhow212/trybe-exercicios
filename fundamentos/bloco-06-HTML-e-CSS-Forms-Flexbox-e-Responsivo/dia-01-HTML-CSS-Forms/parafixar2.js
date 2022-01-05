// SELETORES
const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");

function elementoA (event) {
  event.preventDefault();
  console.log(HREF_LINK);
}

HREF_LINK.addEventListener("click", elementoA);

function elementochek (event) {
  event.preventDefault();
  console.log(INPUT_CHECKBOX);
}

INPUT_CHECKBOX.addEventListener("click", elementochek);

function elementoinputtext (event) {
  let x = event.key
  
  if (x !== "a") {
    event.preventDefault();
  }
 
  console.log(INPUT_CHECKBOX);
}

INPUT_TEXT.addEventListener("keypress", elementoinputtext);
