"use client"

import { useState } from "react"
import GalleryItem from "./GalleryItem"
import GalleryLightbox from "./GalleryLightbox"

const categories = ["All", "Wedding", "Corporate", "Movies"]

export default function GalleryClient({ images }: any) {
    const [active, setActive] = useState("All")
    const [index, setIndex] = useState<number | null>(null)

    const filtered =
        active === "All"
            ? images
            : images.filter((img: any) => img.category === active)

    return (
        <>
            {/* Filters */}
            <div className="flex flex-wrap gap-3 mt-8">
                {categories.map(cat => (
                    <button
                        key={cat}
                        onClick={() => setActive(cat)}
                        className={`px-4 py-1 rounded-full border text-sm transition cursor-pointer
              ${active === cat
                                ? "bg-primary text-primary-foreground"
                                : "border-border hover:bg-muted"
                            }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Masonry */}
            <div className="columns-2 md:columns-3 lg:columns-4 gap-4 mt-12">
                {filtered.map((item: any, i: number) => (
                    <GalleryItem
                        key={item._id}
                        item={item}
                        onClick={() => setIndex(i)}
                    />
                ))}
            </div>

            {/* Lightbox */}
            {index !== null && (
                <GalleryLightbox
                    images={filtered}
                    index={index}
                    setIndex={setIndex}
                />
            )}
        </>
    )
}
