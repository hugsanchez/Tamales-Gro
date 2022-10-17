const { Sequelize, DataTypes, Model } = require('sequelize');
const db = require('../db');

class Product extends Model {}

Product.init({
  name: {
    type: DataTypes.STRING
  },
  type: {
    type: DataTypes.STRING,
    validate: {
      isIn: [
        ['Tamale', 'Plato', 'Bebida']
      ],
    },
  }
},{
  sequelize: db,
  modelName: 'product'
});

module.exports = Product;