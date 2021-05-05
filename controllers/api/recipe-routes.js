const router = require('express').Router();
const { Recipe } = require('../../models');

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

  module.exports = router;