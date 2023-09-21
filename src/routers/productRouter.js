import express from 'express'

const router = express.Router()

router.get("/:_id?", async (req, res, next) =>{
    try {
        const { _id} = req.params;
        const products = _id ? await getProductById(_id) : await getProducts(); 

        res.json({
            status: "success",
            message: "Here are the products",
            products,
        })

    } catch (error) {
        next(next)
    }
})