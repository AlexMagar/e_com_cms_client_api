import express from "express";
import Stripe from "stripe";

const router = express.Router()

const paymentDetail= [{
    "amount": "240",
    "currency": "AUD",
    "paymentMethodType": "card",
}]

router.get("/", async (req, res) => {
    try {
        
        const {amount, currency, paymentMethodType} = await req.body
        console.log("This is amount: ",amount)
        res.json({
            status:"success",
            message: "Here are the payment detail of the transaction",
            paymentDetail,
        })
    } catch (error) {
        next(error)
    }
})

//payment method listen 
router.post("/payment", async (req, res) => {
    //use string sdk to process
    const secret = process.env.PAYMENT_SECRET_KEY

    const stripe = new Stripe(secret)
    const {amount, currency, paymentMethodType} = req.body

    const paymentIntent = await stripe.paymentIntents.create({
        amount: amount * 100,
        currency,
        payment_method_types: [paymentMethodType]
    })

    console.log("This is payment POST method: ",amount, currency)

    //return secret key
    return res.json({
        clientSecret: paymentIntent.client_secret
    })
})

export default router