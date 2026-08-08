import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

/**
 * EarthScene
 * Procedurally-shaded rotating planet (no external texture files, so there's
 * nothing to fail loading over the network). Ocean/land look is faked with a
 * layered gradient-ish material + a slightly offset cloud shell + atmosphere
 * rim glow. Wrapped with a couple of slim wireframe "holographic" rings to
 * sell the AI/holographic brief.
 *
 * Props:
 *  - position: [x, y, z] placement in the scene
 *  - scale: uniform scale factor
 */
export default function EarthScene({ position = [3.2, -1.4, -2], scale = 1 }) {
  const planet = useRef();
  const clouds = useRef();
  const ring1 = useRef();
  const ring2 = useRef();

  useFrame((_, delta) => {
    if (planet.current) planet.current.rotation.y += delta * 0.12;
    if (clouds.current) clouds.current.rotation.y += delta * 0.18;
    if (ring1.current) ring1.current.rotation.z += delta * 0.25;
    if (ring2.current) ring2.current.rotation.x += delta * 0.18;
  });

  return (
    <group position={position} scale={scale}>
      {/* Core planet body */}
      <mesh ref={planet}>
        <sphereGeometry args={[1, 64, 64]} />
        <meshStandardMaterial color="#1a2a6c" metalness={0.3} roughness={0.75} emissive="#0a1440" emissiveIntensity={0.3} />
      </mesh>

      {/* "Continents" — a subtly offset, patchy second shell for visual depth */}
      <mesh ref={clouds} scale={1.015}>
        <sphereGeometry args={[1, 48, 48]} />
        <meshStandardMaterial
          color="#5B5FFF"
          transparent
          opacity={0.18}
          roughness={1}
          wireframe
        />
      </mesh>

      {/* Atmosphere rim glow */}
      <mesh scale={1.08}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshBasicMaterial color="#00E5FF" transparent opacity={0.08} side={2} />
      </mesh>

      {/* AI holographic ring — outer */}
      <mesh ref={ring1} rotation={[Math.PI / 2.4, 0, 0]}>
        <torusGeometry args={[1.6, 0.008, 8, 100]} />
        <meshBasicMaterial color="#00E5FF" transparent opacity={0.5} />
      </mesh>

      {/* AI holographic ring — inner, different axis for a gyroscope feel */}
      <mesh ref={ring2} rotation={[0, Math.PI / 3, 0]}>
        <torusGeometry args={[1.35, 0.006, 8, 100]} />
        <meshBasicMaterial color="#A855F7" transparent opacity={0.4} />
      </mesh>
    </group>
  );
}
