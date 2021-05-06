const router = require('express').Router();
const { Recipe } = require('../models');
const { Op } = require("sequelize");

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


router.get('/results/:query?', async (req, res) => {
  console.log("Should be seeing search page");
  if(req.params.query) {
    try {
      console.log("Querying for: " + req.params.query);
      const recipeData = await Recipe.findAll({
        where: {
          title: {
            [Op.substring]: `${req.params.query}`,
          }
        }
      });
      const fixedRecipes = recipeData.map((recipe) => recipe.get({ plain: true }));
      // console.log(fixedRecipes);
      res.render('results', {fixedRecipes});
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
});


router.get('/search', async (req, res) => {
  try {
    if (!req.session.loggedIn) {
      res.redirect('/');
      return;
    } else {
      res.render('search');
    }
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
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

router.get('/pdf', async (req, res) => {
  try {
    if (!req.session.loggedIn) {
      res.redirect('/');
      return;
    } else {
      res.render('pdf');
    }
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


module.exports = router;
