const router = require('express').Router();
const { Recipe, SavedRecipe, User } = require('../models');
const { Op } = require("sequelize");

router.get('/', async (req, res) => {
  try {
    if (req.session.loggedIn) {
      if(req.session.userID) {
        
          console.log("Searching for all recipes for User: " + req.session.userID);
          const savedData = await User.findOne({
            include: [{ model: Recipe }],
            where: {
              id: req.session.userID,
            }
      
          });
          // Might need to change variables if we are getting weird scope errors.
          const savedRecipeData = savedData.recipes;
          const fixedRecipeData = savedRecipeData.map((recipe) => recipe.get({ plain: true }));
          console.log(fixedRecipeData);
          res.render('mealPlanner', { loggedIn: req.session.loggedIn, fixedRecipeData });
      
      }
      
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

router.get('/password', async (req, res) => {
  try {
    if (!req.session.loggedIn) {
      res.redirect('/');
      return;
    } else {
      res.render('password');
    }
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/search', async (req, res) => {
  try {
    if (!req.session.loggedIn) {
      res.redirect('/');
      return;
    } else {
      res.render('search', { loggedIn: req.session.loggedIn });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


router.get('/search/:query?', async (req, res) => {
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
      res.render('search', {fixedRecipes});
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
});


router.get('/new', async (req, res) => {
  try {
    if (!req.session.loggedIn) {
      res.redirect('/');
      return;
    } else {
      res.render('userRecipes', { loggedIn: req.session.loggedIn });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Renders all of the data needed for the saved recipe page
router.get('/saved', async (req, res) => {
  try {
    if (!req.session.loggedIn) {
      res.redirect('/');
      return;
    } else {
      if(req.session.userID) {
        try {
          console.log("Searching for all recipes for User: " + req.session.userID);
          const savedData = await User.findOne({
            include: [{ model: Recipe }],
            where: {
              id: req.session.userID,
            }
      
          });
          
          const savedRecipeData = savedData.recipes;
          const fixedRecipeData = savedRecipeData.map((recipe) => recipe.get({ plain: true }));
          console.log(fixedRecipeData);
          res.render('savedRecipes', { loggedIn: req.session.loggedIn, fixedRecipeData });
          
        } catch (err) {
          console.log(err);
          res.status(500).json(err);
        }
      }
      
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
