import { Router } from "express";
import { verifyAdmin } from "../utils/verifyToken.js";
import { addSubcategory, deleteSubcategory, getAllSubCategories, getSingleSubcategory, updateSubcategory } from "../controllers/subcategory.js";



//route requests
const router = Router()

router.post("/addSubcategory", verifyAdmin , addSubcategory)
router.put("/updateSubcategory/:id", verifyAdmin , updateSubcategory)
router.delete("/deleteSubcategory/:id", verifyAdmin , deleteSubcategory)
router.get("/getSingleSubcategory/:id", verifyAdmin , getSingleSubcategory)
router.get("/", verifyAdmin , getAllSubCategories)





export default router