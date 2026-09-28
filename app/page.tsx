"use client"

import Hero from "@/components/hero"
import Features from "@/components/features"
import RevenueStreams from "@/components/revenue-streams"
import Metrics from "@/components/metrics"
import Platform from "@/components/platform"
import CTA from "@/components/cta"
import Footer from "@/components/footer"
import { motion } from "framer-motion"
import dynamic from "next/dynamic"
import Integrations from "@/components/trusted-by"
import CaseStudies from "@/components/case-studies"
import FutureUseCases from "@/components/future-use-cases"

const AnimatedShapes = dynamic(() => import("@/components/animated-shapes").then((mod) => mod.AnimatedShapes), {
  ssr: false,
})

export default function Home() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen relative overflow-hidden bg-gradient-to-r from-white to-gray-200"
    >
      <AnimatedShapes />
      <Hero />
      <Platform />
      <Metrics />
      <RevenueStreams />
      <Features />
      <CaseStudies />
      <FutureUseCases />
      <CTA />
      <Integrations />
      <Footer />
    </motion.main>
  )
}
