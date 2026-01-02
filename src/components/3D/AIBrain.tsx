import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Sphere, MeshDistortMaterial } from '@react-three/drei'
import * as THREE from 'three'

const AIBrain = () => {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.1
      meshRef.current.rotation.y += 0.01
    }
  })

  return (
    <group>
      {/* Main brain sphere */}
      <Sphere ref={meshRef} args={[1.5, 64, 64]} position={[0, 0, 0]}>
        <MeshDistortMaterial
          color="#3b82f6"
          attach="material"
          distort={0.3}
          speed={2}
          roughness={0.1}
          metalness={0.8}
        />
      </Sphere>
      
      {/* Neural network nodes */}
      {Array.from({ length: 20 }).map((_, i) => {
        const angle = (i / 20) * Math.PI * 2
        const radius = 2.5
        const x = Math.cos(angle) * radius
        const z = Math.sin(angle) * radius
        const y = (Math.random() - 0.5) * 2
        
        return (
          <Sphere key={i} args={[0.05, 16, 16]} position={[x, y, z]}>
            <meshStandardMaterial
              color="#8b5cf6"
              emissive="#8b5cf6"
              emissiveIntensity={0.5}
            />
          </Sphere>
        )
      })}
      
      {/* Connecting lines effect */}
      <mesh>
        <sphereGeometry args={[2.2, 32, 32]} />
        <meshBasicMaterial
          color="#3b82f6"
          transparent
          opacity={0.1}
          wireframe
        />
      </mesh>
    </group>
  )
}

export default AIBrain