import mongoose from "mongoose";

const grossarySchema = new mongoose.Schema({

    title: {
        type: String,
        required: [true, "Title is rquired."]
    },
    image_url: {
        type: String,
        trim: true
    },

    product: [
        {
            product_name: {
                type: String,
                required: [true, "Product name is reqired."],
                trim: true
            },
            product_image: {
                type: [String],
                required: [true, "Product image is riquired."]
            },
            product_price: {
                type: Number,
                required: [true, "Product price is required."]
            },
            measurment: {
                value: {
                    type: Number,
                    required: [true, "Product masurment is required."],
                    min: 0
                },

                uint: {
                    type: String,
                    required: [true, "Product unit is required."],
                    enum: ["kg", "g", "l", "ml", "piece"]
                },

                quantity: {
                    type: Number,
                    default: 0,
                    min: 0
                }
            }
        }
    ]




}, { timestamps: true });

export default mongoose.model("Grossary", grossarySchema);