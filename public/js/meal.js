let recipeModal = document.getElementById('recipes');

function editMeal() {
  recipeModal.classList.remove('hide');
  console.log(this.id);
  // recipeModal.classList.add('hide');
  addListeners();
}

function deleteMeal() {

}

function addMeal() {
  recipeModal.classList.remove('hide');

  addListeners();
}

function selectMeal() {
  recipeModal.classList.add('hide');

}

function addListeners() {
  let editButtons = document.getElementsByClassName('edit-button');
  let deleteButtons = document.getElementsByClassName('delete-button');
  let addButtons = document.getElementsByClassName('add-button');
  let selectButtons = document.getElementsByClassName('select-button');

  for (let i = 0; i < editButtons.length; i++) {
    editButtons[i].addEventListener('click', editMeal);
  }

  for (let j = 0; j < deleteButtons.length; j++) {
    deleteButtons[j].addEventListener('click', deleteMeal);
  }

  for (let k = 0; k < addButtons.length; k++) {
    addButtons[k].addEventListener('click', addMeal);
  }

  for (let l = 0; l < selectButtons.length; l++) {
    selectButtons[l].addEventListener('click', selectMeal);
  }
}

addListeners();



