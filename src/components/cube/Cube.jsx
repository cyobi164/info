import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import cubeModel from "../../assets/blenders/cube.glb";

function CubeModel() {
  const { scene } = useGLTF(cubeModel);
  return <primitive object={scene} scale={0.5} position={[0, 0, 0]} />;
}

export default function Cube() {
  return (
    <Canvas
      style={{ width: 300, height: 300 }}
      camera={{ position: [3, 3, 3], fov: 50 }}
    >
      <ambientLight intensity={0.5} />
      {/* Use the directionalLight component from @react-three/fiber */}
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <CubeModel />
      <OrbitControls enableZoom={false} enablePan={false} />
    </Canvas>
  );
}
