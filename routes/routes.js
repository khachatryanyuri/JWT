const Router = require('express');
const router = new Router();
const controller = require('../authController')
const controllerItemsAndOrders = require('../controllerItemsAndOrders')
const{check} = require('express-validator')
const authMiddlewearee = require('../middlewearee/authMiddlewearee')
const roleMiddlewearee = require('../middlewearee/roleMiddlewearee')
const User = require('../models/Users');
const Role = require('../models/Role');
const Items = require('../models/Items');
const Orders = require('../models/Orders');

router.get('/orders', roleMiddlewearee(['USER', 'ADMIN']), async (req, res) => {
    const userId = req.user.id;
    const user = await User.findById(userId);
    const orders = await Orders.find({userID: user.userId});
    let allPrice = 0;

    if (!orders.length) {
      res.json(0);
    } else {
      orders.forEach(order => {
        allPrice += order.price;
      })
      res.json(allPrice);
    }
  }) 
 
// get all ordered items for user and count of every bought item and sorted by most popular
router.get('/items-and-counts',roleMiddlewearee(['ADMIN', 'USER']), async (req, res) => {
  const userId = req.user.id;
  const user = await User.findById(userId);
  const orders = await Orders.find({userID: user.userId});
  res.json(orders);
})

// get all ordered items for user (unique items)
router.get('/orders-sum',roleMiddlewearee(['ADMIN', 'USER']), async  (req, res) => {
  const userId = req.user.id;
  const user = await User.findById(userId);
  const orders = await Orders.find({userID: user.userId});
  for(let i = 0; i<orders.length; i++){
    var n = 0;
    var item = new Array();
    item [n] = orders[i].items; 
    n++;
  }
    res.json(item[i])  
  
  //const items = await Items.find({orders: orders.items});
  //res.json(items);
})

// get items for every order nested
router.get('/order-items',roleMiddlewearee(['ADMIN', 'USER']), (req, res) => {

})


module.exports = router;