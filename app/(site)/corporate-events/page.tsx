'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Building2, Check, ArrowRight, Award, Users, Video, Briefcase } from 'lucide-react'

const features = [
  {
    icon: Award,
    title: 'Professional Quality',
    description: 'Corporate-grade production that reflects your brand excellence and professionalism'
  },
  {
    icon: Users,
    title: 'Experienced Team',
    description: 'Specialists in corporate media with experience across industries'
  },
  {
    icon: Video,
    title: 'Complete Coverage',
    description: 'From concept to delivery, we handle every aspect of your corporate media needs'
  },
  {
    icon: Briefcase,
    title: 'Brand Aligned',
    description: 'Content that aligns with your brand identity and messaging'
  }
]

const services = [
  'Conference coverage',
  'Product launches',
  'Corporate events',
  'Training videos',
  'Brand films',
  'Promotional videos',
  'Internal communications',
  'Live streaming',
  'Interviews & testimonials',
  'Company profiles',
  'Annual reports',
  'Social media content'
]

const industries = [
  {
    name: 'Technology',
    description: 'Product launches, tech conferences, innovation stories'
  },
  {
    name: 'Healthcare',
    description: 'Medical conferences, patient testimonials, educational content'
  },
  {
    name: 'Finance',
    description: 'Annual meetings, investor relations, corporate communications'
  },
  {
    name: 'Manufacturing',
    description: 'Factory tours, process documentation, safety videos'
  },
  {
    name: 'Retail',
    description: 'Store openings, product showcases, customer stories'
  },
  {
    name: 'Education',
    description: 'University events, training materials, promotional content'
  }
]

export default function CorporateEventsPage() {
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
              <Building2 className="w-10 h-10 text-primary" />
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-4xl md:text-6xl font-bold mb-4 text-primary"
            >
              Corporate Events
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-xl text-muted-foreground max-w-3xl mx-auto"
            >
              Complete corporate event management and media production. Conferences, product launches, training sessions, and brand films.
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
                      whileHover={{ rotate: [0, -10, 10, 0] }}
                      transition={{ duration: 0.4 }}
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
                className="text-3xl font-bold mb-6 text-center text-primary"
              >
                Our Corporate Services
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

          {/* Industries */}
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
              Industries We Serve
            </motion.h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {industries.map((industry, index) => (
                <motion.div
                  key={industry.name}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, type: "spring", stiffness: 80 }}
                  whileHover={{ scale: 1.03, y: -8 }}
                >
                  <Card className="h-full hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-2 text-primary">{industry.name}</h3>
                      <p className="text-sm text-muted-foreground">{industry.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Why Corporate Choose Us */}
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
                className="text-3xl font-bold mb-6 text-center "
              >
                Why Corporate <span className="text-primary"> Clients Choose Us</span>
              </motion.h2>
              <div className="grid md:grid-cols-2 gap-8">
                {[
                  {
                    title: 'Professional Reliability',
                    desc: 'We understand the importance of deadlines and quality in corporate environments. Our team delivers consistent, professional results on time, every time.'
                  },
                  {
                    title: 'Scalable Solutions',
                    desc: 'From small internal meetings to large international conferences, we have the resources and expertise to handle projects of any scale.'
                  },
                  {
                    title: 'Strategic Storytelling',
                    desc: 'We don\'t just capture events; we tell your brand story. Our content aligns with your strategic objectives and communicates your message effectively.'
                  },
                  {
                    title: 'Comprehensive Service',
                    desc: 'From pre-production planning to post-production delivery, we handle everything. Our single point of contact makes coordination seamless.'
                  }
                ].map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                  >
                    <h3 className="font-semibold mb-3 text-primary">{item.title}</h3>
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
                <Building2 className="w-8 h-8 text-primary" />
              </motion.div>
              <h2 className="text-3xl font-bold mb-4 text-primary">Ready to Elevate Your Corporate Media?</h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Let's discuss your corporate media needs and create content that drives your business objectives.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <motion.div whileHover={{ scale: 1.05 }}>
                    <Button size="lg">
                      Start a Project
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
