var express = require('express');
var router = express.Router();
const Orders = require('../models/Orders');
const Items = require('../models/Items');


router.post('/',async (req,res)=>{
    const item = new Items({
        itemId: req.body.itemId,
        name: req.body.name         
    });
    try{
    const saveItem = await item.save();    
    res.json(saveItem);
    }catch(err){
        res.json({message: err});
    }
  });

  router.get('/', async function(req, res) {
    try{    
      const items = await Items.find();
      res.json(items);
    }catch(err){
      res.json({message: err});
  };
  });
  
  module.exports = router;