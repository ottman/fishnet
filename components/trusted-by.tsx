"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export default function Integrations() {
  return (
    <section className="bg-black py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold text-center mb-16 text-white font-mono"
        >
          INTEGRATIONS WITH
        </motion.h2>

        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-64 h-24 relative"
          >
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/282-2824123_stripe-logo-png-stripe-logo-white-transparent-clipart-UqfGWjXufdQ3o5hNlxjoAzGi34OXSC.png"
              alt="Stripe"
              fill
              style={{ objectFit: "contain" }}
              className="filter brightness-100"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-64 h-24 relative"
          >
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-basic-alt-white-3SMi8Qx1Xr4s9Sabovzy7I8XTnJeAD.png"
              alt="Million Dollar Extreme"
              fill
              style={{ objectFit: "contain" }}
              className="filter brightness-100"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="w-64 h-24 relative"
          >
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-full-white%20%284%29.webp-rkrzfuOKlpYHgD2v9lENVLZxfyuc2A.png"
              alt="Fishtank"
              fill
              style={{ objectFit: "contain" }}
              className="filter brightness-100"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="w-64 h-24 relative"
          >
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/_-removebg-preview-JQ5OkSjgUnqbqjcpkPim74XUhjdIto.png"
              alt="Eleven Labs"
              fill
              style={{ objectFit: "contain" }}
              className="filter brightness-100"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="w-64 h-24 relative"
          >
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mindsLogoDark%20%281%29-GYImb3prhHBjecNHGOkzVPjgDT5Q7R.png"
              alt="MINDS"
              fill
              style={{ objectFit: "contain" }}
              className="filter brightness-100"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="w-64 h-24 relative"
          >
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/659751d1ccb76baf40759190_livepeer-logo-primary-1200px-white-transparent-computer-backpack-HVUVqsymzIKpzt5Ac47joedE4paAGx.png"
              alt="Livepeer"
              fill
              style={{ objectFit: "contain" }}
              className="filter brightness-100"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="w-64 h-24 relative"
          >
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/images%20%2815%29-6RlFXYQlBV4CMDfEerTaTerBxNeseQ.png"
              alt="Supabase"
              fill
              style={{ objectFit: "contain" }}
              className="filter brightness-100"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="w-64 h-24 relative"
          >
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/nextjs__1_-removebg-preview-qltqzIRz63Nl6LXvLFE8EPpoRqdSmw.png"
              alt="Next.js"
              fill
              style={{ objectFit: "contain" }}
              className="filter brightness-100"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
