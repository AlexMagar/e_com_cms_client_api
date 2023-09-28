import express from 'express'
import { getProductById, getProducts } from '../modles/product/ProductModel.js';

const router = express.Router()

router.get("/:_id?", async (req, res, next) =>{
    try {
        const { _id} = req.params;
        console.log("Product router id: ",_id)
        const products = _id ? await getProductById(_id) : await getProducts()

        const pdt = await getProducts()

        // console.log("product router: ", pdt)

        res.json({
            status: "success",
            message: "Here are the products",
            products,
        })

    } catch (error) {
        next(next)
    }
})

export default router