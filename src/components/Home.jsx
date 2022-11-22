import React from 'react';
import {Canvas} from '@react-three/fiber'
import {Stars,Text,Html} from '@react-three/drei'
import {Flex,Box} from '@react-three/flex'
import RotatingRombo from './RotatingRombo';
import MovingSpot from './MovingSpot';

function Home() {
    return (
      <Canvas shadows dpr={[1, 2]}>
        <MovingSpot  color="#0c8cbf" position={[4, 6, 1]} />
        <MovingSpot  color="#b00c3f" position={[-4, -6, 1]} />
        <Flex>
        <Html
              as='div' // Wrapping element (default: 'div')
              className='flex flex-col justify-end items-center p-10'
              fullscreen
              >
              <div className='flex flex-row'>
                <div className='bg-blue-500'>
                  <button type="button" class="inline-block px-6 py-2.5 bg-purple-600 text-white font-semibold text-xl leading-tight uppercase rounded-full shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out">
                      START
                    </button>
                </div>  
                <div className='bg-green-500'>
                  <button type="button" class="inline-block px-6 py-2.5 bg-purple-600 text-white font-semibold text-xl leading-tight uppercase rounded-full shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out">
                      START
                    </button>
                </div>  
              </div>
        </Html>
        <Box>
          {/* ROTATING ROMBO */}
            <RotatingRombo />
            <Text
            color={'#078G36'}
            fontSize={0.4}
            maxWidth={10}
            lineHeight={1}
            letterSpacing={0.02}
            textAlign={'center'}
            font="https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwK4vaqI.woff"
            anchorX="center"
            anchorY="middle">
            Andrés Ravelo
            </Text>
            {/* <OrbitControls dispose={true} autoRotate={true} enableZoom={true}  enableRotate={false} /> */}
          </Box>
        <Box >
          <Stars position={[0,0,-2]} radius={50} depth={80} count={5000} factor={6} saturation={2} fade speed={3} />
        </Box>        
      </Flex>
      </Canvas>
    );
  }
  export default Home;
  