import express from "express";

const router = express.Router()

router.get("/", async (rea, res) => {
    console.log("get payment here")
})

//payment method listen 
router.post("/create-payment-intent", async (req, res) => {
    //use string sdk to process
    //return secret key
    console.log("payment here")
})

export default router