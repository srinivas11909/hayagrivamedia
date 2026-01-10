import { connectDB } from "@/lib/db"
import Gallery from "@/models/Gallery"
import GalleryClient from "@/components/GalleryClient"

export const metadata = {
  title: "Gallery | Highgreeva Media",
}

export default async function GalleryPage() {
  await connectDB()
  const images = await Gallery.find().sort({ createdAt: -1 }).lean()
  const safeImages = images.map((img: any) => ({
    _id: img._id.toString(),          // ObjectId → string
    image: img.image,
    category: img.category,
    caption: img.caption,
    eventSlug: img.eventSlug,
    createdAt: img.createdAt?.toISOString(),
  }))
  console.log(images)
  return (
    <section className="section">
      <div className="container">
        <h1 className="section-title">Gallery</h1>
        <GalleryClient images={safeImages} />
      </div>
    </section>
  )
}
