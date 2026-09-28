"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function Preview() {
  return (
    <section className="py-20 bg-transparent relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative rounded-xl overflow-hidden shadow-2xl"
        >
          <div className="aspect-w-16 aspect-h-9 relative">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-03-07%20at%207.32.53%20PM.png-YfdZ4EGcWOtaqMAovetyFRoNgYkZjT.jpeg"
              alt="Fishtank AI tracking demonstration"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="absolute bottom-0 left-0 right-0 p-6 text-white bg-gradient-to-t from-black/70 to-transparent"
          >
            <h3 className="text-2xl font-light mb-2 font-mono">REAL-TIME AI TRACKING</h3>
            <p className="text-lg font-light opacity-90">Advanced computer vision monitors all activity 24/7</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
