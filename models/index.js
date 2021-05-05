const User = require('./User');
const Recipe = require('./Recipe');
const SavedRecipe = require('./savedRecipe');

User.belongsToMany(Recipe, {through: SavedRecipe});

Recipe.belongsToMany(User, {through: SavedRecipe});

module.exports = { User, Recipe, SavedRecipe };
