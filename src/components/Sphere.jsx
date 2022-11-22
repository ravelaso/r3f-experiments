import React from 'react';
import {Canvas} from '@react-three/fiber'
import {OrbitControls,Stars,Text,Lathe} from '@react-three/drei'
import {Flex,Box} from '@react-three/flex'

function Sphere() {
    return (
      <Canvas >
        <Flex >
        <Box >
          <Stars position={[0,0,-2]} radius={50} depth={80} count={5000} factor={6} saturation={2} fade speed={2} />
        </Box>
          <Lathe depth={[2]} rotation={[0.5,0,0]}  position={[0,1,1]}>
          <meshNormalMaterial color="#f3f3f3" wireframe />
          </Lathe>
          <Text
          color={'#078G36'}
          fontSize={1}
          maxWidth={10}
          lineHeight={1}
          letterSpacing={0.02}
          textAlign={'center'}
          font="https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwK4vaqI.woff"
          anchorX="center"
          anchorY="middle">
          ¡Hola!
          </Text>
          <OrbitControls enableZoom={false} enableRotate={false} />                  
      </Flex>
      </Canvas>
    );
  }
  export default Sphere;
  