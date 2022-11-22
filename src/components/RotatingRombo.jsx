import React, {useRef} from "react";
import {Lathe} from '@react-three/drei'
import { useFrame } from "@react-three/fiber";

export default function RotatingRombo(){
    const myMesh = useRef()
    useFrame(({ clock }) => {
        const a = clock.getElapsedTime();
        myMesh.current.rotation.y = a;
      });

    return (
    <Lathe ref={myMesh} depth={[2]} rotation={[0,0,0]}  position={[0,1,0]}>
        <meshNormalMaterial color="#f3f3f3" wireframe />
    </Lathe>
    )
}