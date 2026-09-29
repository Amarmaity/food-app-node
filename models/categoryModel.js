import mongoose from "mongoose";


const categotySchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, "Category title is required."]
        },
        imageUrl: {
            type: String,
            default: "https://www.vecteezy.com/vector-art/52792818-restaurant-logo-design"
        },
    },
    { timestamps: true }
);




export default mongoose.model("Category", categotySchema);