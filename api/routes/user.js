import express  from "express";
import { login, register } from "../controllers/userAuth.js";
import { verifyAdmin } from "../utils/verifyToken.js";
import { deleteUser, getAllUsers, getSingleUser, updateUser } from "../controllers/user.js";




const router = express.Router()
///////router
    router.post("/register", register ) 
    router.post("/login", login) 
    router.put("/updateUser/:id", updateUser)
    router.delete("/deleteUser/:id", verifyAdmin, deleteUser)
    router.get("/getSingleUser/:id", getSingleUser)
    router.get("/", verifyAdmin, getAllUsers)
/////router
export default router