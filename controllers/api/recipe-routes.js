const router = require('express').Router();
const { Recipe, User } = require('../../models');
const { Op } = require("sequelize");

// Creates a new Recipe
router.post('/', async (req, res) => {
  try {
    const newRecipe = await Recipe.create({

      instructions: req.body.instructions,
      ingredients: req.body.ingredients,
      title: req.body.title,

    });
    console.log(newRecipe.toJSON());
    res.status(200).json(newRecipe.toJSON());
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Finds all recipes with a title like the search value
router.get('/new/:query', async (req, res) => {
  try {
    console.log("Searching for: " + req.params.query);
    const savedData = await Recipe.findAll({
      where: {
        title: req.params.query,
      }
    });

    res.status(200).json(savedData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Finds a single recipe based on its ID 
// This is not currently being user, but we might want it, might delete it.
router.get('/saved/:id', async (req, res) => {
  try {
    console.log("Searching for all your saved recipes!");
    const recipeData = await Recipe.findByPk(req.params.recipeID);

    res.status(200).json(recipeData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});




module.exports = router;