
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

// const deleteRecipe = async (event) => {
//     event.preventDefault();
//     const recipeID = this.recipe.id
//     console.log(recipeID);
//         // Deletes a saved recipe from the user's SavedRecipe table
//     const saveRecipe = await fetch('/api/saved/new', {
//       method: 'DELETE',
//       body: JSON.stringify({ recipeID }),
//       headers: { 'Content-Type': 'application/json' },
//     });
// }




// document
//     .querySelectorAll('.delete-recipe')
//     .addEventListener('click', deleteRecipe)
