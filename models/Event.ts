import mongoose, { Schema } from "mongoose"

const EventSchema = new Schema(
  {
    title: { type: String, required: true },
    description: String,
    image: String,
    date: String,
    location: String,
  },
  { timestamps: true }
)

export default mongoose.models.Event ||
  mongoose.model("Event", EventSchema)
