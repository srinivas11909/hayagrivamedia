"use client"
import { motion } from "framer-motion"
import { Award, Target, Users, Lightbulb, Heart, Star } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function AboutClient() {
    return (
        <div className="flex flex-col">
            {/* Hero Section */}
            <section className="relative py-20 px-4">
                <div className="container mx-auto text-center">
                    {/* <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            About <span className="text-primary">Hayagriva Media</span>
          </h1> */}
                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, ease: "easeOut" }}
                        className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6"
                    >
                        About <span className="text-primary">Hayagriva Media</span>
                    </motion.h1>
                    {/* <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                        We are passionate event management professionals dedicated to creating cinematic and premium experiences that leave lasting impressions.
                    </p> */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.7 }}
                        className="text-lg text-muted-foreground max-w-3xl mx-auto"
                    >
                        We are passionate event management professionals dedicated to creating
                        cinematic and premium experiences that leave lasting impressions.
                    </motion.p>
                </div>
            </section>

            {/* Story Section */}
            <section className="py-16 px-4 bg-card/20">
                <div className="container mx-auto">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Our Story</h2>
                        <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                            <p>
                                Hayagriva Media was founded with a singular vision: to transform ordinary events into extraordinary experiences. Our journey began with a passion for creating moments that matter, and today we stand as a leading event management company known for our cinematic approach and premium service quality.
                            </p>
                            <p>
                                With years of experience in the industry, we have had the privilege of working with diverse clients, from corporate giants to individuals seeking to celebrate life's most precious moments. Each event we undertake is a canvas where we paint memories that last a lifetime.
                            </p>
                            <p>
                                Our team of creative professionals brings together expertise in event planning, design, production, and execution. We believe in pushing boundaries, embracing innovation, and delivering excellence in every detail.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-20 px-4">
                <div className="container mx-auto">
                    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        <Card className="bg-card/50 border-border">
                            <CardHeader>
                                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                                    <Target className="h-6 w-6 text-primary" />
                                </div>
                                <CardTitle className="text-2xl">Our Mission</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground text-lg leading-relaxed">
                                    To deliver exceptional event experiences that exceed expectations, creating memorable moments through innovative planning, creative design, and flawless execution.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="bg-card/50 border-border">
                            <CardHeader>
                                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                                    <Star className="h-6 w-6 text-primary" />
                                </div>
                                <CardTitle className="text-2xl">Our Vision</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground text-lg leading-relaxed">
                                    To be recognized as the premier event management company known for cinematic quality, innovative solutions, and exceptional client satisfaction across all types of events.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-20 px-4 bg-card/20">
                <div className="container mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-foreground mb-4">Our Values</h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            The principles that guide everything we do
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                        <Card className="bg-card/50 border-border hover:border-primary/50 transition-all">
                            <CardHeader>
                                <Award className="mb-4 h-8 w-8 text-primary" />
                                <CardTitle className="text-xl">Excellence</CardTitle>
                                <CardDescription>
                                    We strive for perfection in every detail, ensuring the highest quality standards
                                </CardDescription>
                            </CardHeader>
                        </Card>

                        <Card className="bg-card/50 border-border hover:border-primary/50 transition-all">
                            <CardHeader>
                                <Lightbulb className="mb-4 h-8 w-8 text-primary" />
                                <CardTitle className="text-xl">Innovation</CardTitle>
                                <CardDescription>
                                    We embrace creativity and new ideas to deliver unique and memorable experiences
                                </CardDescription>
                            </CardHeader>
                        </Card>

                        <Card className="bg-card/50 border-border hover:border-primary/50 transition-all">
                            <CardHeader>
                                <Heart className="mb-4 h-8 w-8 text-primary" />
                                <CardTitle className="text-xl">Passion</CardTitle>
                                <CardDescription>
                                    We are driven by love for what we do and dedication to our clients' dreams
                                </CardDescription>
                            </CardHeader>
                        </Card>

                        <Card className="bg-card/50 border-border hover:border-primary/50 transition-all">
                            <CardHeader>
                                <Users className="mb-4 h-8 w-8 text-primary" />
                                <CardTitle className="text-xl">Collaboration</CardTitle>
                                <CardDescription>
                                    We work closely with our clients, partners, and team to achieve shared success
                                </CardDescription>
                            </CardHeader>
                        </Card>

                        <Card className="bg-card/50 border-border hover:border-primary/50 transition-all">
                            <CardHeader>
                                <Target className="mb-4 h-8 w-8 text-primary" />
                                <CardTitle className="text-xl">Reliability</CardTitle>
                                <CardDescription>
                                    We deliver on our promises with consistency and dependability
                                </CardDescription>
                            </CardHeader>
                        </Card>

                        <Card className="bg-card/50 border-border hover:border-primary/50 transition-all">
                            <CardHeader>
                                <Star className="mb-4 h-8 w-8 text-primary" />
                                <CardTitle className="text-xl">Premium Quality</CardTitle>
                                <CardDescription>
                                    We never compromise on quality, ensuring every event is exceptional
                                </CardDescription>
                            </CardHeader>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-20 px-4">
                <div className="container mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
                        <div>
                            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">500+</div>
                            <div className="text-muted-foreground">Events Managed</div>
                        </div>
                        <div>
                            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">100%</div>
                            <div className="text-muted-foreground">Client Satisfaction</div>
                        </div>
                        <div>
                            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">50+</div>
                            <div className="text-muted-foreground">Team Members</div>
                        </div>
                        <div>
                            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">10+</div>
                            <div className="text-muted-foreground">Years Experience</div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
