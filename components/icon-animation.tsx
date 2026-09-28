"use client"

import { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import type { Mesh } from "three"

const IconMesh = ({ icon }: { icon: string }) => {
  const meshRef = useRef<Mesh>(null)

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(clock.getElapsedTime()) * 0.2
      meshRef.current.rotation.y = Math.cos(clock.getElapsedTime()) * 0.2
    }
  })

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={getColorForIcon(icon)} />
    </mesh>
  )
}

const getColorForIcon = (icon: string) => {
  switch (icon) {
    case "Monitor":
      return 0x4a90e2
    case "Users":
      return 0x50e3c2
    case "Zap":
      return 0xf5a623
    case "Gamepad":
      return 0xd0021b
    default:
      return 0xcccccc
  }
}

const IconAnimation = ({ icon }: { icon: string }) => {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <IconMesh icon={icon} />
    </Canvas>
  )
}

export default IconAnimation
