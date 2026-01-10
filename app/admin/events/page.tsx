// "use client"

// import { useEffect, useState } from "react"
// import { Input } from "@/components/ui/input"
// import BrandButton from "@/components/BrandButton"

// type EventType = {
//   _id: string
//   title: string
//   image: string
// }

// export default function AdminEvents() {
//   const [title, setTitle] = useState("")
//   const [image, setImage] = useState("")
//   const [events, setEvents] = useState<EventType[]>([])

//   const fetchEvents = async () => {
//     const res = await fetch("/api/events")
//     const data = await res.json()
//     setEvents(data)
//   }

//   useEffect(() => {
//     fetchEvents()
//   }, [])

//   const uploadImage = async (file: File) => {
//     const formData = new FormData()
//     formData.append("file", file)

//     const res = await fetch("/api/upload", {
//       method: "POST",
//       body: formData,
//     })

//     const data = await res.json()
//     setImage(data.url)
//   }

//   const saveEvent = async () => {
//     await fetch("/api/events", {
//       method: "POST",
//       body: JSON.stringify({ title, image }),
//     })

//     setTitle("")
//     setImage("")
//     fetchEvents()
//   }

//   return (
//     <section className="section">
//       <div className="container">
//         <h1 className="section-title">Manage Events</h1>

//         {/* Create */}
//         <div className="mt-8 space-y-4 max-w-md">
//           <Input
//             placeholder="Event Title"
//             value={title}
//             onChange={e => setTitle(e.target.value)}
//           />

//           <Input
//             type="file"
//             onChange={e => uploadImage(e.target.files![0])}
//           />

//           {image && (
//             <img src={image} className="h-32 rounded border" />
//           )}

//           <BrandButton onClick={saveEvent}>
//             Add Event
//           </BrandButton>
//         </div>

//         {/* List */}
//         <div className="grid md:grid-cols-3 gap-6 mt-16">
//           {events.map(event => (
//             <div
//               key={event._id}
//               className="border border-yellow-500/20 rounded-lg p-4"
//             >
//               <img src={event.image} className="h-40 w-full object-cover rounded" />
//               <h3 className="mt-3 font-semibold text-brand-yellow">
//                 {event.title}
//               </h3>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

"use client"

import { useEffect, useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import BrandButton from "@/components/BrandButton"
import { toast } from "sonner"

type EventType = {
  _id: string
  title: string
  image: string
}

export default function AdminEvents() {
  const [events, setEvents] = useState<EventType[]>([])
  const [title, setTitle] = useState("")
  const [image, setImage] = useState("")
  const [loading, setLoading] = useState(false)

  const [editing, setEditing] = useState<EventType | null>(null)

  const fetchEvents = async () => {
    const res = await fetch("/api/events")
    setEvents(await res.json())
  }

  useEffect(() => {
    fetchEvents()
  }, [])

  const uploadImage = async (file: File, setter: (url: string) => void) => {
    const formData = new FormData()
    formData.append("file", file)

    const res = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    })

    const data = await res.json()
    setter(data.url)
  }

  const createEvent = async () => {
    if (!title || !image) {
      toast.error("Title & Image required")
      return
    }

    setLoading(true)
    await fetch("/api/events", {
      method: "POST",
      body: JSON.stringify({ title, image }),
    })

    toast.success("Event added")
    setTitle("")
    setImage("")
    setLoading(false)
    fetchEvents()
  }

  const updateEvent = async () => {
    if (!editing) return

    setLoading(true)
    await fetch(`/api/events/${editing._id}`, {
      method: "PUT",
      body: JSON.stringify(editing),
    })

    toast.success("Event updated")
    setEditing(null)
    setLoading(false)
    fetchEvents()
  }

  const deleteEvent = async (id: string) => {
    if (!confirm("Delete this event?")) return

    await fetch(`/api/events/${id}`, { method: "DELETE" })
    toast.success("Event deleted")
    fetchEvents()
  }

  return (
    <section className="container py-10 space-y-12">
      <h1 className="text-3xl font-bold text-brand-yellow">
        Event Management
      </h1>

      {/* CREATE */}
      <div className="max-w-lg space-y-4 border p-6 rounded-xl bg-white">
        <h2 className="font-semibold text-lg">Add New Event</h2>

        <Input
          placeholder="Event Title"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />

        <Input
          type="file"
          onChange={e =>
            uploadImage(e.target.files![0], setImage)
          }
        />

        {image && (
          <img
            src={image}
            className="h-32 w-full object-cover rounded"
          />
        )}

        <BrandButton disabled={loading} onClick={createEvent}>
          Add Event
        </BrandButton>
      </div>

      {/* LIST */}
      {events.length === 0 ? (
        <p className="text-muted-foreground">
          No events created yet.
        </p>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map(event => (
            <div
              key={event._id}
              className="group border rounded-xl overflow-hidden"
            >
              <img
                src={event.image}
                className="h-48 w-full object-cover"
              />

              <div className="p-4 flex justify-between items-center">
                <h3 className="font-semibold">
                  {event.title}
                </h3>

                <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => setEditing(event)}
                  >
                    Edit
                  </Button>

                  <Button
                    size="sm"
                    variant="destructive"
                    onClick={() => deleteEvent(event._id)}
                  >
                    Delete
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* EDIT MODAL */}
      {editing && (
        <div className="fixed inset-0 bg-black/60 grid place-items-center z-50">
          <div className="bg-background p-6 rounded-xl space-y-4 w-full max-w-md">
            <h2 className="font-semibold text-lg">Edit Event</h2>

            <Input
              value={editing.title}
              onChange={e =>
                setEditing({ ...editing, title: e.target.value })
              }
            />

            <Input
              type="file"
              onChange={e =>
                uploadImage(
                  e.target.files![0],
                  url =>
                    setEditing({ ...editing, image: url })
                )
              }
            />

            <img
              src={editing.image}
              className="h-32 w-full object-cover rounded"
            />

            <div className="flex justify-end gap-2">
              <Button
                variant="ghost"
                onClick={() => setEditing(null)}
              >
                Cancel
              </Button>

              <BrandButton onClick={updateEvent}>
                Save Changes
              </BrandButton>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
