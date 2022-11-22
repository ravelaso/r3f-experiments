import React from 'react'
function Lights() {
  return (
    <>
    <pointLight position={[1,1,0]} color={"#FaBG9A"} />
    <directionalLight position={[1,2,1]} />
    <ambientLight color={"#FFFFF"} intensity={0.1}/>
    </>
  )
}
export default Lights