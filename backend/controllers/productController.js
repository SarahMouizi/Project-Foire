const productSchema = require('../model/productModel')


exports.GetProductModel =  async (req,res)=>{
    try{
    const Products = await productSchema.find()
    res.status(200).send({msg:'this is the list',Products})
    }catch(err){
       res.status(500).send({msg: 'sorry u couldnt add it'})
    }
    }

exports.AddProductModel =   async (req,res)=>{
    try{
const NewProduct =  new productSchema(req.body)
await NewProduct.save()
res.status(200).send({msg:'this is the new Product', NewProduct})
    }catch(err){
        console.log(err.message)
       res.status(500).send({msg: 'sorry u couldnt add it'})
    }
}  

exports.UpdateProductModel = async (req,res)=>{
    try{
const {id} = req.params
const UpdateProduct = await productSchema.findByIdAndUpdate(id, {$set:{...req.body}})
res.status(200).send({msg: " updated done", UpdateProduct})
    }catch(err){
        res.status(500).send({msg: 'sorry u couldnt change it'})
    }
}

exports.DeleteProductModel = async(req,res)=>{
    try{
const {id} = req.params
const DeleteProduct = await productSchema.findByIdAndDelete(id) 
res.status(200).send({msg : "deleted done", DeleteProduct})
    }catch(err){
        res.status(500).send({msg: 'sorry '}) 
    }
}

exports.GetUniqueProduct = async(req,res)=>{ 
    try{
        const {id} = req.params
        const GetUnique = await productSchema.findById(id)
        res.status(200).send({msg:'u did it this is ur Product',GetUnique })
    }catch(err){
        res.status(500).send({msg:'error u couldnt get it'}) 
    }
    }