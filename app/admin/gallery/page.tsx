// "use client"

// import { useEffect, useState } from "react"
// import BrandButton from "@/components/BrandButton"

// type GalleryItem = {
//   _id: string
//   image: string
// }

// export default function AdminGallery() {
//   const [image, setImage] = useState("")
//   const [gallery, setGallery] = useState<GalleryItem[]>([])
//   const [category, setCategory] = useState("Wedding")
//   const [caption, setCaption] = useState("")


//   const fetchGallery = async () => {
//     const res = await fetch("/api/gallery")
//     const data = await res.json()
//     setGallery(data)
//   }

//   useEffect(() => {
//     fetchGallery()
//   }, [])

// const uploadImage = async (file: File) => {
//   const fd = new FormData()
//   fd.append("file", file)

//   const res = await fetch("/api/upload", {
//     method: "POST",
//     body: fd,
//   })

//   const data = await res.json()
//   setImage(data.url)
// }

// const saveImage = async () => {
//   await fetch("/api/gallery", {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({ image, category, caption }),
//   })
//   setImage("")
//   fetchGallery()
// }

//   return (
//     <section className="section">
//       <div className="container">
//         <h1 className="section-title">Manage Gallery</h1>

//         <div className="mt-8 space-y-4">
//           <input
//             type="file"
//             onChange={e => uploadImage(e.target.files![0])}
//           />

//           <select
//             value={category}
//             onChange={(e) => setCategory(e.target.value)}
//             className="border border-border rounded px-3 py-2 bg-background"
//           >
//             <option>Wedding</option>
//             <option>Corporate</option>
//             <option>Movies</option>
//           </select>

//           <input
//             type="text"
//             placeholder="Caption (optional)"
//             value={caption}
//             onChange={(e) => setCaption(e.target.value)}
//             className="border border-border rounded px-3 py-2 bg-background"
//           />


//           {image && <img src={image} className="h-32 rounded" />}

//           <BrandButton onClick={saveImage}>
//             Add to Gallery
//           </BrandButton>
//         </div>

//         <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
//           {gallery.map(item => (
//             <img
//               key={item._id}
//               src={item.image}
//               className="rounded border"
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }


"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Trash2, Edit } from "lucide-react"
import BrandButton from "@/components/BrandButton"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select"
import { toast } from 'sonner'



type GalleryItem = {
  _id: string
  image: string
  category: string
  caption: string
}

export default function AdminGallery() {
  const [uploading, setUploading] = useState(false)
  const [image, setImage] = useState("")
  const [category, setCategory] = useState("Wedding")
  const [caption, setCaption] = useState("")
  const [gallery, setGallery] = useState<GalleryItem[]>([])
  const [editing, setEditing] = useState<GalleryItem | null>(null)

  const fetchGallery = async () => {
    const res = await fetch("/api/gallery")
    const data = await res.json()
    setGallery(data)
  }

  useEffect(() => {
    fetchGallery()
  }, [])

  const deleteItem = async (id: string) => {
    if (!confirm("Delete this image permanently?")) return

    await fetch("/api/gallery", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    })

    await fetchGallery()
  }

  const saveEdit = async () => {
    if (!editing) return

    await fetch("/api/gallery", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: editing._id,
        category: editing.category,
        caption: editing.caption,
      }),
    })

    setEditing(null)
   await fetchGallery()
  }

  const addImage = async () => {
    if (!image) return alert("Upload image first")

    await fetch("/api/gallery", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        image,
        category,
        caption,
      }),
    })

    // reset
    setImage("")
    setCaption("")
    setCategory("Wedding")

    await fetchGallery()
  }


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
    await fetchGallery()
  }


  return (
    <section>
      <h1 className="text-2xl font-bold mb-8">Gallery Manager</h1>
      <div className="mb-12 border border-border rounded-xl p-6 bg-card">
        <h2 className="text-lg font-semibold mb-4">
          Add New Gallery Image
        </h2>

        <div className="grid md:grid-cols-4 gap-4 items-end">

          {/* Upload */}
          <div>
            <label className="text-sm mb-1 block">Image</label>
            <Input
              type="file"
              accept="image/*"
              onChange={(e) =>
                e.target.files && uploadImage(e.target.files[0])
              }
            />
          </div>

          {/* Category */}
          <div>
            <label className="text-sm mb-1 block">Category</label>
            <Select value={category} onValueChange={setCategory}>
              <SelectTrigger>
                <SelectValue placeholder="Select category" />
              </SelectTrigger>

              <SelectContent>
                <SelectItem value="Wedding">Wedding</SelectItem>
                <SelectItem value="Corporate">Corporate</SelectItem>
                <SelectItem value="Movies">Movies</SelectItem>
              </SelectContent>
            </Select>

          </div>

          {/* Caption */}
          <div>
            <label className="text-sm mb-1 block">Caption</label>
            <Input
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
              placeholder="Optional caption"
            />
          </div>

          {/* Action */}
          <BrandButton
            onClick={addImage}
            disabled={uploading}
          >
            {uploading ? "Uploading..." : "Add Image"}
          </BrandButton>
        </div>

        {image && (
          <div className="mt-4">
            <p className="text-sm text-muted-foreground mb-2">
              Preview
            </p>
            <img
              src={image}
              className="h-32 rounded-lg border"
              alt="Preview"
            />
          </div>
        )}
      </div>


      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {gallery.map(item => (
          <div
            key={item._id}
            className="relative group rounded-xl border border-border overflow-hidden"
          >
            <Image
              src={item.image}
              alt={item.caption || "Gallery image"}
              width={400}
              height={300}
              className="object-cover w-full h-48"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex items-center justify-center gap-4">
              <button
                onClick={() => setEditing(item)}
                className="p-2 bg-white rounded-full"
              >
                <Edit size={18} className="text-black" />
              </button>

              <button
                onClick={() => deleteItem(item._id)}
                className="p-2 bg-red-600 rounded-full"
              >
                <Trash2 size={18} className="text-white" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* EDIT DIALOG */}
      <Dialog open={!!editing} onOpenChange={() => setEditing(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Gallery Item</DialogTitle>
          </DialogHeader>

          {editing && (
            <div className="space-y-4">

              {/* CATEGORY */}
              <Select
                value={editing.category}
                onValueChange={(value) =>
                  setEditing({ ...editing, category: value })
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>

                <SelectContent>
                  <SelectItem value="Wedding">Wedding</SelectItem>
                  <SelectItem value="Corporate">Corporate</SelectItem>
                  <SelectItem value="Movies">Movies</SelectItem>
                </SelectContent>
              </Select>

              {/* CAPTION */}
              <Input
                value={editing.caption}
                onChange={(e) =>
                  setEditing({ ...editing, caption: e.target.value })
                }
                placeholder="Caption"
              />

              <BrandButton onClick={saveEdit}>
                Save Changes
              </BrandButton>

            </div>
          )}
        </DialogContent>
      </Dialog>

    </section>
  )
}
