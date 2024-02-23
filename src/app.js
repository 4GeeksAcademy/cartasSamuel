let palos = ["♦", "♥", "♠", "♣️ "];
let cartas = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];

let i = document.getElementById("iconoArriba");
let j = document.getElementById("numeroCarta");
let x = document.getElementById("iconoAbajo");

function visualizarCartas(palos, cartas) {
  let baraja = palos[Math.floor(Math.random() * palos.length)];
  let numeros = cartas[Math.floor(Math.random() * cartas.length)];
  i.textContent = baraja;
  j.textContent = numeros;
  x.textContent = baraja;
}
visualizarCartas(palos, cartas);
