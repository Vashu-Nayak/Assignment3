const express=require('express')
const {products} = require('../Models/productSchema')

const productRouter=express.Router()

productRouter.get('/products',async (req,res)=>{
    try {
        let data = await products.find({})
        res.status(200).json(data)
    } catch (error) {
        console.log("Error in getproducts Controller" , error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }

})
productRouter.post('/products',async(req,res)=>{
    try {
        let data = await products.insertOne(req.body)
        res.status(200).json({message : "New products Addded"})
    } catch (error) {
        console.log("Error in addproducts Controller" , error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }

})
// productRouter.get('/products/:id',async(req,res)=>{
//     try{
//         const products=await Product.find().populate('category').populate('brand')
//         resstatus(200).json(products)
//     }
//     catch(err){
//         res.status(500).json({message:err.message})
//     }

// })
productRouter.put('/products/:id',async(req,res)=>{
    try {
        let data = await products.findByIdAndUpdate({_id : req.params.id},req.body)
        res.status(200).json({message : "products Updated"})
    } catch (error) {
        console.log("Error in updateproducts Controller" , error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }

})
productRouter.delete('/products/:id',async(req,res)=>{
    try {
        let data = await products.findByIdAndDelete({_id : req.params.id})
        res.status(200).json({message : "products deleted"})
    } catch (error) {
        console.log("Error in deleteproducts Controller" , error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }

})
