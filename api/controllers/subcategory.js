import Subcategory from "../models/Subcategory.js"


//ADD Subcategory FUNCTION
export const addSubcategory = async (req,res) => {
    const newSubcategory = Subcategory(req.body)
    try{
        const savedSubcategory = await newSubcategory.save()
        res.status(200).json(savedSubcategory)
    }catch(err){
        res.status(200).json({error: "Operation Failed", errorDetails: err}) 
    }
}

//UPDATE Subcategory
export const updateSubcategory = async (req,res) => {
    try{
        //savr Subcategory in database
        const updateSubcategory = await Subcategory.findByIdAndUpdate(req.params.id, {$set: req.body}, {new:true})
        res.status(200).json(updateSubcategory)
    }catch(err){
        res.status(200).json({error: "Operation Failed", errorDetails: err})
    }
}


//DELETE Subcategory
export const deleteSubcategory = async (req,res) => {
    try{
        //delete database
        await Subcategory.findByIdAndDelete(req.params.id)
        res.status(200).json({success : "Subcategory has been deleted"})
    }catch(err){
        res.status(200).json({error: "Operation Failed", errorDetails: err})
    }
}

//GET SINGLE Subcategory
export const getSingleSubcategory = async (req,res) => {
    try{
        //savr Subcategory in database
        const singlSubcategory = await Subcategory.findById(req.params.id)
        res.status(200).json(singlSubcategory)
        }catch(err){
            res.status(200).json({error: "Operation Failed", errorDetails: err})
        }
}

//GET ALL CATEGORIES
export const getAllSubCategories = async (req,res) => {
    try{
        const allCategories = await Subcategory.find(req.query).limit(3)
        res.status(200).json(allCategories)
        }catch(err){
            res.status(200).json({error: "Operation Failed", errorDetails: err})
        }
}