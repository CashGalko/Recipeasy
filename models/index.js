const User = require('./User');
const Recipe = require('./Recipe');
const SavedRecipe = require('./savedRecipe');

User.belongsToMany(Recipe, {through: SavedRecipe, foreignKey: "user_id"});

Recipe.belongsToMany(User, {through: SavedRecipe, foreignKey: "recipe_id"});

module.exports = { User, Recipe, SavedRecipe };
