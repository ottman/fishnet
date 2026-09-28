"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Twitter, Instagram, Youtube, Music } from "lucide-react"

const socialLinks = [
  {
    icon: <Twitter className="h-6 w-6" />,
    href: "https://x.com/fishtankislive",
    label: "Follow us on X",
  },
  {
    icon: <Instagram className="h-6 w-6" />,
    href: "https://instagram.com/fishtank.live",
    label: "Follow us on Instagram",
  },
  {
    icon: <Youtube className="h-6 w-6" />,
    href: "https://youtube.com/@fishtankislive",
    label: "Subscribe on YouTube",
  },
  {
    icon: <Music className="h-6 w-6" />,
    href: "https://tiktok.com/@fishtank.live",
    label: "Follow us on TikTok",
  },
]

export default function SocialLinks() {
  return (
    <div className="fixed bottom-8 right-8 z-50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col gap-4"
      >
        {socialLinks.map((link, index) => (
          <motion.div
            key={link.href}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Link
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-white p-3 rounded-full hover:bg-gray-800 transition-colors duration-200 flex items-center justify-center"
              aria-label={link.label}
            >
              {link.icon}
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
