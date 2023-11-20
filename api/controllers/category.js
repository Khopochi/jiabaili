import Category from "../models/Category.js"

//ADD CATEGORY FUNCTION
export const addCategory = async (req,res) => {
    const newCategory = Category(req.body)
    try{
        const savedCategory = await newCategory.save()
        res.status(200).json(savedCategory)
    }catch(err){
        res.status(200).json({error: "Operation Failed", errorDetails: err}) 
    }
}

//UPDATE CATEGORY
export const updateCategory = async (req,res) => {
    try{
        //savr Category in database
        const updateCategory = await Category.findByIdAndUpdate(req.params.id, {$set: req.body}, {new:true})
        res.status(200).json(updateCategory)
    }catch(err){
        res.status(200).json({error: "Operation Failed", errorDetails: err})
    }
}


//DELETE CATEGORY
export const deleteCategory = async (req,res) => {
    try{
        //delete database
        await Category.findByIdAndDelete(req.params.id)
        res.status(200).json({success : "Category has been deleted"})
    }catch(err){
        res.status(200).json({error: "Operation Failed", errorDetails: err})
    }
}

//GET SINGLE CATEGORY
export const getSingleCategory = async (req,res) => {
    try{
        //savr Category in database
        const singlCategory = await Category.findById(req.params.id)
        res.status(200).json(singlCategory)
        }catch(err){
            res.status(200).json({error: "Operation Failed", errorDetails: err})
        }
}

//GET ALL CATEGORIES
export const getAllCategories = async (req,res) => {
    try{
        const allCategories = await Category.find(req.query).limit(3)
        res.status(200).json(allCategories)
        }catch(err){
            res.status(200).json({error: "Operation Failed", errorDetails: err})
        }
}