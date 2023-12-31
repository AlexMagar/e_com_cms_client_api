import express from "express";
import cors from "cors";
import morgan from "morgan";
import adminRouter from "./src/routers/adminRouter.js";
import mongoConnect from "./src/config/mongoConfig.js";
import productRouter from './src/routers/productRouter.js'
import paymentRouter from "./src/routers/paymentRouter.js";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 8000

const app = express();


mongoConnect(); //db connect

app.use(express.json())
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

//apis
app.use("/api/v1/admin", adminRouter)
app.use("/api/v1/product", productRouter)
app.use("/api/v1/payment", paymentRouter)

// default route
app.get("/", (req, res) =>{
    res.json({
        status: "success",
        message: "server is running well"
    })
})

//for error handling code
app.use((error, req, res, next) =>{
    const code = error.statusCode || 500;
    res.status(code).json({
        status: "error",
        message: error.message
    })
})

// PORT Listen
app.listen(PORT, (err) =>{
    console.log(err)
    err
    ? console.log(err.message)
    : console.log(`server is running at http://localhost:${PORT}`)
})