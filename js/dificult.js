// const dificultySelect = () => {

//   let dificult = document.getElementById("nameCel").value;

//   if (!player) {
//     return;
//   }

//   sessionStorage.setItem("usuario", player);


//   window.location.href = "../pages/dificult.html";
// };   

function generarDivs() {
  const dificult = document.getElementById('dificultad').value;
  const cantidadDivs;

  if (dificultad === 'facil') {
    cantidadDivs = 4;
  } else if (dificultad === 'medio') {
    cantidadDivs = 5;
  } else if (dificultad === 'dificil') {
    cantidadDivs = 6;
  }

  const contenedor = document.getElementById('contenedor');
  contenedor.innerHTML = '';

  for (var i = 0; i < cantidadDivs; i++) {
    var div = document.createElement('div');
    div.textContent = 'Div ' + (i + 1);
    contenedor.appendChild(div);
  }
}
En este ejemplo, utilizamos un elemento <select> para que el usuario pueda seleccionar la dificultad. Luego, en la función generarDivs(), obtenemos el valor seleccionado y asignamos la cantidad adecuada de divs según la dificultad elegida.

El contenedor <div> con el id "contenedor" se encarga de mostrar los divs generados. Primero, lo vaciamos utilizando innerHTML = ''. Luego, en el bucle for, creamos nuevos elementos <div> utilizando document.createElement('div'), les asignamos contenido utilizando textContent, y los agregamos al contenedor con appendChild(div).

Cuando el usuario cambia la dificultad seleccionada, se llama a la función generarDivs() a través del evento onchange del elemento <select>, y se generan los divs correspondientes.

Espero que esta información te sea útil para crear un HTML dinámico que cumpla con tus necesidades. ¡Buena suerte!






