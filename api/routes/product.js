import { Router } from "express";
import { addProduct } from "../controllers/product.js";
import { verifyAdmin } from "../utils/verifyToken.js";

//route requests
const router = Router()

router.post("/addproduct", verifyAdmin, addProduct)





export default router