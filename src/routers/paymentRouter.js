import express from "express";
import Stripe from "stripe";

const router = express.Router()

router.get("/", async (rea, res) => {
    console.log("get payment here")
})

//payment method listen 
router.post("/create-payment-intent", async (req, res) => {
    //use string sdk to process
    const secret = process.env.PAYMENT_SECRET_KEY

    const stripe = new Stripe(secret)
    const {amount, currency, paymentMethodType} = req.body

    const paymentIntent = await stripe.paymentIntents.create({
        amount: amount * 100,
        currency,
        payment_method_types: [paymentMethodType]
    })

    //return secret key
    return res.json({
        clientSecret: paymentIntent.client_secret
    })
})

export default router