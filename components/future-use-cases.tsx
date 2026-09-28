"use client"

import { motion } from "framer-motion"
import { Dumbbell, Tent, Rocket, Mic2, Users, Tv } from "lucide-react"

const useCases = [
  {
    icon: <Dumbbell className="h-12 w-12" />,
    title: "MMA & Extreme Sports",
    description: "Live interactive training camps and behind-the-scenes access to athletes' preparations.",
  },
  {
    icon: <Tent className="h-12 w-12" />,
    title: "Survival Challenges",
    description: "Viewers influence survival scenarios and resource allocation in real-time wilderness challenges.",
  },
  {
    icon: <Rocket className="h-12 w-12" />,
    title: "Tech Startup Incubator",
    description: "Watch and interact with startup teams as they build and pivot their products live.",
  },
  {
    icon: <Mic2 className="h-12 w-12" />,
    title: "Interactive Roasts",
    description: "Audience-driven comedy roasts where viewers contribute jokes and vote on the best burns.",
  },
  {
    icon: <Users className="h-12 w-12" />,
    title: "Streaming Community Challenges",
    description: "Popular streamers compete in viewer-directed challenges across various games and activities.",
  },
  {
    icon: <Tv className="h-12 w-12" />,
    title: "Custom Reality Concepts",
    description:
      "Create unique interactive shows tailored to any niche or community using Fishnet's flexible platform.",
  },
]

export default function FutureUseCases() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12 font-mono"
        >
          FUTURE USE-CASES
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center"
            >
              <div className="mb-4 text-primary">{useCase.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{useCase.title}</h3>
              <p className="text-gray-600">{useCase.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
