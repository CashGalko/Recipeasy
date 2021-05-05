const { Recipe } = require('.../models');

const searchDB = async (event) => {
    event.preventDefault();

    const query = document.querySelector('#search').value.trim().toLowerCase();
    const recipeData = await Recipe.findAll();




}




document
  .querySelector('.search-form')
  .addEventListener('submit', searchDB);