const express = require('express');
const router = express.Router();

const Order = require('../models/Order');

router.get('/', async(req,res,next) => {
  try{
    const orders = await Order.findAll();
    res.send(orders);
  } catch(err){
    next(err);
  }
});

module.exports = router;