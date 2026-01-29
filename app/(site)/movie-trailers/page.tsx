'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Film, Check, ArrowRight, Award, Clock, Users, Zap } from 'lucide-react'
//import WhatsAppButton from '@/components/whatsapp-button'

const features = [
    {
        icon: Award,
        title: 'Cinematic Excellence',
        description: 'Hollywood-quality production values with expert editing and visual effects'
    },
    {
        icon: Clock,
        title: 'Quick Turnaround',
        description: 'Fast delivery without compromising on quality, meeting your deadlines'
    },
    {
        icon: Users,
        title: 'Expert Team',
        description: 'Experienced directors, editors, and sound designers at your service'
    },
    {
        icon: Zap,
        title: 'Engaging Content',
        description: 'Trailers that captivate audiences and build anticipation for your film'
    }
]

const services = [
    'Theatrical trailers',
    'Teaser campaigns',
    'TV spots',
    'Digital promotional content',
    'Behind-the-scenes content',
    'Featurettes and interviews',
    'Social media cuts',
    'International versions',
    'Sound design & mixing',
    'Visual effects integration'
]

const process = [
    {
        step: '01',
        title: 'Consultation',
        description: 'Understanding your vision, target audience, and marketing objectives'
    },
    {
        step: '02',
        title: 'Script & Storyboard',
        description: 'Creating compelling narratives that capture essence of your film'
    },
    {
        step: '03',
        title: 'Editing & Assembly',
        description: 'Expertly cutting footage to create powerful, emotional storytelling'
    },
    {
        step: '04',
        title: 'Sound & VFX',
        description: 'Professional sound design and visual effects for maximum impact'
    },
    {
        step: '05',
        title: 'Review & Refine',
        description: 'Collaborative feedback and refinement until perfect'
    }
]

export default function MovieTrailersPage() {
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
                            <Film className="w-10 h-10 text-primary" />
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="text-4xl md:text-6xl font-bold mb-4"
                        >
                            <span className="text-primary">Movie Trailers</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6 }}
                            className="text-xl text-muted-foreground max-w-3xl mx-auto"
                        >
                            Cinematic trailer production that captivates audiences and builds anticipation for your film
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
                                            whileHover={{ rotate: [0, 10, -10, 0] }}
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

                    {/* Process */}
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
                            Our Process
                        </motion.h2>
                        <div className="grid md:grid-cols-5 gap-4">
                            {process.map((item, index) => (
                                <motion.div
                                    key={item.step}
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1, type: "spring", stiffness: 80 }}
                                    whileHover={{ scale: 1.05, y: -8 }}
                                >
                                    <Card className="h-full hover:shadow-xl transition-all duration-300">
                                        <CardContent className="p-6">
                                            <motion.div
                                                animate={{ scale: [1, 1.05, 1] }}
                                                transition={{
                                                    duration: 2,
                                                    repeat: Infinity,
                                                    repeatDelay: 3,
                                                    delay: index * 0.3
                                                }}
                                                className="text-4xl font-bold text-primary mb-3"
                                            >
                                                {item.step}
                                            </motion.div>
                                            <h3 className="font-semibold mb-2">{item.title}</h3>
                                            <p className="text-sm text-muted-foreground">{item.description}</p>
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
                                <Film className="w-8 h-8 text-primary" />
                            </motion.div>
                            <h2 className="text-3xl font-bold mb-4 text-primary">Ready to Create Your Trailer?</h2>
                            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                                Let's create a powerful trailer that captures the essence of your film and excites your audience.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link href="/contact">
                                    <motion.div whileHover={{ scale: 1.05 }}>
                                        <Button size="lg">
                                            Get Started
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
            {/* <WhatsAppButton /> */}
        </>
    )
}
