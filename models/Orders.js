const mongoose = require('mongoose');
const { stringify } = require('nodemon/lib/utils');
const OrderSchema = mongoose.Schema({
    orderNumber: {
        type:Number
    }, 
    items: {
        type:Array
    }, 
    price: {
        type:Number
    }, 
    userID: {
        type:Number
    }
});

module.exports = mongoose.model('Orders', OrderSchema);
