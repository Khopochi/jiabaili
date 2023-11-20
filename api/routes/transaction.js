import { Router } from "express";
import { TransactionSTD, createOrder } from "../controllers/transaction.js";




const router = Router()
//routing
router.post("/stdbank", TransactionSTD)
router.post("/stdcreateorder", createOrder)






export default router