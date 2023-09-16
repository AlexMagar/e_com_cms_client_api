import mongoose from "mongoose";

// const schema = new mongoose.schema({any: {} })
const admin = mongoose.model("admins", {})

export const getAdmins = () =>{
    return admin.find()
}