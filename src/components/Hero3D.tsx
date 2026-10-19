import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

/**
 * A lightweight, abstract 3D accent: floating amber particles drifting in a
 * slow group rotation. Rendered behind the hero text as a cinematic shimmer.
 * Optimized for 60fps performance and low GPU power consumption.
 */

interface ParticleFieldProps {
  count: number;
  color: string;
}

const ParticleField = ({ count, color }: ParticleFieldProps) => {
  const ref = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 14;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 8;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 6;
    }
    return arr;
  }, [count]);

  useFrame((state, delta) => {
    if (!ref.current) return;
    ref.current.rotation.y += delta * 0.03;
    ref.current.rotation.x += delta * 0.01;
    const t = state.clock.elapsedTime;
    ref.current.position.y = Math.sin(t * 0.25) * 0.2;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
          count={count}
        />
      </bufferGeometry>
      <pointsMaterial
        color={color}
        size={0.07}
        sizeAttenuation
        transparent
        opacity={0.8}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
};

interface Hero3DProps {
  reduced?: boolean;
}

export const Hero3D = ({ reduced }: Hero3DProps) => {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 60 }}
      dpr={1}
      gl={{
        alpha: true,
        antialias: false,
        powerPreference: "low-power",
        depth: false,
      }}
      style={{ pointerEvents: "none" }}
      frameloop={reduced ? "demand" : "always"}
    >
      <ParticleField count={reduced ? 25 : 75} color="#D99A45" />
    </Canvas>
  );
};
