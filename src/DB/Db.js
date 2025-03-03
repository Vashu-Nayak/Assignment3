const mongoose=require('mongoose')
const url='mongodb+srv://nvashu1:newpassword@cluster0.ta5mg.mongodb.net/FoodAppDB?retryWrites=true&w=majority&appName=Cluster0'


const connectDB = async ()=>{
    try {
        const conn = await mongoose.connect(dbUrl)
        console.log(`MongoDb connected ${conn.connection.host}`)
    } catch (error) {
        console.log("MongoDb connection Error : ", error)
    }
}

module.exports={
    connectDB
}