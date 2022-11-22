import React from 'react';
import {TextureLoader} from 'three'
import {Canvas,useLoader} from '@react-three/fiber'
import {OrbitControls} from '@react-three/drei'
import texture from '../assets/material/matcap5.png'

function Matcaps() {
    const mat = useLoader(TextureLoader,texture)
    return (
    <div className='h-screen'>
    <Canvas>
        <mesh rotation={[0, 10, 0]}>
        <torusKnotBufferGeometry args={[1,0.2,200,300]} />
        <meshMatcapMaterial matcap={mat} />
        </mesh>
        <OrbitControls enableZoom={false} />
    </Canvas>
    </div>    
    );
  }
  export default Matcaps;