"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowRight, Calendar, Film, Sparkles, Users, Camera, Clapperboard } from 'lucide-react'
import { motion } from "framer-motion"


const Services = () => {
    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.15,
            },
        },
    }

    const cardVariants = {
        hidden: {
            opacity: 0,
            y: 30,
            scale: 0.96,
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

    return (
        <section className="py-20 px-4 bg-card/20">
            <div className="container mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-foreground mb-4">Our Services</h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Comprehensive event solutions tailored to your needs
                    </p>
                </div>
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    <motion.div variants={cardVariants}>
                        <Card className="bg-card/50 border-border hover:border-primary/50 transition-all">
                            <CardHeader>
                                <Calendar className="mb-4 h-8 w-8 text-primary" />
                                <CardTitle className="text-lg">Corporate Events</CardTitle>
                                <CardDescription>
                                    Professional corporate gatherings and conferences
                                </CardDescription>
                            </CardHeader>
                        </Card>
                    </motion.div>
                    <motion.div variants={cardVariants}>


                        <Card className="bg-card/50 border-border hover:border-primary/50 transition-all">
                            <CardHeader>
                                <Film className="mb-4 h-8 w-8 text-primary" />
                                <CardTitle className="text-lg">Weddings</CardTitle>
                                <CardDescription>
                                    Dream weddings crafted with love and precision
                                </CardDescription>
                            </CardHeader>
                        </Card>
                    </motion.div>

                    {/* Photography */}
                    <motion.div variants={cardVariants}>

                        <Card className="bg-card/50 border-border hover:border-primary/50 transition-all">
                            <CardHeader>
                                <Camera className="mb-4 h-8 w-8 text-primary" />
                                <CardTitle className="text-lg">Photography</CardTitle>
                                <CardDescription>
                                    Professional event, wedding, and commercial photography with cinematic quality
                                </CardDescription>
                            </CardHeader>
                        </Card>
                    </motion.div>

                    {/* Trailer Releases */}
                    <motion.div variants={cardVariants}>

                        <Card className="bg-card/50 border-border hover:border-primary/50 transition-all">
                            <CardHeader>
                                <Clapperboard className="mb-4 h-8 w-8 text-primary" />
                                <CardTitle className="text-lg">Trailer Releases</CardTitle>
                                <CardDescription>
                                    Cinematic teaser and trailer launches crafted for maximum impact
                                </CardDescription>
                            </CardHeader>
                        </Card>
                    </motion.div>


                    <motion.div variants={cardVariants}>

                        <Card className="bg-card/50 border-border hover:border-primary/50 transition-all">
                            <CardHeader>
                                <Sparkles className="mb-4 h-8 w-8 text-primary" />
                                <CardTitle className="text-lg">Social Events</CardTitle>
                                <CardDescription>
                                    Memorable social celebrations and parties
                                </CardDescription>
                            </CardHeader>
                        </Card>
                    </motion.div>

                    <motion.div variants={cardVariants}>

                        <Card className="bg-card/50 border-border hover:border-primary/50 transition-all">
                            <CardHeader>
                                <Users className="mb-4 h-8 w-8 text-primary" />
                                <CardTitle className="text-lg">Exhibitions</CardTitle>
                                <CardDescription>
                                    Stunning exhibitions and trade shows
                                </CardDescription>
                            </CardHeader>
                        </Card>
                    </motion.div>

                </motion.div>
            </div>
        </section>
    )
}

export default Services