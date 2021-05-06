const router = require('express').Router();
const { Recipe } = require('../../models');
const { Op } = require("sequelize");

// Creates a new Recipe
router.post('/', async (req, res) => {
  try {
    const newRecipe = await Recipe.create({

      instructions: req.body.instructions,
      ingredients: req.body.ingredients,
      title: req.body.title,

    });
    res.status(200).json(newRecipe);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


router.get('/new/:query', async (req, res) => {
  try {
    console.log("Searching for: " + req.params.query);
    const savedData = await Recipe.findAll({
      where: {
        title: req.params.query,
      }
    });
    const cleanData = savedData.get({ plain: true });
    res.status(200).json(cleanData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});





module.exports = router;