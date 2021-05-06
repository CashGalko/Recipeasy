const router = require('express').Router();
const { SavedRecipe } = require('../../models');


router.post('/', async (req, res) => {
    try {

      const newSave = await SavedRecipe.create({
        recipe_id: req.body.recipe_id,
        user_id: req.session.user_id
      });
      res.status(200).json(newSave);
      
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  })

// Saves the User's new recipe upon creation.
router.post('/new', async (req, res) => {
    try {
      const userRecipe = await SavedRecipe.create({
  
        recipe_id: req.body.recipeID,
        user_id: req.session.userID
  
      });
      res.status(200).json(userRecipe);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });
  

  module.exports = router;