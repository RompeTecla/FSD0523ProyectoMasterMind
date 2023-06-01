
document.addEventListener('DOMContentLoaded', function() {
    // Obtener el nivel de dificultad del sessionStorage
    const dificultad = sessionStorage.getItem('dificultad');
  
    // Obtener el elemento contenedor
    const selectColorsGameDiv = document.querySelector('.select-colors-game-div');
  
    // Determinar la cantidad de divs según el nivel de dificultad
    let numColorButton;
    let numRows;
    switch (dificultad) {
      case "middle":
        numColorButton = 5;
        numRows = 8;
        break;
      case "hard":
        numColorButton = 6;
        numRows = 6;
        break;
      default:
        numColorButton = 4;
        numRows = 10;
        break;
    }
    const colores = JSON.parse(sessionStorage.getItem('arrayColors'));
  
    // Generar los divs dinámicamente
    for (let i = 1; i <= numColorButton; i++) {
      const div = document.createElement('div');
      div.classList.add('color-select-ball');
      div.id = `cs-${i}`;
      div.style.backgroundColor = colores[i - 1];
      selectColorsGameDiv.appendChild(div);
    }
  
    const tableroElement = document.getElementById("tableGame");
    let rowsCreated = 0;
    let currentRow = 0; // Variable para el seguimiento de la fila actual
  
    const createRows = () => {
      const rowElement = document.createElement("div");
      rowElement.classList.add("row");
      rowElement.id = `row${rowsCreated + 1}`;
  
      const checkContainer = document.createElement("div");
      checkContainer.classList.add("check-cell");
      const historyContainer = document.createElement("div");
      historyContainer.classList.add("row-history");
  
      for (let i = 0; i < 4; i++) {
        const smallBallElement = document.createElement("div");
        smallBallElement.className = "check small-balls";
        checkContainer.appendChild(smallBallElement);
      }
  
      for (let i = 0; i < 4; i++) {
        const historyBall = document.createElement("div");
        historyBall.classList.add("history-ball");
        historyContainer.appendChild(historyBall);
  
        // Evento de clic para pintar el div history-ball
        historyBall.addEventListener("click", () => {
          if (currentRow === rowsCreated && selectedColor) {
            historyBall.style.backgroundColor = selectedColor;
            selectedColor = null;
          }
        });
      }
  
      const checkButton = document.createElement("button");
      checkButton.type = "button";
      checkButton.classList.add("check-btn");
  
      // Agregamos a la row
      rowElement.appendChild(checkContainer);
      rowElement.appendChild(historyContainer);
      rowElement.appendChild(checkButton);
      // Agregamos la row al tablero
      tableroElement.appendChild(rowElement);
      rowsCreated += 1;
  
      // Desactivar los eventos de clic en todas las filas excepto la currentRow
      if (currentRow !== rowsCreated - 1) {
        const historyBalls = rowElement.querySelectorAll('.history-ball');
        historyBalls.forEach((ball) => {
          ball.style.pointerEvents = "none";
        });
        checkButton.style.pointerEvents = "none";
      } else {
        checkButton.addEventListener("click", () => {
          checkRol();
        });
      }
    }
  
    for (let i = 1; i <= numRows; i++) {
      createRows();
    }
  
    let selectedColor = null; // Variable para almacenar el color seleccionado
  
    const colorButtonsNodeList = document.querySelectorAll(".color-select-ball");
    const colorButtonsArray = Array.from(colorButtonsNodeList);
  
    colorButtonsArray.forEach((colorButton) => {
      colorButton.addEventListener("click", () => {
        selectedColor = colorButton.style.backgroundColor;
      });
    });
  
    const checkRol = () => {
      if (currentRow === rowsCreated - 1 && !selectedColor) {
        alert("Selecciona un color antes de pasar al siguiente turno");
        return;
      }
  
      if (currentRow < numRows) {
        // Realizar acciones correspondientes al turno actual
        const currentRowHistoryBalls = document.querySelectorAll(`#row${currentRow + 1} .history-ball`);
        currentRowHistoryBalls.forEach((ball) => {
          ball.style.backgroundColor = selectedColor;
        });
  
        // Incrementar currentRow
        currentRow += 1;
  
        // Desbloquear eventos de clic en la nueva currentRow
        const nextRowHistoryBalls = document.querySelectorAll(`#row${currentRow + 1} .history-ball`);
        nextRowHistoryBalls.forEach((ball) => {
          ball.style.pointerEvents = "auto";
        });
        const nextRowCheckButton = document.querySelector(`#row${currentRow + 1} .check-btn`);
        nextRowCheckButton.style.pointerEvents = "auto";
  
        // Reiniciar el color seleccionado para el siguiente turno
        selectedColor = null;
      } else {
        // Acciones finales del juego
        alert("Juego terminado");
      }
    }
  });