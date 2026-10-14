
"use client";

import type * as THREE from "three";
import { useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  Float,
  MeshDistortMaterial,
  Sparkles,
  Stars,
} from "@react-three/drei";
import type { Group } from "three";

function Crystal() {
  const group = useRef<Group>(null);

  useFrame((state, delta) => {
    if (!group.current) return;

    group.current.rotation.y += delta * 0.16;
    group.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.35) * 0.12;
  });

  return (
    <group ref={group}>
      <Float speed={1.4} rotationIntensity={0.25} floatIntensity={0.6}>
        <mesh>
          <icosahedronGeometry args={[1.35, 5]} />
          <MeshDistortMaterial
            color="#b9a4ff"
            roughness={0.16}
            metalness={0.75}
            distort={0.24}
            speed={1.8}
            clearcoat={1}
            clearcoatRoughness={0.12}
          />
        </mesh>

        <mesh scale={1.08}>
          <icosahedronGeometry args={[1.35, 2]} />
          <meshBasicMaterial
            color="#e8ddff"
            wireframe
            transparent
            opacity={0.16}
          />
        </mesh>
      </Float>

      <mesh rotation={[0.8, 0.2, -0.35]}>
        <torusGeometry args={[2.05, 0.008, 12, 180]} />
        <meshStandardMaterial
          color="#d6c8ff"
          metalness={0.9}
          roughness={0.25}
          emissive="#8065c8"
          emissiveIntensity={0.5}
        />
      </mesh>

      <mesh rotation={[-0.6, 0.8, 0.7]}>
        <torusGeometry args={[2.3, 0.006, 12, 180]} />
        <meshStandardMaterial
          color="#e7b9e4"
          metalness={0.8}
          roughness={0.3}
        />
      </mesh>
    </group>
  );
}

function Scene() {
  return (
    <>

    <MouseLight />

      <ambientLight intensity={0.7} />

      <pointLight
        position={[4, 3, 4]}
        intensity={30}
        color="#bca5ff"
      />

      <pointLight
        position={[-4, -2, 2]}
        intensity={18}
        color="#df9cdb"
      />

      <pointLight
        position={[0, 3, -4]}
        intensity={15}
        color="#ffffff"
      />

      <Stars
        radius={70}
        depth={40}
        count={900}
        factor={2}
        saturation={0.2}
        fade
        speed={0.4}
      />

      <Sparkles
        count={70}
        scale={6}
        size={2}
        speed={0.25}
        color="#d9caff"
      />

      <Crystal />
    </>
  );
}

export default function Scene3D() {
  return (
    <div className="scene-3d">
      <Canvas
        camera={{ position: [0, 0, 7], fov: 42 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}
function MouseLight() {
  const light = useRef<THREE.PointLight>(null);
  const { pointer } = useThree();

  useFrame(() => {
    if (!light.current) return;

    light.current.position.x +=
      (pointer.x * 4 - light.current.position.x) * 0.05;

    light.current.position.y +=
      (pointer.y * 3 - light.current.position.y) * 0.05;
  });

  return (
    <pointLight
      ref={light}
      position={[0, 0, 3]}
      intensity={25}
      distance={12}
      color="#e4d5ff"
    />
  );
}
