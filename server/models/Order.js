const { Sequelize, DataTypes, Model } = require('sequelize');
const db = require('../db');

class Order extends Model {}

Order.init({
  total: {
    type: DataTypes.INTEGER
  },
  date: {
    type: DataTypes.STRING
  }
}, {
  sequelize: db,
  modelName: 'order'
});

module.exports = Order;

