import mongoose from "mongoose";

const businessTypeSchema = new mongoose.Schema({

    vendor_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Vendor",
        required: [true, "Vendor Id should be store."]
    },

    business_type: {
        type: String,
        required: [true, "Business type is required"]
    },

    is_active: {
        type: Boolean,
        default: true
    },

}, { timestamps: true }
)


export default mongoose.model("BusinessType", businessTypeSchema)