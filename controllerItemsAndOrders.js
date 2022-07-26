const Items = require('./models/Items');
const Orders = require('./models/Orders');
const {validationResult} = require('express-validator')


class controllerItemsAndOrders{

    
    async createItem(req, res){   
        const item = new Items({
        itemId: req.body.itemId,
        name: req.body.name,
        inStock: req.body.inStock          
        });     
        try{
            const saveItem = await item.save();    
            res.json(saveItem);        
        }catch(e){
            console.log(e)
            res.status(400).json({message:'Dont save the item'})
        }
    }
    async createOrder(req, res){
        const order = new Orders({
            orderNumber: req.body.orderNumber,
            items: req.body.items,
            price: req.body.price,
            userID: req.body.userID
        });
        try{
            const saveOrder = await order.save();    
            res.json(saveOrder);
            }catch(e){
            console.log(e)
            res.status(400).json({message:'Dont save the order'})
        }

    }   
    
    async  deleteItem(req,res){
        try{
            const removeItem = await Items.remove({_id: req.params.itemID});
            res.json(removeItem);
        }catch(err){
            console.log(e)
            res.status(400).json({message:'Dont delete the item'})
        }
    };

    async  deleteOrder(req,res){
        try{
            const removeOrder = await Orders.remove({_id: req.params.orderID});
            res.json(removeOrder);
        }catch(err){
            console.log(e)
            res.status(400).json({message:'Dont delete the order'})
        }
    };

    async updateItem (req, res){
        try{
        const updateItem = await Items.updateOne(
            {_id: req.params.itemID}, 
            {$set: {itemId: req.body.itemId,name: req.body.name,inStock: req.body.inStock }}
            );
            res.json(updateItem);
        } catch(err){
            console.log(e)
            res.status(400).json({message:'Dont update the item'})        }
    }

    async updateOrder (req, res){
        try{
        const updateOrder = await Orders.updateOne(
            {_id: req.params.orderID}, 
            {$set: {orderNumber: req.body.orderNumber,items: req.body.items,price: req.body.price,userID: req.body.userID}});
            res.json(updateOrder);
        } catch(err){
            console.log(e)
            res.status(400).json({message:'Dont update the item'})       
        }
    }

    async getOrders(req, res){
        try{
            const orders = await Orders.find()
            res.json(orders)
        }catch(e){

        }

    }

    async getItems(req, res){
        try{
            const items = await Items.find()
            res.json(items)
        }catch(e){

        }

    }
    
}

module.exports = new controllerItemsAndOrders();