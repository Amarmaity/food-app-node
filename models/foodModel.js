import mongoose from "mongoose";

const foodSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, "Title is required."]
        },

        foodTag: {
            type: String,
        },

        foodCode: {
            type: String,
            required: [true, "Food code is required."]
        },

        isAvailable: {
            type: Boolean,
            default: true
        },

        rating: {
            type: Number,
            min: 0,
            max: 5,
            default: 0
        },

        customerId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Customer",
            required: [true, "Customer ID is required."]
        },

        restaurantId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Restaurant",
            required: [true, "Restaurant ID is required."]
        },

        itmDescription: {
            type: String,
            required: [true, "Item description is required."]
        },

        categoryId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Category",
            required: [true, "Category ID is required."]
        },

        totalPrice: {
            type: Number,
            required: [true, "Total price is required."]
        },

        imageUrl: {
            type: String
        },

        status: {
            type: String,
            enum: ["pending", "preparing", "ready", "delivered"],
            default: "pending"
        },

        paymentStatus: {
            type: String,
            enum: ["pending", "paid"],
            default: "pending"
        },

        deliveryAddress: {
            type: String,
            required: [true, "Delivery address is required."]
        }

    },
    { timestamps: true }
);


export default mongoose.model("Food", foodSchema);