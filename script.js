// Variaveis

let player1 = document.querySelector("#run1");
let player2 = document.querySelector("#run2");

let tela2 = document.querySelector("#tela2");
let btn = document.querySelector("#btn");
let text = document.querySelector("#config");

//  Pegando css

function cssVal() {
  tela2.style.cssText = `${text.value}`;
}

// Funcao ativada pelo teclado

function teclado(e) {
  if (e.keyCode == 13) {
    cssVal();
  }
}

// Atualiza coordenadas

btn.addEventListener("click", cssVal);

document.onkeydown = teclado;
