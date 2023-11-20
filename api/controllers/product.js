import Product from "../models/Product.js"


//ADD PRODUCT FUNCTION
export const addProduct = async (req,res) => {
    const newProduct = Product(req.body)
    try{
        const savedProduct = await newProduct.save()
        res.status(200).json(savedProduct)
    }catch(err){
        res.status(200).json({error: "Operation Failed"})   
    }
}