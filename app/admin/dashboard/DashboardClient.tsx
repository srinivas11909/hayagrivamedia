"use client"

import { useEffect, useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { toast } from "sonner"

type Hero = {
  _id: string
  title: string
  mediaUrl: string
  mediaType: "image" | "video"
  ctaText: string
  ctaLink: string
  isActive: boolean
  order: number
}

export default function HeroManager() {
  const [heroes, setHeroes] = useState<Hero[]>([])
  const [editing, setEditing] = useState<Hero | null>(null)

  const [form, setForm] = useState({
    title: "",
    mediaUrl: "",
    mediaType: "image" as "image" | "video",
    ctaText: "",
    ctaLink: "",
    isActive: true,
  })

  const fetchHeroes = async () => {
    const res = await fetch("/api/hero")
    setHeroes(await res.json())
  }

  useEffect(() => {
    fetchHeroes()
  }, [])

  const uploadMedia = async (file: File) => {
    const fd = new FormData()
    fd.append("file", file)

    const res = await fetch("/api/upload", {
      method: "POST",
      body: fd,
    })

    const data = await res.json()

    setForm(prev => ({
      ...prev,
      mediaUrl: data.url,
      mediaType: file.type.startsWith("video") ? "video" : "image",
    }))
  }

  const saveHero = async () => {
    const url = editing ? `/api/hero/${editing._id}` : "/api/hero"
    const method = editing ? "PUT" : "POST"

    await fetch(url, {
      method,
      body: JSON.stringify(form),
    })

    toast.success(editing ? "Slide updated" : "Slide added")
    setEditing(null)
    setForm({
      title: "",
      mediaUrl: "",
      mediaType: "image",
      ctaText: "",
      ctaLink: "",
      isActive: true,
    })

    fetchHeroes()
  }

  const deleteHero = async (id: string) => {
    if (!confirm("Delete slide?")) return
    await fetch(`/api/hero/${id}`, { method: "DELETE" })
    toast.success("Slide deleted")
    fetchHeroes()
  }

  return (
    <section className="container py-10 space-y-10">
      <h1 className="text-2xl font-bold">Hero Slides</h1>

      {/* FORM */}
      <div className="max-w-xl bg-white space-y-4 border p-6 rounded-xl">
        <Input
          placeholder="Title"
          value={form.title}
          onChange={e => setForm({ ...form, title: e.target.value })}
        />

        <Input
          type="file"
          accept="image/*,video/*"
          onChange={e => uploadMedia(e.target.files![0])}
        />

        {form.mediaUrl &&
          (form.mediaType === "image" ? (
            <img src={form.mediaUrl} className="h-40 rounded object-cover" />
          ) : (
            <video src={form.mediaUrl} controls className="h-40 rounded" />
          ))}

        <Input
          placeholder="CTA Text"
          value={form.ctaText}
          onChange={e => setForm({ ...form, ctaText: e.target.value })}
        />

        <Input
          placeholder="CTA Link"
          value={form.ctaLink}
          onChange={e => setForm({ ...form, ctaLink: e.target.value })}
        />

        <div className="flex items-center gap-2">
          <Switch
            checked={form.isActive}
            onCheckedChange={val => setForm({ ...form, isActive: val })}
          />
          <span>Active</span>
        </div>

        <Button onClick={saveHero} className="w-full">
          {editing ? "Update Slide" : "Add Slide"}
        </Button>
      </div>

      {/* LIST */}
      <div className="grid md:grid-cols-2 gap-6">
        {heroes.map(hero => (
          <div key={hero._id} className="border rounded-xl overflow-hidden">
            {hero.mediaType === "image" ? (
              <img src={hero.mediaUrl} className="h-40 w-full object-cover" />
            ) : (
              <video src={hero.mediaUrl} className="h-40 w-full" />
            )}

            <div className="p-4 space-y-2">
              <h3 className="font-semibold">{hero.title}</h3>

              <div className="flex gap-2">
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => {
                    setEditing(hero)
                    setForm(hero)
                  }}
                >
                  Edit
                </Button>

                <Button
                  size="sm"
                  variant="destructive"
                  onClick={() => deleteHero(hero._id)}
                >
                  Delete
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
