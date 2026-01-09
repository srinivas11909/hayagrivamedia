//"use client"
import Link from 'next/link'
import { Button } from '@/components/ui/button'
//import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowRight, Calendar, Film, Sparkles, Users } from 'lucide-react'
import HomeClient from '@/components/HomeClient'

import BrandButton from "@/components/BrandButton"

import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Hayagriva Media | Cinematic Event Management & Media Production",
  description:
    "Hayagriva Media is a premium cinematic event management and media production agency creating unforgettable weddings, corporate events, films, and visual stories.",

  keywords: [
    "Hayagriva Media",
    "event management company",
    "cinematic event management",
    "wedding planners",
    "corporate event management",
    "movie production company",
    "media production agency",
    "event photography",
    "cinematic weddings",
    "premium event management",
  ],

  authors: [{ name: "Hayagriva Media" }],
  creator: "Hayagriva Media",
  publisher: "Hayagriva Media",

  openGraph: {
    title: "Hayagriva Media | Cinematic Event & Media Agency",
    description:
      "We create cinematic experiences that people remember. From weddings to films, Hayagriva Media designs premium events and visual stories.",
    url: "https://www.hayagrivamedia.com",
    siteName: "Hayagriva Media",
    images: [
      {
        url: "https://www.hayagrivamedia.com/og-home.jpg",
        width: 1200,
        height: 630,
        alt: "Hayagriva Media – Cinematic Event Management & Media Production",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Hayagriva Media | Cinematic Event Management",
    description:
      "Premium cinematic event management and media production agency creating unforgettable experiences.",
    images: ["https://www.hayagrivamedia.com/og-home.jpg"],
  },

  alternates: {
    canonical: "https://www.hayagrivamedia.com",
  },
}


export default function Home() {
  return (
    <main className="min-h-screen">

      {/* Hero */}
      {/* <section className="section pt-24 md:pt-32">
        <div className="container text-center">

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="section-title"
          >
            <span className="text-primary">Hayagriva Media</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25 }}
            className="section-subtitle mx-auto"
          >
            Cinematic event management, movie production and photography
            that create unforgettable experiences.
          </motion.p>

          <div className="mt-10">
            <BrandButton size="lg">
              Get in Touch
            </BrandButton>
          </div>

        </div>
      </section> */}

      <HomeClient />

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Why Choose Us</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We bring creativity, precision, and passion to every event we manage
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-card/50 border-border hover:border-primary/50 transition-all hover:scale-105">
              <CardHeader>
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Film className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Cinematic Quality</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Every event is crafted with cinematic precision and artistic vision
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-card/50 border-border hover:border-primary/50 transition-all hover:scale-105">
              <CardHeader>
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Expert Team</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Experienced professionals dedicated to making your event successful
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-card/50 border-border hover:border-primary/50 transition-all hover:scale-105">
              <CardHeader>
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Sparkles className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Premium Service</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Exceptional service quality from planning to execution
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

   
      {/* Services Section */}
      <section className="py-20 px-4 bg-card/20">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive event solutions tailored to your needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-card/50 border-border hover:border-primary/50 transition-all">
              <CardHeader>
                <Calendar className="mb-4 h-8 w-8 text-primary" />
                <CardTitle className="text-lg">Corporate Events</CardTitle>
                <CardDescription>
                  Professional corporate gatherings and conferences
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-card/50 border-border hover:border-primary/50 transition-all">
              <CardHeader>
                <Film className="mb-4 h-8 w-8 text-primary" />
                <CardTitle className="text-lg">Weddings</CardTitle>
                <CardDescription>
                  Dream weddings crafted with love and precision
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-card/50 border-border hover:border-primary/50 transition-all">
              <CardHeader>
                <Sparkles className="mb-4 h-8 w-8 text-primary" />
                <CardTitle className="text-lg">Social Events</CardTitle>
                <CardDescription>
                  Memorable social celebrations and parties
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-card/50 border-border hover:border-primary/50 transition-all">
              <CardHeader>
                <Users className="mb-4 h-8 w-8 text-primary" />
                <CardTitle className="text-lg">Exhibitions</CardTitle>
                <CardDescription>
                  Stunning exhibitions and trade shows
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>


      {/* CTA */}
      <section className="section">
        <div className="container text-center">
          <h2 className="section-title">
            Let’s Create Something Amazing
          </h2>
          <BrandButton className="mt-6">
            Contact Us
          </BrandButton>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <Card className="bg-gradient-to-br from-primary/10 to-card border-primary/20">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Ready to Create Something Amazing?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Let us help you bring your vision to life. Contact us today to discuss your event.
              </p>
              <Link href="/contact">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8">
                  Start Planning
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  )
}
