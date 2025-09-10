import React, { useMemo, useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import * as THREE from "three";

// 👇 Artık import ederek URL alıyoruz
import logoUrl from "../assets/teknokent.png";

function Plaka({ thickness = 0.24, spinSpeed = 0.3 }) {
  const group = useRef();

  // PNG'yi import edilen yol üzerinden yükle
  const tex = useLoader(THREE.TextureLoader, logoUrl);
  tex.colorSpace = THREE.SRGBColorSpace;

  // Y ekseninde sürekli döndür
  useFrame((_, dt) => {
    if (group.current) group.current.rotation.y += dt * spinSpeed;
  });

  // Görsel oranı
  const aspect =
    tex && tex.image && tex.image.width && tex.image.height
      ? tex.image.width / tex.image.height
      : 1.6;

  // Materyaller (ön yüz logo, yanlar & arka gümüş)
  const materials = useMemo(() => {
    const silver = new THREE.MeshStandardMaterial({
      color: "#d1d5db",   // gümüş
      metalness: 0.9,
      roughness: 0.3,
      transparent: true,
      opacity: 0.0,   
    });
    const front = new THREE.MeshStandardMaterial({ map: tex });

    // Box yüz sırası: [+X, -X, +Y, -Y, +Z(front), -Z(back)]
    return [silver, silver, silver, silver, front, silver];
  }, [tex]);

  return (
    <group ref={group} dispose={null}>
      <mesh castShadow receiveShadow material={materials}>
        <boxGeometry args={[aspect, 1, thickness]} />
      </mesh>
    </group>
  );
}

export default function TeknoKentLogo3D({
  width = 520,
  height = 360,
  bg = "transparent",
}) {
  return (
    <div className="relative" style={{ width, height }}>
      <Canvas
        shadows
        dpr={[1, 2]}
        camera={{ position: [0, 0, 3], fov: 35 }}
        style={{ background: bg }}
        gl={{ powerPreference: "high-performance", antialias: true, alpha: true }}
        onCreated={({ gl }) => {
          gl.setClearAlpha(0);
        }}
      >
        <ambientLight intensity={0.65} />
        <directionalLight position={[3, 3, 2]} intensity={1.1} castShadow />
        <Plaka thickness={0.24} spinSpeed={0.3} />
      </Canvas>
    </div>
  );
}
