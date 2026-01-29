'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Heart, Check, ArrowRight, Award, Users, Star, Calendar } from 'lucide-react'

const features = [
  {
    icon: Award,
    title: 'Artistic Excellence',
    description: 'Cinematic storytelling that captures emotion and beauty of your special day'
  },
  {
    icon: Users,
    title: 'Experienced Team',
    description: 'Professional photographers and videographers with years of wedding experience'
  },
  {
    icon: Star,
    title: 'Premium Quality',
    description: 'High-definition cameras and professional audio equipment for stunning results'
  },
  {
    icon: Calendar,
    title: 'Full Coverage',
    description: 'From pre-wedding to reception, we capture every precious moment'
  }
]

const services = [
  'Pre-wedding photography',
  'Engagement shoots',
  'Cinematic wedding films',
  'Traditional ceremony coverage',
  'Reception coverage',
  'Bride and groom preparation',
  'Family portraits',
  'Candid moments',
  'Wedding albums',
  'Highlight reels',
  'Same-day edits',
  'Drone photography'
]

const packages = [
  {
    name: 'Essential',
    price: 'Custom Quote',
    features: [
      'Ceremony coverage',
      'Reception highlights',
      '500+ edited photos',
      'Online gallery',
      '1 photographer'
    ]
  },
  {
    name: 'Premium',
    price: 'Custom Quote',
    features: [
      'Full day coverage',
      'Cinematic wedding film',
      '1000+ edited photos',
      'Premium album',
      '2 photographers',
      'Drone footage'
    ]
  },
  {
    name: 'Luxury',
    price: 'Custom Quote',
    features: [
      'Multi-day coverage',
      'Full cinematic documentary',
      'Unlimited photos',
      'Luxury album package',
      'Full team coverage',
      'Drone + gimbal footage',
      'Pre-wedding shoot'
    ]
  }
]

export default function WeddingsPage() {
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
              <Heart className="w-10 h-10 text-primary" />
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-4xl md:text-6xl font-bold mb-4"
            >
              <span className="text-primary">Wedding</span> Events
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-xl text-muted-foreground max-w-3xl mx-auto"
            >
              Capturing your special day with elegance and emotion. We create timeless memories you'll cherish forever.
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
                      whileHover={{ rotate: [0, 15, -15, 0] }}
                      transition={{ duration: 0.5 }}
                      className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4"
                    >
                      <feature.icon className="w-6 h-6 text-primary" />
                    </motion.div>
                    <h3 className="font-semibold mb-2 text-primary">{feature.title}</h3>
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
                className="text-3xl font-bold mb-6 text-center text-primary"
              >
                What We Offer
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

          {/* Packages */}
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
              className="text-3xl font-bold mb-8 text-center text-primary"
            >
              Our Packages
            </motion.h2>
            <div className="grid md:grid-cols-3 gap-6">
              {packages.map((pkg, index) => (
                <motion.div
                  key={pkg.name}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15, type: "spring", stiffness: 80 }}
                  whileHover={{ scale: 1.03, y: -8 }}
                >
                  <Card className="h-full hover:shadow-xl transition-all duration-300 border-2 hover:border-primary">
                    <CardContent className="p-6">
                      <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                      <div className="text-3xl font-bold text-primary mb-4">{pkg.price}</div>
                      <ul className="space-y-3 mb-6">
                        {pkg.features.map((feature) => (
                          <li key={feature} className="flex items-center gap-2 text-sm">
                            <Check className="w-4 h-4 text-primary flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Link href="/contact">
                        <Button className="w-full">
                          Get Quote
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 80 }}
          >
            <Card className="text-center p-12 bg-primary/5 hover:shadow-2xl transition-shadow duration-300">
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  repeatDelay: 2
                }}
                className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6"
              >
                <Heart className="w-8 h-8 text-primary" />
              </motion.div>
              <h2 className="text-3xl font-bold mb-4 text-primary">Let's Capture Your Special Day</h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Contact us to discuss your wedding and create a package that's perfect for you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <motion.div whileHover={{ scale: 1.05 }}>
                    <Button size="lg">
                      Book Consultation
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
