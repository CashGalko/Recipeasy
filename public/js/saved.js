
const deleteRecipe = async () => {
    const recipeID = this.recipe.id
    console.log(recipeID);
    // Posts to the Saved Recipe table.
    const saveRecipe = await fetch('/api/saved/new', {
      method: 'DELETE',
      body: JSON.stringify({ recipeID }),
      headers: { 'Content-Type': 'application/json' },
    });
}




document
    .querySelectorAll('#delete-recipe')
    .addEventListener('click', deleteRecipe)
