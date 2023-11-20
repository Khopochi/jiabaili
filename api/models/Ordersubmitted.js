import mongoose from 'mongoose';
const { Schema } = mongoose;

const OrdersubmittedSchema = new mongoose.Schema({
    userid: {
        type: Number,
        required: true,
      },
    cart: {
        type: [
            {
              productid: String,
              quantity: Number,
              price: Number,
            },
          ],
    },
    amount: {
      type: Number,
      required: true,
    },
    paymentid: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true,
    },
    orderid: {
        type: String,
        required: true,
    },
  }, {timestamps: true});
  
  export default mongoose.model("Ordersubmitted", OrdersubmittedSchema)