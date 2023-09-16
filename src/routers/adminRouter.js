import express from "express";
import { getCategories } from "../modles/category/CategoryModel.js";
import { getAdmins } from "../modles/admin/adminModel.js";

const router = express.Router()

//get the admin
router.get("/", async (req, res, next) =>{
    try {
        const user = await getAdmins()
        res.json({
            status: "success",
            message: "here is the user Info",
            user,
        })
    } catch (error) {
        next(error)
    }
})

export default router