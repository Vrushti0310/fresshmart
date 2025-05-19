import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://Freshmart:$hivansh280921@cluster0.zskcgxt.mongodb.net/food-del').then(()=>console.log("DB Connected"));
     
}
