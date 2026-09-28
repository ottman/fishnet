"use client"

import { motion } from "framer-motion"
import { DollarSign, Gift, ShoppingBag, Tv, Film, Gamepad, Users, Mic, Server, Headphones } from "lucide-react"

export default function RevenueStreams() {
  const streams = [
    { icon: <Users className="h-6 w-6" />, title: "Memberships" },
    { icon: <Gift className="h-6 w-6" />, title: "Fishtoys" },
    { icon: <Mic className="h-6 w-6" />, title: "TTS (AI Text-To-Speech)" },
    { icon: <Headphones className="h-6 w-6" />, title: "SFX (AI Sound Effects)" },
    { icon: <ShoppingBag className="h-6 w-6" />, title: "Item Generation" },
    { icon: <Tv className="h-6 w-6" />, title: "Licensing" },
    { icon: <Gamepad className="h-6 w-6" />, title: "Game Purchases" },
    { icon: <DollarSign className="h-6 w-6" />, title: "Advertising" },
    { icon: <Film className="h-6 w-6" />, title: "Content Distribution" },
    { icon: <ShoppingBag className="h-6 w-6" />, title: "Digital Collectible Marketplace" },
    { icon: <Server className="h-6 w-6" />, title: "SaaS Hosting" },
  ]

  return (
    <section id="revenue" className="py-20 bg-transparent relative">
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12 font-mono"
        >
          MONETIZATION
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {streams.map((stream, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <div className="flex items-center mb-4">
                <div className="mr-4 text-gray-800">{stream.icon}</div>
                <h4 className="text-lg font-light">{stream.title}</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
