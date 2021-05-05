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
      res.render('login', { randomRecipe });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


router.get('/search', (req, res) => {
  if (!req.session.loggedIn) {
    res.redirect('/');
    return;
  } else {
    res.render('search');
  }
});


router.get('/new', async (req, res) => {
  try {
    if (!req.session.loggedIn) {
      res.redirect('/');
      return;
    } else {
      res.render('userRecipes');
    }
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/saved', async (req, res) => {
  try {
    if (!req.session.loggedIn) {
      res.redirect('/');
      return;
    } else {
      res.render('savedRecipes');
    }
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


module.exports = router;
