"use client"

import { motion } from "framer-motion"
import { DollarSign, Users, Clock, TrendingUp, CreditCard, Coins } from "lucide-react"

export default function Metrics() {
  const metrics = [
    { icon: <DollarSign className="h-8 w-8" />, value: "$5M+", label: "Revenue since 2023" },
    { icon: <Users className="h-8 w-8" />, value: "2M+", label: "Viewers" },
    { icon: <Clock className="h-8 w-8" />, value: "~25K", label: "Concurrent viewers 24/7" },
    { icon: <TrendingUp className="h-8 w-8" />, value: "2x", label: "Revenue YoY" },
    { icon: <CreditCard className="h-8 w-8" />, value: "100K", label: "Paying Customers" },
    { icon: <Coins className="h-8 w-8" />, value: "150K", label: "Token Transactions" },
  ]

  return (
    <section id="metrics" className="py-20 bg-transparent relative">
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12 font-mono"
        >
          METRICS
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white p-6 rounded-lg text-center shadow-md"
            >
              <div className="text-gray-800 mb-4">{metric.icon}</div>
              <p className="text-4xl md:text-5xl font-light mb-2 font-mono">{metric.value}</p>
              <p className="text-gray-600 text-lg font-light">{metric.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
