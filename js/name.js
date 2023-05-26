
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


//THE PLAYER ENTERS HIS NAME IN THE INPUT BOX AND IT IS SAVED IN THE SESSION STORAGE. IF THE PLAYER DOESN'T REGISTER ANY INPUT, THE FUNCTION BLOCKS THE ADVANCE TO THE DIFFICULTY SELECTION PAGE.

const playerSave = () => {

  let player = document.getElementById("nameCel").value;

  if (!player) {
    return;
  }
  
  sessionStorage.setItem("usuario", player);


  window.location.href = "../pages/dificult.html";
};   