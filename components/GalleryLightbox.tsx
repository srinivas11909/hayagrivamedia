"use client"

import { useEffect } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

export default function GalleryLightbox({ images, index, setIndex }: any) {
  const image = images[index]

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIndex(null)
      if (e.key === "ArrowRight" && index < images.length - 1)
        setIndex(index + 1)
      if (e.key === "ArrowLeft" && index > 0)
        setIndex(index - 1)
    }
    window.addEventListener("keydown", handler)
    return () => window.removeEventListener("keydown", handler)
  }, [index, images, setIndex])

  return (
    <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center">
      <button
        onClick={() => setIndex(null)}
        className="absolute top-6 right-6 text-white"
      >
        <X size={32} />
      </button>

      {index > 0 && (
        <button
          onClick={() => setIndex(index - 1)}
          className="absolute left-6 text-white"
        >
          <ChevronLeft size={40} />
        </button>
      )}

      {index < images.length - 1 && (
        <button
          onClick={() => setIndex(index + 1)}
          className="absolute right-6 text-white"
        >
          <ChevronRight size={40} />
        </button>
      )}

      <Image
        src={image.image}
        alt="Preview"
        width={1200}
        height={1200}
        className="max-h-[90vh] w-auto rounded-lg"
      />
    </div>
  )
}
