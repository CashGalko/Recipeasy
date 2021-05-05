const router = require('express').Router();
const { Recipe } = require('../models');

router.get('/', async (req, res) => {
  try {
    if (req.session.loggedIn) {
      res.render('mealPlanner');
    } else {
      let random = Math.floor(Math.random() * 1086);
      const recipeData = await Recipe.findByPk(random);
      const randomRecipe = recipeData.get({ plain: true });
      res.render('login', {randomRecipe});
    }
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/new', async (req, res) => {
  try {
    if (req.session.loggedIn) {
      res.render('userRecipes');
    
    } else {
      let random = Math.floor(Math.random() * 1086);
      const recipeData = await Recipe.findByPk(random);
      const randomRecipe = recipeData.get({ plain: true });
      res.render('login', {randomRecipe});
    }
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


module.exports = router;
