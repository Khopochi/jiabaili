import { Router } from "express";
import { verifyAdmin } from "../utils/verifyToken.js";
import { addDeepcategory, deleteDeepcategory, getAllDeepCategories, getSingleDeepcategory, updateDeepcategory } from "../controllers/deepcategoty.js";



//route requests
const router = Router()

router.post("/addDeepcategory", verifyAdmin , addDeepcategory)
router.put("/updateDeepcategory/:id", verifyAdmin , updateDeepcategory)
router.delete("/deleteDeepcategory/:id", verifyAdmin , deleteDeepcategory)
router.get("/getSingleDeepcategory/:id", verifyAdmin , getSingleDeepcategory)
router.get("/", verifyAdmin , getAllDeepCategories)





export default router