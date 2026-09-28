"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

const Shape = ({
  color,
  size,
  x,
  y,
  duration,
}: { color: string; size: number; x: number; y: number; duration: number }) => (
  <motion.div
    className="absolute rounded-full"
    style={{
      backgroundColor: color,
      width: size,
      height: size,
      x,
      y,
    }}
    animate={{
      x: [x, x + 20, x - 20, x],
      y: [y, y - 20, y + 20, y],
      rotate: [0, 90, 180, 270, 360],
    }}
    transition={{
      duration,
      repeat: Number.POSITIVE_INFINITY,
      ease: "linear",
    }}
  />
)

export const AnimatedShapes = () => {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 })

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight })
    }

    handleResize()
    window.addEventListener("resize", handleResize)

    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <Shape color="rgba(255, 0, 0, 0.1)" size={100} x={100} y={100} duration={20} />
      <Shape color="rgba(0, 255, 0, 0.1)" size={150} x={windowSize.width - 200} y={200} duration={25} />
      <Shape color="rgba(0, 0, 255, 0.1)" size={80} x={300} y={windowSize.height - 200} duration={18} />
      <Shape
        color="rgba(255, 255, 0, 0.1)"
        size={120}
        x={windowSize.width - 300}
        y={windowSize.height - 300}
        duration={22}
      />
    </div>
  )
}
