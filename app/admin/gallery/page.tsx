"use client"

import { useEffect, useState } from "react"
import BrandButton from "@/components/BrandButton"

type GalleryItem = {
  _id: string
  image: string
}

export default function AdminGallery() {
  const [image, setImage] = useState("")
  const [gallery, setGallery] = useState<GalleryItem[]>([])
  const [category, setCategory] = useState("Wedding")
  const [caption, setCaption] = useState("")


  const fetchGallery = async () => {
    const res = await fetch("/api/gallery")
    const data = await res.json()
    setGallery(data)
  }

  useEffect(() => {
    fetchGallery()
  }, [])

  const uploadImage = async (file: File) => {
    const fd = new FormData()
    fd.append("file", file)

    const res = await fetch("/api/upload", {
      method: "POST",
      body: fd,
    })

    const data = await res.json()
    setImage(data.url)
  }

  const saveImage = async () => {
    await fetch("/api/gallery", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ image, category, caption }),
    })
    setImage("")
    fetchGallery()
  }

  return (
    <section className="section">
      <div className="container">
        <h1 className="section-title">Manage Gallery</h1>

        <div className="mt-8 space-y-4">
          <input
            type="file"
            onChange={e => uploadImage(e.target.files![0])}
          />

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="border border-border rounded px-3 py-2 bg-background"
          >
            <option>Wedding</option>
            <option>Corporate</option>
            <option>Movies</option>
          </select>

          <input
            type="text"
            placeholder="Caption (optional)"
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
            className="border border-border rounded px-3 py-2 bg-background"
          />


          {image && <img src={image} className="h-32 rounded" />}

          <BrandButton onClick={saveImage}>
            Add to Gallery
          </BrandButton>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
          {gallery.map(item => (
            <img
              key={item._id}
              src={item.image}
              className="rounded border"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
