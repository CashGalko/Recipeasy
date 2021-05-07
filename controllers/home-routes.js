const router = require('express').Router();
const { Recipe } = require('../models');

router.get('/', async (req, res) => {
  try {
    if (req.session.loggedIn) {
      res.render('mealPlanner', { loggedIn: req.session.loggedIn });
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
    res.render('search',  { loggedIn: req.session.loggedIn });
  }
});


router.get('/new', async (req, res) => {
  try {
    if (!req.session.loggedIn) {
      res.redirect('/');
      return;
    } else {
      res.render('userRecipes',  { loggedIn: req.session.loggedIn });
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
      res.render('savedRecipes',  { loggedIn: req.session.loggedIn });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


module.exports = router;
