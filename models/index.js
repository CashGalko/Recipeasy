const User = require('./User');
const Recipe = require('./Recipe');


// Recipe.hasMany(Painting, {
//   foreignKey: 'recipe_id',
// });

// Painting.belongsTo(Recipe, {
//   foreignKey: 'recipe_id',
// });

module.exports = { User, Recipe };
