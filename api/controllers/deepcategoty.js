import Deepcategory from "../models/Deepcategory.js"


//ADD Deepcategory FUNCTION
export const addDeepcategory = async (req,res) => {
    const newDeepcategory = Deepcategory(req.body)
    try{
        const savedDeepcategory = await newDeepcategory.save()
        res.status(200).json(savedDeepcategory)
    }catch(err){
        res.status(200).json({error: "Operation Failed", errorDetails: err}) 
    }
}

//UPDATE Deepcategory
export const updateDeepcategory = async (req,res) => {
    try{
        //savr Deepcategory in database
        const updateDeepcategory = await Deepcategory.findByIdAndUpdate(req.params.id, {$set: req.body}, {new:true})
        res.status(200).json(updateDeepcategory)
    }catch(err){
        res.status(200).json({error: "Operation Failed", errorDetails: err})
    }
}


//DELETE Deepcategory
export const deleteDeepcategory = async (req,res) => {
    try{
        //delete database
        await Deepcategory.findByIdAndDelete(req.params.id)
        res.status(200).json({success : "Deepcategory has been deleted"})
    }catch(err){
        res.status(200).json({error: "Operation Failed", errorDetails: err})
    }
}

//GET SINGLE Deepcategory
export const getSingleDeepcategory = async (req,res) => {
    try{
        //savr Deepcategory in database
        const singlDeepcategory = await Deepcategory.findById(req.params.id)
        res.status(200).json(singlDeepcategory)
        }catch(err){
            res.status(200).json({error: "Operation Failed", errorDetails: err})
        }
}

//GET ALL CATEGORIES
export const getAllDeepCategories = async (req,res) => {
    try{
        const allCategories = await Deepcategory.find(req.query).limit(3)
        res.status(200).json(allCategories)
        }catch(err){
            res.status(200).json({error: "Operation Failed", errorDetails: err})
        }
}