import { Canvas } from '@react-three/fiber'
import {OrbitControls} from '@react-three/drei'
function Torus() {
    return (
      <div className="h-screen">
        <Canvas>
          <ambientLight intensity={0.1} />
          <directionalLight color="red" position={[0, 0, 2]} />
          <mesh rotation={[0,0,1.3]}>
            <torusKnotBufferGeometry args={[1.5,0.3,100,100]} />
            <meshNormalMaterial  />
          </mesh>
          <OrbitControls enableZoom={false} />
        </Canvas>
      </div>
    );
  }
  export default Torus;
  