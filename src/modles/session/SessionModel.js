import mongoose from "mongoose"

const SessionSchema = mongoose.model("sessions", {})

export const insertSession = (obj) =>{
   return SessionSchema(obj).save()
}

// @token should be string
export const deleteSession = async (token) =>{
   const data = await SessionSchema.findOneAndDelete({token})
}