import express from "express";
import cors from "cors";
import morgan from "morgan";
import adminRouter from "./src/routers/adminRouter.js";

const PORT = process.env.PORT || 8000

const app = express();

app.use(express.json())
app.use(cors())
app.use(morgan('dev'))

//apis
app.use("/api/v1/admin", adminRouter)

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