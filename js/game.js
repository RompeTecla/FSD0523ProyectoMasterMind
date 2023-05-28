
document.addEventListener('DOMContentLoaded', function() {
    // Obtener el nivel de dificultad del sessionStorage
const dificultad = sessionStorage.getItem('dificultad');

// Obtener el elemento contenedor
const selectColorsGameDiv = document.querySelector('.select-colors-game-div');

// Determinar la cantidad de divs según el nivel de dificultad
// let numDivs;
// if (dificultad === 'easy') {
//   let numDivs = 4;
// } else if (dificultad === 'middle') {
//   let numDivs = 5;
// } else if (dificultad === 'hard') {
//   let numDivs = 6;
// }
let numDivs;
switch (dificultad) {
    case "middle":
        numDivs = 5;
        break;
    case "hard":
        numDivs = 6;
        break;
    default:
        numDivs = 4;
        break;
}

// Generar los divs dinámicamente
for (let i = 1; i <= numDivs; i++) {
  const div = document.createElement('div');
  div.classList.add(`color-select-ball0${i}`);
  div.classList.add('color-select-ball');
//   div.classList.add('hola');
  div.id=`cs-${i}`
  selectColorsGameDiv.appendChild(div);
}
// Obtener el array de colores del sessionStorage
const colores = sessionStorage.getItem('arrayColors');
console.log(colores)

  const colorSelectBall01 = document.querySelector('cs-1');
  const colorSelectBall02 = document.querySelector('cs-2');
  const colorSelectBall03 = document.querySelector('cs-3');
  const colorSelectBall04 = document.querySelector('cs-4');

let color1 = colores[0].toString()
let color2 = colores[1].toString()
let color3 = colores[2].toString()
let color4 = colores[3].toString()
console.log(color1)
console.log(color2)
console.log(color3)
console.log(color4)

  colorSelectBall01.style.backgroundColor = color1;
  colorSelectBall02.style.backgroundColor = color2;
  colorSelectBall03.style.backgroundColor = color3;
  colorSelectBall04.style.backgroundColor = color4;
})

