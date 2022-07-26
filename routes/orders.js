var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
const secret = 'dasfadshfjkahskjfhkjasdhf';
const { stringify } = require('nodemon/lib/utils');
const Users = require('../models/Users');
const Orders = require('../models/Orders');
const Items = require('../models/Items');


router.post('/',async (req,res)=>{
    const order = new Orders({
      orderNumber: req.body.orderNumber,
      items: req.body.items,
      price: req.body.price,
      userID: req.body.userID
    });
    try{
    const saveOrder = await order.save();    
    res.json(saveOrder);
    }catch(err){
        res.json({message: err});
    }
  });

  router.get('/', async function(req, res) {
    try{    
      const orders = await Orders.find();
      res.json(orders);
    }catch(err){
      res.json({message: err});
  };
  });
  
  module.exports = router;