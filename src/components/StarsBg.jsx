
import { useState, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as random from 'maath/random/dist/maath-random.esm'

export default function StarsBg(props) {
    const ref = useRef()
    const [sphere] = useState(() => random.inSphere(new Float32Array(5000), { radius: 3.5 }))
    useFrame((state, delta) => {
      ref.current.rotation.x -= delta / 10
      ref.current.rotation.y -= delta / 15
    })
    return (
      <group rotation={[0, 0, Math.PI / 4]}>
        <Points scale={[2,2,2]} ref={ref}  positions={sphere} stride={3} frustumCulled={false} {...props}>
          <PointMaterial  transparent color="#ffa0e0" size={0.012} sizeAttenuation={true} depthWrite={true} />
        </Points>
      </group>
    )
  }
  