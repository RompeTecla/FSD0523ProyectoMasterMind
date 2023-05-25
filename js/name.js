
//DECLARATION OF VARIABLES

// let input = document.getElementById("nameCel");
// const saveButton = document.getElementById("saveButton");
// let savedText = "";

// input.addEventListener("input", function() {
//   savedText = input.value;""
// //   console.log(input)
// });

// saveButton.addEventListener("click", function() {

//   console.log(savedText);
// });

// // FUNCTION FOR BUTTON TO NAVIGATE TO LINK

// saveButton.onclick = function() {

//   window.location.href = "../pages/dificult.html";
// };

// //En la ventana de js.  para guardarlo en el localStorage
// let userName = document.getElementById("user");
// const storeUserName = () =>
//     localStorage.setItem("userName", document.getElementById("user").value);


// 1. CREO FUNCION.
// 2. DEFINO LA VARIABLE DONDE VOY A GUARDAR LA INFORMACION.
// 3. LO IGUALO AL DOM QUE APUNTA AL ELEMENTO CON EL INPUT.
// 4. RESTO DE LOGICA DE LA FUNCION (COMPROBAR SI ESTA VACIO, BLOQUEAR LA FUNCION...)
// 5. GUARDAR LA VARIABLE EN EL SESSION STORAGE.
// 6. AVANZAR A LA SIGUIENTE PAGINA.


//THE PLAYER ENTERS HIS NAME IN THE INPUT BOX AND IT IS SAVED IN THE SESSION STORAGE. IF THE PLAYER DOESN'T REGISTER ANY INPUT, THE FUNCTION BLOCKS THE ADVANCE TO THE DIFFICULTY SELECTION PAGE.

const playerSave = () => {

  let player = document.getElementById("nameCel").value;

  if (!player) {
    return;
  }

  sessionStorage.setItem("usuario", player);


  window.location.href = "../pages/dificult.html";
};   