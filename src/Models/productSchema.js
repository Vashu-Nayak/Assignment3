const mongoose=require('mongoose')

const productSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true,

    },
    description:{
        type:String,
        required:true,
        trim:true,
    },
    price:{
        type:Number,
        required:true,
        

    },
    stock:{
        type:Number,
        required:true,
        min:0 
        
    },
    category:{
        type:String,
        required:true,
        trim:true  
        
    }
},{timestamps:true})

const products=mongoose.model('product',productSchema)

module.exports={
   products 
}