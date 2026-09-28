"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ExternalLink } from "lucide-react"

const caseStudies = [
  {
    title: "Fishtank Reels in $3M in First Year",
    description: "Masterfully Balancing Ads & Tokens",
    url: "https://rethinkresearch.biz/articles/fishtank-reels-in-3m-in-first-year-masterfully-balancing-ads-tokens/",
  },
  {
    title: "Livepeer Studio Case Study",
    description: "Fishtank's Paid Live Interactivity",
    url: "https://itvt.com/televisionation/televisionation-nscreennoise-fishtanks-paid-live-interactivity-powered-by-livepeer-studio/",
  },
  {
    title: "Fishtank Live Merch on Sticker Mule",
    description: "Expanding Brand Reach Through Merchandise",
    url: "https://www.stickermule.com/blog/fishtank-live-merch-on-stickermule",
  },
  {
    title: "What is Fishtank Live?",
    description: "24/7 Interactive Online Reality Show Exemplifies Fishnet Software",
    url: "https://knowyourmeme.com/editorials/guides/what-is-fishtank-live-and-where-can-i-watch-it-sam-hydes-online-reality-show-explained",
  },
]

export default function CaseStudies() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12 font-mono"
        >
          CASE STUDIES
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-semibold mb-2">{study.title}</h3>
              <p className="text-gray-600 mb-4">{study.description}</p>
              <Link
                href={study.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 flex items-center"
              >
                Read More <ExternalLink className="ml-2 h-4 w-4" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
