//DECLARATION OF VARIABLE "dificultSelector"
let dificultSelector = document.getElementById('dificultSelector');

//ADD A EVENT OF CHANGE FOR DIFICULT SELECTOR
dificultSelector.addEventListener('change', function() {
  let dificultSelected = dificultSelector.value;

  //ADD SWITCH TO SELECT ONE OF THREE VALUE (each option links to different html)
  switch (dificultSelected) {
    case "easy":
      console.log('Has seleccionado la opción Fácil');
      window.location.href = '../pages/coloreasy.html';
      break;
    case "middle":
      console.log('Has seleccionado la opción Media');
      window.location.href = '../pages/colormedium.html';
      break;
    case "hard":
      console.log('Has seleccionado la opción Difícil');
      window.location.href = '../pages/colorhard.html';
      break;
    default:
      console.log('Dificultad no válida');
  }
});