import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

/**
 * A lightweight, abstract 3D accent: floating amber particles drifting in a
 * slow group rotation. Rendered behind the hero text as a cinematic shimmer.
 * Designed to be cheap (points + simple material) and respects reduced motion.
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
    ref.current.rotation.y += delta * 0.04;
    ref.current.rotation.x += delta * 0.015;
    const t = state.clock.elapsedTime;
    ref.current.position.y = Math.sin(t * 0.3) * 0.3;
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
        size={0.08}
        sizeAttenuation
        transparent
        opacity={0.9}
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
      dpr={[1, 1.8]}
      gl={{ alpha: true, antialias: true }}
      style={{ pointerEvents: "none" }}
      frameloop={reduced ? "demand" : "always"}
    >
      <ParticleField count={reduced ? 60 : 180} color="#D99A45" />
    </Canvas>
  );
};
