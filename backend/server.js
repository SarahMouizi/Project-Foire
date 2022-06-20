const express = require ('express')
const app = express()
const cors = require ('cors')
const connectdb = require('./config/connectdb')

const productRoutes = require ('./routes/productRoutes')
const userRoutes = require ('./routes/userRoutes')
const orderRoutes = require ('./routes/orderRoutes')

const port = 5005


app.use(cors())
require(`dotenv`).config()


app.use(express.json())



app.use('/api/products', productRoutes)
app.use('/api/users', userRoutes)
app.use('/api/orders', orderRoutes)

// app.get("/api", (req,res)=>{
//res.json({"users",["userOne","userTwo"]})
//})

connectdb()




app.listen(port, err=>{
    err?console.log(err):console.log(`go to ${port}`)
})