import { Canvas, useFrame } from "@react-three/fiber";
import { Stars, Preload } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

const RotatingStars = () => {
  const starsRef = useRef<THREE.Points>(null);

  useFrame((state) => {
    if (starsRef.current) {
      starsRef.current.rotation.x = state.clock.elapsedTime * 0.02;
      starsRef.current.rotation.y = state.clock.elapsedTime * 0.03;
    }
  });

  return (
    <Stars
      ref={starsRef}
      radius={100}
      depth={50}
      count={5000}
      factor={3}
      saturation={0}
      fade
      speed={1}
    />
  );
};

const Background3D = () => {
  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none bg-background">
      <Canvas
        camera={{ position: [0, 0, 1] }}
        dpr={[1, 1.5]} // Limit pixel ratio to compile faster
        gl={{ antialias: false, powerPreference: "high-performance", alpha: false }} // Disable anti-alias for much faster init
      >
        <color attach="background" args={["#0a0a0a"]} />
        <ambientLight intensity={0.5} />
        <RotatingStars />
        {/* Force instant compilation of all materials and geometries before first paint */}
        <Preload all />
      </Canvas>
    </div>
  );
};

export default Background3D;
