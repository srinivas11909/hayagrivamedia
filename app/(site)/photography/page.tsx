'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Camera, Check, ArrowRight, Award, Users, Sparkles, Image } from 'lucide-react'

const features = [
  {
    icon: Award,
    title: 'Artistic Vision',
    description: 'Creative photography that captures unique moments and tells compelling stories'
  },
  {
    icon: Users,
    title: 'Expert Team',
    description: 'Professional photographers with diverse specializations and years of experience'
  },
  {
    icon: Sparkles,
    title: 'Premium Quality',
    description: 'High-end equipment and professional editing for stunning, publication-ready images'
  },
  {
    icon: Image,
    title: 'Versatile Style',
    description: 'Adaptable to various styles - from traditional to contemporary and artistic'
  }
]

const services = [
  'Portrait photography',
  'Event coverage',
  'Product photography',
  'Fashion shoots',
  'Corporate headshots',
  'Architecture & interiors',
  'Food photography',
  'Editorial shoots',
  'Family portraits',
  'Newborn photography',
  'Studio sessions',
  'Outdoor location shoots'
]

const portfolioCategories = [
  {
    name: 'Portraits',
    count: '150+',
    description: 'Capturing personality and emotion in every frame'
  },
  {
    name: 'Events',
    count: '200+',
    description: 'Documenting special moments and celebrations'
  },
  {
    name: 'Commercial',
    count: '100+',
    description: 'Professional product and brand photography'
  }
]

export default function PhotographyPage() {
  return (
    <>
      <div className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Hero */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 80 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
              className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <Camera className="w-10 h-10 text-primary" />
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-4xl md:text-6xl font-bold mb-4"
            >
              <span className="text-primary">Photography</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-xl text-muted-foreground max-w-3xl mx-auto"
            >
              Professional photography services for all occasions. Capturing moments with artistic vision and technical excellence.
            </motion.p>
          </motion.div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1, type: "spring", stiffness: 80 }}
                whileHover={{ scale: 1.05, y: -8 }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <motion.div
                      whileHover={{ rotate: [0, 360, 0] }}
                      transition={{ duration: 0.6 }}
                      className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4"
                    >
                      <feature.icon className="w-6 h-6 text-primary" />
                    </motion.div>
                    <h3 className="font-semibold mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* What We Offer */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 80 }}
            className="mb-16"
          >
            <Card className="p-8 hover:shadow-xl transition-shadow duration-300">
              <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl font-bold mb-6 text-center"
              >
                Our Photography Services
              </motion.h2>
              <div className="grid md:grid-cols-3 gap-4">
                {services.map((service, index) => (
                  <motion.div
                    key={service}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + index * 0.05 }}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-3"
                  >
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>{service}</span>
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>

          {/* Portfolio Categories */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 80 }}
            className="mb-16"
          >
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold mb-8 text-center"
            >
              Portfolio Highlights
            </motion.h2>
            <div className="grid md:grid-cols-3 gap-6">
              {portfolioCategories.map((category, index) => (
                <motion.div
                  key={category.name}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, type: "spring", stiffness: 80 }}
                  whileHover={{ scale: 1.03, y: -8 }}
                >
                  <Card className="text-center p-8 h-full hover:shadow-xl transition-all duration-300 border-2 hover:border-primary">
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ 
                        duration: 2.5,
                        repeat: Infinity,
                        repeatDelay: 2,
                        delay: index * 0.3
                      }}
                      className="text-5xl font-bold text-primary mb-2"
                    >
                      {category.count}
                    </motion.div>
                    <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
                    <p className="text-sm text-muted-foreground">{category.description}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Why Choose Us */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 80 }}
            className="mb-16"
          >
            <Card className="p-8 bg-primary/5 hover:shadow-xl transition-shadow duration-300">
              <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl font-bold mb-6 text-center"
              >
                Why Choose Our Photography
              </motion.h2>
              <div className="grid md:grid-cols-2 gap-8">
                {[
                  {
                    title: 'Professional Equipment',
                    desc: 'We use professional-grade cameras, lenses, and lighting equipment to ensure every shot is perfect. Our gear includes the latest full-frame cameras and a comprehensive collection of lenses for every situation.'
                  },
                  {
                    title: 'Expert Editing',
                    desc: 'Our post-processing team expertly edits and retouches every image to bring out the best while maintaining natural beauty. From color grading to retouching, we handle it all.'
                  },
                  {
                    title: 'Creative Direction',
                    desc: 'We work closely with you to understand your vision and bring it to life. Our photographers have an artistic eye and can suggest creative concepts and compositions you might not have considered.'
                  },
                  {
                    title: 'Fast Delivery',
                    desc: 'We understand you\'re excited to see your photos. Our efficient workflow ensures you receive your edited images promptly, with expedited options available for urgent needs.'
                  }
                ].map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                  >
                    <h3 className="font-semibold mb-3">{item.title}</h3>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 80 }}
          >
            <Card className="text-center p-12 hover:shadow-2xl transition-shadow duration-300">
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  repeatDelay: 2
                }}
                className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6"
              >
                <Camera className="w-8 h-8 text-primary" />
              </motion.div>
              <h2 className="text-3xl font-bold mb-4">Ready to Capture Your Moments?</h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Whether it's a special occasion, commercial project, or personal portrait, let's create beautiful images together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <motion.div whileHover={{ scale: 1.05 }}>
                    <Button size="lg">
                      Book a Session
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </motion.div>
                </Link>
                <Link href="/portfolio">
                  <motion.div whileHover={{ scale: 1.05 }}>
                    <Button size="lg" variant="outline">
                      View Portfolio
                    </Button>
                  </motion.div>
                </Link>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </>
  )
}
