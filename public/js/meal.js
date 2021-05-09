const recipeModal = document.getElementById('recipes');
const listButton = document.getElementById('create-list');
const shoppingList = document.getElementById('shopping-list');
var emptyNodeID;
var fullNodeID;
var recipeID;
var recipeTitle;

// Opens the modal for a user to add a meal to the selected box.
function addMeal() {
  recipeModal.classList.remove('hide');
  emptyNodeID = this.parentNode.id;
  console.log(emptyNodeID);

  addListeners();
}

// Choosing a meal will hide the modal and add the meal to the previously chosen box.
function selectMeal() {
  recipeModal.classList.add('hide');
  console.log(emptyNodeID);
  recipeID = this.id;
  recipeTitle = this.innerHTML;
  recipeIngredients = this.value;
  console.log(recipeIngredients);
  document.getElementById(emptyNodeID).innerHTML = `<p>${recipeTitle}</p><footer><button class='delete-button'>Delete</button></footer>`;
  document.getElementById(emptyNodeID).value = `${recipeIngredients}`;

  addListeners();
}

// Removes the meal from the chosen box and replaces it with a new 'add' button.
function deleteMeal() {
  console.log(emptyNodeID);
  emptyNodeID = this.parentNode.parentNode.id;
  console.log(emptyNodeID);
  document.getElementById(emptyNodeID).innerHTML = "<button class='add-button'>+</button>";
  addListeners();
}

// Creates a shopping list using all items the user has selected and then downloads them to a PDF.
async function createList() {
  const mealList = document.getElementsByClassName('meal');
  shoppingList.classList.remove('hide');
  // Gets ingredients stored as value
  console.log(mealList[0].value);
  // Gets title of recipe
  console.log(mealList[0].children[0].innerHTML)

  for(let x = 0; x < mealList.length; x++) {
    if(mealList[x].children[0].innerHTML !== "+") {
      let title = mealList[x].children[0].innerHTML;
      let ingredients = mealList[x].value;

      shoppingList.innerHTML += `<h1>${title}<h1><p>Ingredients:<br>${ingredients}</p>`;
    }
  };

  await html2pdf().from(shoppingList).save();

  shoppingList.classList.add('hide');
  shoppingList.innerHTML = "";
}

// Dynamically adds event listeners to buttons as they are created and removed.
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

listButton.addEventListener('click', createList);