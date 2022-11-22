import React from 'react';
import {TextureLoader, NearestFilter} from 'three'
import {Canvas,useLoader} from '@react-three/fiber'
import {OrbitControls} from '@react-three/drei'
import Lights from './Lights';
import texture from '../assets/material/matcap1.png'

function Rombo() {
  const mat = useLoader(TextureLoader, texture)
    mat.minFilter = NearestFilter
    mat.magFilter = NearestFilter
    return (
      <div className="h-screen">
        <Canvas>
        <Lights/>          
          <mesh position={[0,0,0]}>
            <sphereGeometry args={[2,2,2]} />
            <meshStandardMaterial map={mat}  />
          </mesh>
          <OrbitControls enableZoom={false} />
        </Canvas>
      </div>
    );
  }
  export default Rombo;
  