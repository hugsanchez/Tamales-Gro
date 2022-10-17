require("dotenv").config();

const { Sequelize, DataTypes, Model } = require('sequelize');
const db = require('../db');

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

class User extends Model {}

User.init({
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  }
},{
  sequelize: db,
  modelName: 'user'
});

User.addHook("beforeSave", async(user) => {
  try{
    const hashPassword = await bcrypt.hash(user.password, 10);
    user.password = hashPassword;
  } catch(err){
    throw err;
  }
});

User.authenticate = async({ username, password }) => {
  try{
    const user = await User.findOne({
      where: {
        username,
      },
    });

    if(user && (await bcrypt.compare(password, user.password))){
      return jwt.sign({ id: user.id }, process.env.ACCESS_TOKEN_SECRET);
    } else {
      const error = Error("Bad Credentials");
      error.status = 401;
      throw error;
    }
  } catch(err){
    throw err;
  }
};



module.exports = User;