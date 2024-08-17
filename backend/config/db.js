import mongoose from "mongoose";

export const connectDB=async()=>{
    await mongoose.connect('mongodb+srv://khsbeats:bekushikhs@cluster0.bqafzzn.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}