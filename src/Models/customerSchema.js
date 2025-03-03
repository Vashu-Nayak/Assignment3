const mongoose=require('mongoose')

const customerSchema=new mongoose.Schema({
    fullName:{
        type:String,
        required:true,
        trim:true,

    },
    email:{
        type:String,
        required:true,
        unique:true,

    },
    phone:{
        type:String,
        required:true,
        

    },
    address:{
        type:String,
        required:true,
        trim:true,
        
    }
},{timestamps:true})

const customers=mongoose.model('customer',customerSchema)

module.exports={
   customers
}