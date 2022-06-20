const express = require ('express')
const orderRouter = express.Router()
const { Route } = require('express');
const {GetOrderModel,AddOrderModel,UpdateOrderModel,DeleteOrderModel, GetUniqueOrder } = require ('../controllers/orderController')



//route get all user
orderRouter.get('/',GetOrderModel)


//route post a user
orderRouter.post('/',AddOrderModel )


//route put or update a user => id
orderRouter.put('/:id',UpdateOrderModel )


//route delet user => id
orderRouter.delete('/:id',DeleteOrderModel)


//route get a unique user => id
orderRouter.get('/:id', GetUniqueOrder)


module.exports =  orderRouter
