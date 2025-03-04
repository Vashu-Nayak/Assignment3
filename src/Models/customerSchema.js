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
        trim:true,
        validate: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Invalid email format']

    },
    phone:{
        type:Number,
        required:true,
        trim : true,

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