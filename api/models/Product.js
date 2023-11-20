import mongoose from "mongoose";

const ProductScheme = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    barcode: {
        type: String,
        required: true
    },
    details: {
        type: String,
        required: true,
    },
    searchtem: {
        type: [String],
        required: true
    },
    brand: {
        type: String,
    },
    material: {
        type: String,
    },
    color: {
        type: String,
    },
    producttype: {
        type: String,
    },
    appearance: {
        type: String,
    },
    price: {
        type: Number,
        required: true
    },
    photos: {
        type: [String],
        required: true
    },
    quantity: {
        type: String,
        required: true
    },
    categoryid: {
        type: String,
        required: true
    },
    subcategoryid: {
        type: String,
        required: true
    },
    deepcategoryid: {
        type: String,
        required: true
    },
    discount: {
        type: Number,
        required: true
    },
},{timestamps:true});

export default mongoose.model("Product", ProductScheme)