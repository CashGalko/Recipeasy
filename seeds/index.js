const sequelize = require('../config/connection');
const splitRecipe = require('./recipeData');


const seedAll = async () => {
  await sequelize.sync({ force: true });

  await splitRecipe();

  process.exit(0);
};

seedAll();
