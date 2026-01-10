// import { motion } from "framer-motion"

// export default function About() {
//   return (
//     <section className="section">
//       <div className="container max-w-4xl">
// <motion.h1
//   initial={{ opacity: 0, y: 30 }}
//   animate={{ opacity: 1, y: 0 }}
//   className="section-title"
// >
//   About Highgreeva Media
// </motion.h1>

//         <p className="mt-6 text-gray-300 leading-relaxed">
//           Highgreeva Media is a premium event management and media production
//           company focused on delivering cinematic, unforgettable experiences.
//           From weddings to corporate events and movie productions, we bring
//           creativity, precision and passion to every project.
//         </p>
//       </div>
//     </section>
//   )
// }

import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Hayagriva Media | Cinematic Event & Media Agency",
  description:
    "Hayagriva Media is a premium cinematic event management and media production agency creating unforgettable weddings, corporate events, films, and visual stories.",

  keywords: [
    "Hayagriva Media",
    "event management company",
    "cinematic event management",
    "wedding event planners",
    "corporate event management",
    "film production agency",
    "media production company",
    "event photography",
    "cinematic weddings",
  ],

  authors: [{ name: "Hayagriva Media" }],
  creator: "Hayagriva Media",
  publisher: "Hayagriva Media",

  openGraph: {
    title: "Hayagriva Media | Cinematic Event & Media Agency",
    description:
      "We create cinematic experiences that people remember. From weddings to films, Hayagriva Media designs premium events and visual stories.",
    url: "https://www.hayagrivamedia.com/about",
    siteName: "Hayagriva Media",
    images: [
      {
        url: "https://www.hayagrivamedia.com/og-about.jpg",
        width: 1200,
        height: 630,
        alt: "Hayagriva Media – Cinematic Event Agency",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "About Hayagriva Media | Cinematic Event Agency",
    description:
      "Premium cinematic event management and media production agency creating unforgettable experiences.",
    images: ["https://www.hayagrivamedia.com/og-about.jpg"],
  },

  alternates: {
    canonical: "https://www.hayagrivamedia.com/about",
  },
}


import AboutClient from "@/components/AboutClient"
export default function AboutPage() {
    return (
      <AboutClient />
    )
}
