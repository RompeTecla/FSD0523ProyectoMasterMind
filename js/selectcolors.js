//

document.addEventListener('DOMContentLoaded', function() {
  const dificultad = sessionStorage.getItem('dificultad');   
  const colorContainer = document.getElementById('color-container');
  const colorInput = document.getElementById('color-input');
  const btnConfirm = document.getElementById('btn-confirm');
  
  let numberDivs;
  if (dificultad === 'easy') {
    numberDivs = 4;
  } else if (dificultad === 'middle') {
    numberDivs = 5;
  } else if (dificultad === 'hard') {
    numberDivs = 6;
  }
  
  for (let i = 0; i < numberDivs; i++) {
    const div = document.createElement('div');
    div.classList.add('color');
    colorContainer.appendChild(div);
  }
  
  // Ahora obtenemos los divs con la clase "color" después de que se haya cargado el contenido del DOM
  const colorDivs = Array.from(document.getElementsByClassName('color'));
  
  // Array para almacenar los colores seleccionados
  const arrayColors = [];
  
  // Añade eventos a los divs de colores
  colorDivs.forEach((div, index) => {
    div.addEventListener('contextmenu', (event) => {
      event.preventDefault();
      div.style.backgroundColor = '';
      arrayColors[index] = null;
    });
  
    div.addEventListener('click', () => {
      selectColor(index);
    });
  });
  
  // Función para seleccionar un color
  function selectColor(index) {
    colorDivs[index].style.backgroundColor = colorInput.value;
    arrayColors[index] = colorInput.value;
  }
  
  // Evento para el botón "Confirmar colores"
  btnConfirm.addEventListener('click', () => {
    if (arrayColors.every(color => color !== null)) {
      // Almacena los colores en sessionStorage
      sessionStorage.setItem('arrayColors', JSON.stringify(arrayColors));
      
      // Redirige al HTML del tablero de juego
      window.location.href = '../pages/game.html';
    }
  });
});

// const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

// colorDivs.forEach((div, index) => {
//   // Agregar evento para borrar color de fondo en clic
//   div.addEventListener('click', () => {
//     selectColor(index);
//   });

//   if (isMobile) {
//     // Agregar botón para borrar color de fondo en dispositivos móviles
//     const deleteButton = document.createElement('button');
//     deleteButton.textContent = 'Borrar';
//     deleteButton.addEventListener('click', () => {
//       deleteColor(index);
//     });
//     div.appendChild(deleteButton);
//   }
// });

// // Función para borrar el color de fondo
// function deleteColor(index) {
//   colorDivs[index].style.backgroundColor = '';
//   arrayColors[index] = null;
// }
