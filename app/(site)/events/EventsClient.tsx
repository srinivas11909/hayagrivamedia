"use client"

import { motion } from "framer-motion"
import EventCard from "./EventCard"

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
}

export default function EventsClient({ events }: { events: any[] }) {
  if (!events.length) {
    return (
      <div className="mt-24 text-center">
        <p className="text-lg text-muted-foreground">
          No events published yet.
        </p>
        <p className="mt-2 text-sm text-muted-foreground">
          Stay tuned — cinematic moments are coming soon.
        </p>
      </div>
    )
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
    >
      {events.map((event) => (
        <EventCard key={event._id} event={event} />
      ))}
    </motion.div>
  )
}
