import { Router } from "express";
import { verifyAdmin } from "../utils/verifyToken.js";
import { addOrdersubmitted, updateOrdersubmitted } from "../controllers/orderonsubmitted.js";


const router = Router()
router.post("/addOrdersubmitted", addOrdersubmitted)
router.put("/updateOrdersubmitted/:id", verifyAdmin , updateOrdersubmitted)



export default router