//DECLARATION OF VARIABLE "dificultSelector"
let dificultSelector = document.getElementById('dificultSelector');

//ADD A EVENT OF CHANGE FOR DIFICULT SELECTOR
dificultSelector.addEventListener('change', function() {
  let dificultSelected = dificultSelector.value;

  //ADD SWITCH TO SELECT ONE OF THREE VALUE (each option links to different html)
  switch (dificultSelected) {
    case "easy":
      window.location.href = '../pages/coloreasy.html';
      break;
    case "middle":
      window.location.href = '../pages/colormedium.html';
      break;
    case "hard":
      window.location.href = '../pages/colorhard.html';
      break;
  }
});