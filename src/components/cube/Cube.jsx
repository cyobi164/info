import React, { useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import cubeModel from "../../assets/blenders/cube.glb";
import Stats from "stats.js";
import { DirectionalLight } from "three";

function CubeModel() {
  const { scene } = useGLTF(cubeModel);
  return <primitive object={scene} scale={0.5} position={[0, 0, 0]} />;
}

export default function Cube() {
  useEffect(() => {
    const stats = new Stats();
    document.body.appendChild(stats.dom); // Attach the stats element to the body

    function animate() {
      stats.update(); // Update stats on each frame
      requestAnimationFrame(animate);
    }
    animate();

    return () => {
      document.body.removeChild(stats.dom); // Clean up when component unmounts
    };
  }, []);

  return (
    <Canvas
      style={{ width: 300, height: 300 }}
      camera={{ position: [3, 3, 3], fov: 50 }}
    >
      <ambientLight intensity={0.5} />
      <DirectionalLight position={[5, 5, 5]} />
      <CubeModel />
      <OrbitControls enableZoom={false} enablePan={false} />
    </Canvas>
  );
}
