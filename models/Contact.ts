import mongoose, { Schema } from "mongoose"

const ContactSchema = new Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true },
        phone: { type: String, required: true },
        message: { type: String, required: true },
        contacted: { type: Boolean, default: false },
    },
    { timestamps: true }
)

export default mongoose.models.Contact ||
    mongoose.model("Contact", ContactSchema)
