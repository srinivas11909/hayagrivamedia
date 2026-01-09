"use client"

import { motion } from "framer-motion"
import BrandButton from "@/components/BrandButton"


export default function HomeClient() {
    return (
        <section className="section pt-24 md:pt-32">
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
        </section>
    )
}