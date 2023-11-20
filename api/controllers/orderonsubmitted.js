import Ordersubmitted from "../models/Ordersubmitted.js"

//ADD Ordersubmitted FUNCTION
export const addOrdersubmitted = async (req,res) => {
    const newOrdersubmitted = Ordersubmitted(req.body)
    try{
        const savedOrdersubmitted = await newOrdersubmitted.save()
        res.status(200).json(savedOrdersubmitted)
    }catch(err){
        res.status(200).json({error: "Operation Failed", errorDetails: err}) 
    }
}

//UPDATE Ordersubmitted
export const updateOrdersubmitted = async (req,res) => {
    try{
        //savr Ordersubmitted in database
        const updateOrdersubmitted = await Ordersubmitted.findByIdAndUpdate(req.params.id, {$set: req.body}, {new:true})
        res.status(200).json(updateOrdersubmitted)
    }catch(err){
        res.status(200).json({error: "Operation Failed", errorDetails: err})
    }
}