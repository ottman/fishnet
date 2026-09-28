"use client"

import { useRef } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { type Mesh, type ShaderMaterial, Vector2 } from "three"

const NetMaterial = () => {
  const materialRef = useRef<ShaderMaterial>(null)
  const { size } = useThree()

  useFrame(({ clock }) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = clock.getElapsedTime()
      materialRef.current.uniforms.uResolution.value = new Vector2(size.width, size.height)
    }
  })

  return (
    <shaderMaterial
      ref={materialRef}
      uniforms={{
        uTime: { value: 0 },
        uResolution: { value: new Vector2() },
      }}
      vertexShader={`
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `}
      fragmentShader={`
        uniform float uTime;
        uniform vec2 uResolution;
        varying vec2 vUv;

        void main() {
          vec2 st = gl_FragCoord.xy / uResolution.xy;
          st.x *= uResolution.x / uResolution.y;

          vec2 pos = vec2(st * 10.0);
          
          float r = length(fract(pos) - 0.5);
          float a = atan(pos.y, pos.x);
          
          float f = smoothstep(0.3, 0.31, cos(a * 5.0) * sin(uTime + pos.x + pos.y));
          
          vec3 color = mix(vec3(0.1, 0.3, 0.5), vec3(0.3, 0.5, 0.7), f);
          
          gl_FragColor = vec4(color, 1.0);
        }
      `}
    />
  )
}

const NetMesh = () => {
  const meshRef = useRef<Mesh>(null)

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.z += 0.001
    }
  })

  return (
    <mesh ref={meshRef}>
      <planeGeometry args={[2, 2]} />
      <NetMaterial />
    </mesh>
  )
}

const NetAnimation = () => {
  return (
    <Canvas>
      <NetMesh />
    </Canvas>
  )
}

export default NetAnimation
