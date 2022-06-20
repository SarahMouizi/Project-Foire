const userSchema = require('../model/userModel');
const roleSchema = require('../model/roleModel');
const productSchema = require('../model/productModel');
const {data} = require('./data')
const bcrypt = require('bcryptjs');


const init = async()=>{
    try {
       
            [{roleName:"admin"},{roleName:"depositary"},{roleName:"client"}].map(async(el)=>{
                const roleExist = await roleSchema.findOne(el);
                if(!roleExist){
                    await roleSchema.insertMany([el]);
                    console.log(`${el.roleName} added`)
                }
            }) 
        // Insertion des données des produits !
            const productsExist = await productSchema.find();
            if(productsExist.length == 0){
                await productSchema.insertMany(data)
                console.log('products added to product collection');
            }

            const roleAdmin = await roleSchema.findOne({roleName:"admin"});
            const isAdmin = await userSchema.findOne({role:roleAdmin._id})
            if(!isAdmin){
                const admin = new userSchema({
                    firstname:'admin',
                    lastname:'admin',
                    email:'admin@admin.com',
                    password:bcrypt.hashSync('123456789',10),
                    role:roleAdmin._id,
                })
                await admin.save();
                console.log('admin created')
            }
        
    } catch (error) {
        console.error(error);
    }
}

module.exports = init