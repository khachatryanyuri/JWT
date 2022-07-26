var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
const secret = 'dasfadshfjkahskjfhkjasdhf';
const { stringify } = require('nodemon/lib/utils');
const Users = require('../models/Users');
const Orders = require('../models/Orders');
const Items = require('../models/Items');
const db = require("mongoose");


router.post('/',async (req,res)=>{
  const user = new Users({
      userId: req.body.userId,
      userName: req.body.userName,
      email: req.body.email,
      password: req.body.password,
      roles: req.body.roles
  });
    try{
  const saveUser = await user.save();    
  res.json(saveUser);
  }catch(err){
      res.json({message: err});
  }
});

router.post('/auth', (req, res) => {
  const currentUser = db.users.find((user) => {
    if (db.user.userName === req.body.userName && db.user.password === req.body.password) {
      return user;
    }
  })

  var token = jwt.sign({ userId: currentUser.id }, secret); // add role USER/ADMIN

  res.json({currentUser, token});
});

// get all ordered items for user and count of every bought item and sorted by most popular
router.get('/items-and-counts', (req, res) => {

})

// get all ordered items for user (unique items)
router.get('/orders-sum', (req, res) => {

})

// get items for every order nested
router.get('/order-items', (req, res) => {

})

router.get('/', async function(req, res) {
  try{    
    const user = await Users.find();
    res.json(user);
  }catch(err){
    res.json({message: err});
};
});

router.get('/test', async function(req, res) {
  try{    
    const user = await Users.find();
    if(req.user.userId === 1)
    res.json(user);
  }catch(err){
    res.json({message: err});
};
});

module.exports = router;
