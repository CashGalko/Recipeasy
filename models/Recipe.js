const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Recipe extends Model {}

Recipe.init(
  {
    instructions: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    ingredients: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    title: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    picture_link: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    recipe_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'recipe',
  }
);

module.exports = Recipe;