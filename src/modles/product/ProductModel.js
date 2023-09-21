import mongoose from "mongoose";

// const schema = new mongoose.schema({any: {} })
const productSchema = mongoose.model("products", {})

export const getProducts = () => {
    return productSchema.find()
}

export const getProductById = (_id) =>{
    return productSchema.findById(_id)
}