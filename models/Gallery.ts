import mongoose, { Schema } from "mongoose"

const GallerySchema = new Schema(
    {
        image: { type: String, required: true },

        category: {
            type: String,
            enum: ["Wedding", "Corporate", "Movies"],
            required: true,
        },

        caption: {
            type: String,
            default: "",
        },

        // future-ready (optional)
        eventSlug: {
            type: String,
            default: null,
        },
    },
    { timestamps: true }
)

export default mongoose.models.Gallery ||
    mongoose.model("Gallery", GallerySchema)
