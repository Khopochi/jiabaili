import express from 'express'
import dotenv from 'dotenv'
import { Server } from "socket.io";
import http from 'http'
import cors from "cors"
import productRoute from "./routes/product.js"
import adminRoute from "./routes/adminAuth.js"
import categoryRoute from "./routes/category.js"
import subcategoryRoute from "./routes/subcategory.js"
import deepcategoryRoute from "./routes/deepcategory.js"
import paymentRoute from "./routes/payment.js"
import userRoute from "./routes/user.js"
import ordersubmittedRoute from "./routes/ordersubmitted.js"
import transactiionRoute from "./routes/transaction.js"
import webRoute from "./routes/webhook.js"
import mongoose from 'mongoose';
import cookieParser from "cookie-parser";





//middleware
const app = express()
app.use(express.json())
app.use(cookieParser())
dotenv.config()

//creatingg sockect io
const server = http.createServer(app)
const io = new Server(server,{
    cors:{
        origin:"*",
    },
})

//allow chrome to bypass corscors
const corsOptions ={
    origin:'*', 
    credentials:true,            
    optionSuccessStatus:200
}
app.use(cors(corsOptions));
//cors end here


//connect to mongoose
const connect =  async () => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("connected to Mongo")
      } catch (error) {
        console.log(error);
      }
}
//this ends here


//rauting requests
app.use("/api/product", productRoute)
app.use("/api/admin", adminRoute)
app.use("/api/user", userRoute)
app.use("/api/category", categoryRoute)
app.use("/api/subcategory", subcategoryRoute)
app.use("/api/deepcategory", deepcategoryRoute)
app.use("/api/payment", paymentRoute)
app.use("/api/ordersubmitted", ordersubmittedRoute)
app.use("/api/transaction", transactiionRoute)
app.use("/api/webhook", webRoute)



//connect to backend
const port = process.env.PORT || 8080;

app.listen(port, '0.0.0.0', () => {
    connect()
    console.log("Welcome... : [Kondwani P Chirwa]")
    console.log("Author.... : [Kondwani P Chirwa]")
    console.log("Connected : [server]")
})


