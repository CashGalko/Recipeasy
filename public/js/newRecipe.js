const recipeCreateHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#recipe-title').value.trim();
    const instructions = document.querySelector('#recipe-instructions').value.trim();
    const ingredients = document.querySelector('#recipe-ingredients').value.trim();

    console.log(title);
    console.log(instructions);
    console.log(ingredients);

    if (title && instructions && ingredients) {
        const response = await fetch('/api/recipe', {
            method: 'POST',
            body: JSON.stringify({ title, instructions, ingredients }),
            headers: { 'Content-Type': 'application/json' },
          });
        console.log(response);
        if (response.ok) {
            const success = document.querySelector('#success');
            success.setAttribute('class', ''); 
            

            // Getting the recipe data for sending to the savedRecipe table
        
            const fetchRecipe = await fetch('/api/recipe/new/' + title, {
              method: 'GET',
              headers: { 'Content-Type': 'application/json' },
          });
          
          // Converts the fetch response into a json object so we can drill into it. It automatically makes an array.
           const json =  await fetchRecipe.json();
            console.log(json);

            if (json) {
              const recipeID = json[0].id
            // Posts to the Saved Recipe table.
            const saveRecipe = await fetch('/api/saved/new', {
              method: 'POST',
              body: JSON.stringify({ recipeID }),
              headers: { 'Content-Type': 'application/json' },
            });
          }
        }else {
            alert('Failed to post.');
          }
    }

};



document
  .querySelector('.recipe-form')
  .addEventListener('submit', recipeCreateHandler);