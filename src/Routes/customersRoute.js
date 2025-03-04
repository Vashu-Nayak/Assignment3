const express=require('express')
const {customers} = require('../Models/customerSchema')

const customerRouter=express.Router()

customerRouter.get('/customers',async (req,res)=>{
    try {
        let data = await customers.find({})
        res.status(200).json(data)
    } catch (error) {
        console.log("Error in getcustumers Controller" , error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }

})
customerRouter.post('/customers',async(req,res)=>{
    try {
        let data = await customers.insertOne(req.body)
        res.status(200).json({message : "New Custumers Addded"})
    } catch (error) {
        console.log("Error in addCustumers Controller" , error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }

})
// customerRouter.get('/customers/:id',async(req,res)=>{
//     try{
//         const customers=await Product.find().populate('category').populate('brand')
//         resstatus(200).json(customers)
//     }
//     catch(err){
//         res.status(500).json({message:err.message})
//     }

// })
customerRouter.put('/customers/:id',async(req,res)=>{
    try {
        let data = await customers.findByIdAndUpdate({_id : req.params.id},req.body)
        res.status(200).json({message : "Custumers Updated"})
    } catch (error) {
        console.log("Error in updateCustumers Controller" , error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }

})
customerRouter.delete('/customers/:id',async(req,res)=>{
    try {
        let data = await customers.findByIdAndDelete({_id : req.params.id})
        res.status(200).json({message : "Custumers deleted"})
    } catch (error) {
        console.log("Error in deleteCustumers Controller" , error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }

})
module.exports = {customerRouter};