const express=require('express')
const cors=require('cors')
const app = express()
const {customerRouter}=require('./Routes/customersRoute')
const {productRouter}=require('./Routes/productRoutes')
const {connectDB} =require('./DB/Db')

connectDB()
app.use(cors())
app.use(express.json())

app.use(customerRouter)
app.use(productRouter)

app.listen(8080,()=>{
    console.log('server is running on port 8080')
})