import express from "express";
import { getCategories } from "../modles/category/CategoryModel.js";
import { getAdmins } from "../modles/admin/adminModel.js";

const router = express.Router()

const users = [
    {
        "fName": "Laxman",
        "lName": "Magar",
        "address": "Brisbane"
    }
]


//get the admin
router.get("/",  (req, res, next) =>{
    try {
    const result = getAdmins()

    console.log("List all the admins: ", result)

        res.json({
            status: "sucess",
            message: "here is the user Info",
            result
        })
    } catch (error) {
        next(error)
    }
})

export default router