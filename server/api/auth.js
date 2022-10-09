const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

const User = require('../models/User');


router.post('/', async(req,res,next) => {
  try{
    const { username, password } = req.body;
    const token = await User.authenticate({ username, password });
    res.status(201).send({ token });
  } catch(err){
    next(err);
  }
});


router.get('/', async(req, res, next) => {
  try{
    const user = await User.findByToken(req.headers.authorization);
    res.send(user);
  } catch(err){
    next(err);
  }
});

module.exports = router;