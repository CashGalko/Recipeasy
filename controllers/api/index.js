const router = require('express').Router();

const userRoutes = require('./user-routes');
const recipeRoutes = require('./recipe-routes');
const savedRoutes = require('./saved-routes');

router.use('/users', userRoutes);
router.use('/recipe', recipeRoutes);
router.use('/saved', savedRoutes);


module.exports = router;
