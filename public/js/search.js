const searchDB = async (event) => {
    event.preventDefault();

    const query = document.querySelector('#search').value.trim();

    window.location.href = '/search/' + query;
}

const saveCurrentRecipe = async (event) => {
    event.preventDefault();
    const recipeID = this.id
    console.log(recipeID);
        // Saves a recipe from the search results to the user's SavedRecipes table
    const saveRecipe = await fetch('/api/saved/new', {
      method: 'POST',
      body: JSON.stringify({ recipeID }),
      headers: { 'Content-Type': 'application/json' },
    });
}


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


document
    .querySelector('.search-form')
    .addEventListener('submit', searchDB);
document
    .querySelector('.save-button')
    .addEventListener('click', saveCurrentRecipe);