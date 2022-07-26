const Router = require('express');
const router = new Router();
const controller = require('./authController')
const controllerItemsAndOrders = require('./controllerItemsAndOrders')
const{check} = require('express-validator')
const authMiddlewearee = require('./middlewearee/authMiddlewearee')
const roleMiddlewearee = require('./middlewearee/roleMiddlewearee')

router.post('/registration', [
    check('username', "Username cannot be empty").notEmpty(),
    check('password', "Password must be more than 4 and less than 10 characters").isLength({min:4, max:10})
],
controller.registration);
router.post('/login', controller.login);
router.get('/users',roleMiddlewearee(['ADMIN']), controller.getUsers);
router.post('/item',roleMiddlewearee(['ADMIN']), controllerItemsAndOrders.createItem);
router.get('/items',roleMiddlewearee(['ADMIN']), controllerItemsAndOrders.getItems);
router.get('/orders',roleMiddlewearee(['ADMIN']), controllerItemsAndOrders.getOrders);
router.post('/order',roleMiddlewearee(['ADMIN']), controllerItemsAndOrders.createOrder);
router.delete('/delete/:itemID',roleMiddlewearee(['ADMIN']), controllerItemsAndOrders.deleteItem);
router.delete('/delete/:orderID',roleMiddlewearee(['ADMIN']), controllerItemsAndOrders.deleteOrder);
router.patch('/update/:itemID',roleMiddlewearee(['ADMIN']), controllerItemsAndOrders.updateItem);
router.patch('/update/:orderID',roleMiddlewearee(['ADMIN']), controllerItemsAndOrders.updateOrder);


module.exports = router;