const orderSchema = require('../model/orderModel')


exports.GetOrderModel =  async (req,res)=>{
    try{
    const Orders = await orderSchema.find()
    res.status(200).send({msg:'this is the list',Orders})
    }catch(err){
       res.status(500).send({msg: 'sorry u couldnt add it'})
    }
    }

exports.AddOrderModel =   async (req,res)=>{
    try{
const NewOrder =  new orderSchema(req.body)
await NewOrder.save()
res.status(200).send({msg:'this is the new Order', NewOrder})
    }catch(err){
        console.log(err.message)
       res.status(500).send({msg: 'sorry u couldnt add it'})
    }
}  

exports.UpdateOrderModel = async (req,res)=>{
    try{
const {id} = req.params
const UpdateOrder = await orderSchema.findByIdAndUpdate(id, {$set:{...req.body}})
res.status(200).send({msg: " updated done", UpdateOrder})
    }catch(err){
        res.status(500).send({msg: 'sorry u couldnt change it'})
    }
}

exports.DeleteOrderModel = async(req,res)=>{
    try{
const {id} = req.params
const DeleteOrder = await orderSchema.findByIdAndDelete(id) 
res.status(200).send({msg : "deleted done", DeleteOrder})
    }catch(err){
        res.status(500).send({msg: 'sorry '}) 
    }
}

exports.GetUniqueOrder = async(req,res)=>{ 
    try{
        const {id} = req.params
        const GetUnique = await orderSchema.findById(id)
        res.status(200).send({msg:'u did it this is ur Order',GetUnique })
    }catch(err){
        res.status(500).send({msg:'error u couldnt get it'}) 
    }
    }