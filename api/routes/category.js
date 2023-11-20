import { Router } from "express";
import { verifyAdmin } from "../utils/verifyToken.js";
import { addCategory, deleteCategory, getAllCategories, getSingleCategory, updateCategory } from "../controllers/category.js";


//route requests
const router = Router()

router.post("/addCategory", verifyAdmin , addCategory)
router.put("/updateCategory/:id", verifyAdmin , updateCategory)
router.delete("/deleteCategory/:id", verifyAdmin , deleteCategory)
router.get("/getSingleCategory/:id", verifyAdmin , getSingleCategory)
router.get("/", verifyAdmin , getAllCategories)





export default router