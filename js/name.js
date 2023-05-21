
//DECLARATION OF VARIABLES

let input = document.getElementById('nameCel');
let saveButton = document.getElementById('saveButton');
let savedText = '';

input.addEventListener('input', function() {
  savedText = input.value;'';
//   console.log(input)
});

saveButton.addEventListener('click', function() {
    
  console.log(savedText);
});