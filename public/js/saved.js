// This recipe finds the current user and all of the associated Recipes through the Saved Recipe table.
const findSaved = async () => {
    console.log('Loading Data');
    // Queries the API for all Recipes saved by the User currently logged in. 
    const response = await fetch('/api/users/current', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    });
    // Converts the data into an array of json objects
    const recipeData = await response.json();
    console.log(recipeData);

    if (response.ok) {
        // getRecipeData(recipeData);
    } else {
        alert('Failed to obtain save data.');
    }

}


findSaved();

// document
//     .querySelectorAll('#list')
//     .addEventListener('click', renderTarget)

// document
//     .getElementById('#remove')
//     .addEventListener('click', removeSaved);