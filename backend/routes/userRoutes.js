const express = require ('express')
const userRouter = express.Router()
const { Route } = require('express');

const {addUser,login,getUsers,getOneUser,deleteOneUser,updateOneUser} = require('../controllers/userController');
const { isAuth } = require('../middleware/isAuth');
const {validation,loginValidation,registerValidation} = require('../middleware/validator')
userRouter.get('/',getUsers)
userRouter.post('/addUser',registerValidation,validation,addUser)
userRouter.get('/current',isAuth,async(req,res)=>res.send({user:req.user}))
userRouter.post('login',loginValidation,validation,login)
userRouter.get('/:id',getOneUser)
userRouter.put('/update/:id',updateOneUser)
userRouter.delete('/delete/:id',deleteOneUser)
module.exports =  userRouter