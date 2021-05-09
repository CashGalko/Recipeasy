
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

function deleteCurrentRecipe() {
  const recipeID = this.id
  console.log('The recipe ID is ' + recipeID);
    // Saves a recipe from the search results to the user's SavedRecipes table
  const saveRecipe = fetch('/api/saved/new', {
    method: 'DELETE',
    body: JSON.stringify({ recipeID }),
    headers: { 'Content-Type': 'application/json' },
  });
  location.reload();
}


function addListener() {
let saveButtons = document.getElementsByClassName('save-button');
for (let i = 0; i < saveButtons.length; i++) {
  saveButtons[i].addEventListener('click', deleteCurrentRecipe);
}
}

addListener();