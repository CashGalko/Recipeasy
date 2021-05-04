const User = require('./User');
const Recipe = require('./Recipe');


User.hasMany(Recipe, {
  foreignKey: 'recipe_id',
});

Recipe.belongsTo(User, {
  foreignKey: 'recipe_id',
});

module.exports = { User, Recipe };
