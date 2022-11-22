import React from 'react';
import {TextureLoader} from 'three'
import {Canvas,useLoader} from '@react-three/fiber'
import {OrbitControls,Line} from '@react-three/drei'

function Matcaps() {
    const mat = useLoader(TextureLoader,"./matcaps/matcap5.png")
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