const mongoose = require('mongoose');
const { stringify } = require('nodemon/lib/utils');
const ItemsSchema = mongoose.Schema({
    itemId: {
        type:Number
    }, 
    name: {
        type:String    
    },
    inStock:{
        type:Number
    }
});

module.exports = mongoose.model('Items', ItemsSchema);