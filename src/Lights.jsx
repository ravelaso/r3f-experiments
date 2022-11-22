import React from 'react'
import {Environment} from '@react-three/drei'

function Lights() {
  return (
    <>
    {/* <pointLight position={[1,1,0]} color={"#FaBG9A"} /> */}
    {/* <directionalLight position={[1,2,1]} /> */}
    <Environment files={'./hdr/decor_shop_1k.hdr'} />
    <ambientLight color={"#FFFFF"} intensity={0.1}/>
    </>
  )
}

export default Lights