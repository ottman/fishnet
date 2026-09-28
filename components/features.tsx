"use client"

import type React from "react"
import { motion } from "framer-motion"
import {
  Mail,
  Award,
  Key,
  TrendingUpIcon as Trending,
  Shield,
  MessageCircle,
  Users,
  BarChartIcon as ChartBar,
  ShoppingBag,
  DollarSign,
  Lock,
  ShoppingCart,
  Mic,
  Music,
  Gift,
  UserCircle,
  Globe,
  Palette,
  Scissors,
  Medal,
  Bell,
} from "lucide-react"

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

export default function Features() {
  const features = [
    { icon: <Mail className="h-8 w-8" />, title: "Email" },
    { icon: <Award className="h-8 w-8" />, title: "Run Contests" },
    { icon: <Key className="h-8 w-8" />, title: "Secret Codes" },
    { icon: <Trending className="h-8 w-8" />, title: "Viral Campaigns" },
    { icon: <Shield className="h-8 w-8" />, title: "AI Moderation" },
    { icon: <MessageCircle className="h-8 w-8" />, title: "Chat" },
    { icon: <Users className="h-8 w-8" />, title: "Groups" },
    { icon: <Users className="h-8 w-8" />, title: "Memberships" },
    { icon: <ChartBar className="h-8 w-8" />, title: "Polls" },
    { icon: <ShoppingBag className="h-8 w-8" />, title: "Digital Collectible Marketplace" },
    { icon: <DollarSign className="h-8 w-8" />, title: "Ads" },
    { icon: <Lock className="h-8 w-8" />, title: "Paywalls" },
    { icon: <ShoppingCart className="h-8 w-8" />, title: "Merch" },
    { icon: <Mic className="h-8 w-8" />, title: "TTS (Text-to-Speech)" },
    { icon: <Music className="h-8 w-8" />, title: "SFX (Sound Effects)" },
    { icon: <Gift className="h-8 w-8" />, title: "Reward System" },
    { icon: <Award className="h-8 w-8" />, title: "Badges" },
    { icon: <UserCircle className="h-8 w-8" />, title: "Profiles" },
    { icon: <Globe className="h-8 w-8" />, title: "Custom Domain" },
    { icon: <Palette className="h-8 w-8" />, title: "Theme" },
    { icon: <Scissors className="h-8 w-8" />, title: "Live Clipping" },
    { icon: <Medal className="h-8 w-8" />, title: "Medals" },
    { icon: <Bell className="h-8 w-8" />, title: "Notifications" },
  ]

  return (
    <section id="features" className="py-20 bg-transparent relative">
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold text-center mb-16 font-mono"
        >
          NEXT GENERATION FEATURES
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} icon={feature.icon} title={feature.title} />
          ))}
        </div>
      </div>
    </section>
  )
}
