const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize('mysql://zcl1ei7olpowi9ca:yhkjpefj1axtbj7g@wcwimj6zu5aaddlj.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/ceyduc901jpjt2x3');


module.exports = sequelize;
