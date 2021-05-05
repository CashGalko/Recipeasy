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
        
        if (response.ok) {
            const success = document.querySelector('#success');
            success.setAttribute('class', ''); 
        }else {
            alert('Failed to post.');
          }
    }
}

document
  .querySelector('.recipe-form')
  .addEventListener('submit', recipeCreateHandler);