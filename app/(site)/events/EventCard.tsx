"use client"

import Image from "next/image"
import { motion } from "framer-motion"

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
}

export default function EventCard({ event }: { event: any }) {
  return (
    <motion.article
      variants={cardVariants}
      whileHover={{ y: -6 }}
      className="
        group relative overflow-hidden rounded-2xl
        bg-card/50 backdrop-blur
        border border-primary/20
        transition-all
        hover:border-primary
        hover:shadow-[0_30px_60px_-15px_rgba(245,196,0,0.25)]
      "
    >
      {/* Image */}
      {event.image && (
        <div className="relative h-60 overflow-hidden">
          <Image
            src={event.image}
            alt={event.title}
            fill
            className="
              object-cover transition-transform duration-700
              group-hover:scale-110
            "
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        </div>
      )}

      {/* Content */}
      <div className="relative p-6">
        <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition">
          {event.title}
        </h3>

        {event.description && (
          <p className="mt-3 text-sm text-muted-foreground line-clamp-3">
            {event.description}
          </p>
        )}
      </div>
    </motion.article>
  )
}
