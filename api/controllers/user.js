import User from "../models/User.js"


//UPDATE USER
export const updateUser = async (req,res) =>  {
    try{
        const updateUser = await User.findByIdAndUpdate(req.params.id, {$set: req.body}, {new:true})
        res.status(200).json(updateUser)
    }catch(err){
        res.status(200).json({error: "Operation Failed", errorDetails: err})
    }
}

//DELETE User
export const deleteUser = async (req,res) => {
    try{
        //delete database
        await User.findByIdAndDelete(req.params.id)
        res.status(200).json({success : "User has been deleted"})
    }catch(err){
        res.status(200).json({error: "Operation Failed", errorDetails: err})
    }
}

//GET SINGLE User
export const getSingleUser = async (req,res) => {
    try{
        //savr User in database
        const singlUser = await User.findById(req.params.id)
        res.status(200).json(singlUser)
        }catch(err){
            res.status(200).json({error: "Operation Failed", errorDetails: err})
        }
}

//GET ALL CATEGORIES
export const getAllUsers = async (req,res) => {
    try{
        const allCategories = await User.find(req.query).limit(3)
        res.status(200).json(allCategories)
        }catch(err){
            res.status(200).json({error: "Operation Failed", errorDetails: err})
        }
}
