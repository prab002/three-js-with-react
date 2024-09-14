import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sparkles } from "@react-three/drei";

const RotatingCutes = () => {
  const meshRef = useRef();

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={meshRef}>
      <cylinderGeometry args={[1, 1, 1]} />{" "}
      <meshStandardMaterial color={"#468585"} emissive={"#468585"} />
      <Sparkles
        count={100}
        scale={1}
        size={6}
        speed={0.002}
        noise={0.2}
        color="orange"
      />
    </mesh>
  );
};

const App = () => {
  return (
    <Canvas
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <OrbitControls enableZoom enablePan enableRotate />
      <directionalLight position={[1, 1, 1]} intensity={1} color={"#9cdba6"} />
      <color attach="background" args={["#F0F0F0"]} />
      <RotatingCutes />
    </Canvas>
  );
};

export default App;
