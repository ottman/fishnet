"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Link from "next/link"

export default function CTA() {
  return (
    <section className="py-20 bg-transparent">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center bg-white p-12 rounded-lg shadow-lg"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-mono">Ready to Revolutionize Live Streaming?</h2>

          <p className="text-xl text-gray-600 mb-10">
            Join thousands of creators and viewers already transforming the future of interactive entertainment.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="bg-black hover:bg-gray-800 text-white px-8 py-6 text-lg w-full sm:w-auto"
              asChild
            >
              <Link href="https://fishtank.live">Enter Fishtank</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-black text-black hover:bg-black hover:text-white px-8 py-6 text-lg w-full sm:w-auto"
              asChild
            >
              <Link href="https://cal.com/minds">Schedule a Demo</Link>
            </Button>
          </div>

          <p className="mt-6 text-sm text-gray-500">Make your show interactive</p>
        </motion.div>
      </div>
    </section>
  )
}
