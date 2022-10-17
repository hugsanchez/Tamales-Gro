const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

const User = require('../models/User');

const authenticateToken = require('./helper/authenticateToken');


router.post('/', async(req,res,next) => {
  try{
    const { username, password } = req.body;
    const token = await User.authenticate({ username, password });
    res.status(201).send({ token });
  } catch(err){
    next(err);
  }
});


router.get('/', authenticateToken, async(req, res, next) => {
  try{
    const user = await User.findByPk(req.user.id);
    res.send(user);
  } catch(err){
    next(err);
  }
});

module.exports = router;