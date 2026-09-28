import mongoose from "mongoose";

const restaurantSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Restaurant name is required."],
      trim: true,
      maxlength: 100,
    },

    image_url: {
      type: String,
      trim: true,
    },

    foods: {
      type: [String],
      default: [],
    },

    time: {
      type: String,
      trim: true,
    },

    pickup: {
      type: Boolean,
      default: true,
    },

    delivery: {
      type: Boolean,
      default: true,
    },

    isOpen: {
      type: Boolean,
      default: true,
    },

    logoUrl: {
      type: String,
      trim: true,
    },

    rating: {
      type: Number,
      min: 1,
      max: 5,
    },

    ratingCount: {
      type: Number,
      default: 0,
      min: 0,
    },

    code: {
      type: String,
      trim: true,
    },

    location: {
      latitude: {
        type: Number,
        required: true,
      },

      longitude: {
        type: Number,
        required: true,
      },

      address: {
        type: String,
        required: true,
        trim: true,
      },

      title: {
        type: String,
        trim: true,
      },
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Restaurant", restaurantSchema);
