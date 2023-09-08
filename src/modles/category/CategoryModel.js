import mongoose from "mongoose"

const category = mongoose.model("categories", {})

export const getCategories = () => {
    return category.find()
}