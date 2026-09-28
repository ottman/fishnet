"use client"

import type React from "react"
import { motion } from "framer-motion"
import { Monitor, Users, Zap, Gamepad, Coins, BotIcon as Robot, Tv, Video } from "lucide-react"
import { useEffect, useState } from "react"

const FeatureCard = ({ icon, title }: { icon: React.ReactNode; title: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    whileHover={{ scale: 1.05 }}
    className="bg-white p-6 rounded-lg shadow-lg text-center flex flex-col items-center justify-center cursor-pointer"
  >
    <motion.div className="mb-4 text-gray-800" whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }}>
      {icon}
    </motion.div>
    <h3 className="text-xl font-light">{title}</h3>
  </motion.div>
)

export default function Platform() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  const features = [
    { icon: <Monitor className="h-12 w-12" />, title: "24/7 Live Streaming" },
    { icon: <Users className="h-12 w-12" />, title: "Interactive Community" },
    { icon: <Zap className="h-12 w-12" />, title: "Real-time Influence" },
    { icon: <Gamepad className="h-12 w-12" />, title: "Video Game Engine" },
    { icon: <Coins className="h-12 w-12" />, title: "Gamification" },
    { icon: <Coins className="h-12 w-12" />, title: "Tokenization" },
    { icon: <Robot className="h-12 w-12" />, title: "AI" },
    { icon: <Tv className="h-12 w-12" />, title: "Reality TV" },
    { icon: <Video className="h-12 w-12" />, title: "Video Library" },
  ]

  return (
    <section id="platform" className="py-20 bg-transparent relative">
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center font-mono"
        >
          LAUNCH YOUR INTERACTIVE LIVE STREAMING PLATFORM
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} icon={feature.icon} title={feature.title} />
          ))}
        </div>
      </div>
    </section>
  )
}
