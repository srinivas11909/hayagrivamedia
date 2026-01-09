"use client"

import { useEffect, useState } from "react"
import { Input } from "@/components/ui/input"
import BrandButton from "@/components/BrandButton"

type EventType = {
  _id: string
  title: string
  image: string
}

export default function AdminEvents() {
  const [title, setTitle] = useState("")
  const [image, setImage] = useState("")
  const [events, setEvents] = useState<EventType[]>([])

  const fetchEvents = async () => {
    const res = await fetch("/api/events")
    const data = await res.json()
    setEvents(data)
  }

  useEffect(() => {
    fetchEvents()
  }, [])

  const uploadImage = async (file: File) => {
    const formData = new FormData()
    formData.append("file", file)

    const res = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    })

    const data = await res.json()
    setImage(data.url)
  }

  const saveEvent = async () => {
    await fetch("/api/events", {
      method: "POST",
      body: JSON.stringify({ title, image }),
    })

    setTitle("")
    setImage("")
    fetchEvents()
  }

  return (
    <section className="section">
      <div className="container">
        <h1 className="section-title">Manage Events</h1>

        {/* Create */}
        <div className="mt-8 space-y-4 max-w-md">
          <Input
            placeholder="Event Title"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />

          <Input
            type="file"
            onChange={e => uploadImage(e.target.files![0])}
          />

          {image && (
            <img src={image} className="h-32 rounded border" />
          )}

          <BrandButton onClick={saveEvent}>
            Add Event
          </BrandButton>
        </div>

        {/* List */}
        <div className="grid md:grid-cols-3 gap-6 mt-16">
          {events.map(event => (
            <div
              key={event._id}
              className="border border-yellow-500/20 rounded-lg p-4"
            >
              <img src={event.image} className="h-40 w-full object-cover rounded" />
              <h3 className="mt-3 font-semibold text-brand-yellow">
                {event.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
