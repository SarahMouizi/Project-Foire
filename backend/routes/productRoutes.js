const express = require ('express')
const ProductRouter = express.Router()
const { Route } = require('express');
const {GetProductModel,AddProductModel,UpdateProductModel,DeleteProductModel,GetUniqueProduct } = require ('../controllers/productController')



//route get all user
ProductRouter.get('/',GetProductModel)


//route post a user
ProductRouter.post('/',AddProductModel )


//route put or update a user => id
ProductRouter.put('/:id',UpdateProductModel )


//route delet user => id
ProductRouter.delete('/:id',DeleteProductModel)


//route get a unique user => id
ProductRouter.get('/:id', GetUniqueProduct)


module.exports =  ProductRouter