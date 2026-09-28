"use client"

import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"

const MotionLink = motion(Link)

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col">
      <Navbar />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex-1 flex flex-col items-center justify-center text-center px-4 pt-20"
      >
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-8 inline-block h-16 w-24 relative"
          >
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/communityIcon_deudvirnvzua1-removebg-preview%20%281%29-HwkWUbF37aTJ0A0DeEBtAD3yV5y9eB.png"
              alt="Fishnet"
              fill
              style={{ objectFit: "contain" }}
              className="filter brightness-100"
              priority
            />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl md:text-6xl lg:text-7xl font-light leading-tight mb-6 font-mono"
          >
            The future of interactive live streaming.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto font-mono font-light"
          >
            Reinventing content creation where creators and fans merge into one organism. Viewers pay to influence shows
            with monetized AI and custom parasocial interactions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <MotionLink href="https://fishtank.live" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size="lg" className="bg-black hover:bg-gray-800 text-white px-8 py-6 text-lg font-light">
                Enter Fishtank
              </Button>
            </MotionLink>
            <MotionLink href="https://cal.com/minds" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                variant="outline"
                className="border-black text-black hover:bg-black hover:text-white px-8 py-6 text-lg font-light"
              >
                Launch a site
              </Button>
            </MotionLink>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
