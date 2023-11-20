import mongoose from 'mongoose';
const { Schema } = mongoose;

const DeepCategorySchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
      unique: true,
    },
    categoryyid: {
        type: String,
        required: true,
        unique: true,
    },
    subcategoryid: {
        type: String,
        required: true,
        unique: true,
    },
    brand: {
        type: [String],
        required: true
    },
    appearance: {
        type: [String],
        required: true
    },
    type: {
        type: [String],
        required: true
    },
    color: {
        type: [String],
        required: true
    },
    material: {
        type: [String],
        required: true
    },
    style: {
        type: [String],
        required: true
    },
    weight: {
        type: Number,
        required: true
    },
  }, {timestamps: true});
  
  export default mongoose.model("DeepCategory", DeepCategorySchema)