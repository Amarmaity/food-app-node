import mongoose from "mongoose";


// Schema
const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: [true, 'Username is required.']
    },
    email: {
        type: String,
        required: [true, "Email is required."],
        unique: true
    },
    password: {
        type: String,
        required: [true, "Password is required."]
    },
    address: {
        type: String
    },
    phone: {
        type: String,
        required: [true, "Phone number is required."]
    },
    user_type: {
        type: String,
        required: [true, "user type is required."],
        enum: ["cliet", "admin", "vendor", "driver"]
    },
    answer: {
        type: String,
        required: [true, "Answer is required."]
    }

}, { timestamps: true }
);


export default mongoose.model("User", userSchema)