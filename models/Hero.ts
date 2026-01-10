import mongoose from "mongoose"

const HeroSchema = new mongoose.Schema(
    {
        title: { type: String, required: true },
        mediaUrl: { type: String, required: true },
        mediaType: {
            type: String,
            enum: ["image", "video"],
            required: true,
        },
        ctaText: { type: String },
        ctaLink: { type: String },
        isActive: { type: Boolean, default: true },
        order: { type: Number, default: 0 },

    },
    { timestamps: true }
)

export default mongoose.models.Hero ||
    mongoose.model("Hero", HeroSchema)
