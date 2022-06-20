const mongoose = require ('mongoose')


const connectdb = async () => {
    try{ 
    await mongoose.connect("mongodb+srv://admin:F54jfMcpctyGBKSr@cluster0.dwvnwqq.mongodb.net/foire?retryWrites=true&w=majority")
    console.log("Good Job baby u r connected")
  } catch(err){
    console.log(err)
   }
}
module.exports = connectdb ;







