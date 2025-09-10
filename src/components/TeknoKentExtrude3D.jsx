import React, { useMemo, useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { ContactShadows, Environment } from "@react-three/drei";
import * as THREE from "three";
import { SVGLoader } from "three/examples/jsm/loaders/SVGLoader.js";

function ExtrudedLogo({
  svgUrl = "/teknokent.svg",
  thickness = 12.2,     // kalın
  bevelSize = 0.03,
  spinSpeed = 0.4,     // ters yönde ve yavaş
  targetWidth = 2.0,
  tilt = -0.10,         // ters eğim (okunurluk için genelde -0.25 iyi)
}) {
  const spinRef = useRef(); // sadece Y ekseninde dönecek
  const tiltRef = useRef(); // sabit eğim buraya

  // Sadece Y ekseni rotasyonu (ekranın içine/ters yön: spinSpeed negatif)
  useFrame((_, dt) => {
    if (spinRef.current) spinRef.current.rotation.y += dt * spinSpeed;
  });

  const data = useLoader(SVGLoader, svgUrl);

  const geom = useMemo(() => {
    const shapes = [];
    for (const p of data.paths) shapes.push(...SVGLoader.createShapes(p));

    const g = new THREE.ExtrudeGeometry(shapes, {
      depth: thickness,
      bevelEnabled: true,
      bevelThickness: bevelSize,
      bevelSize: bevelSize,
      bevelSegments: 3,
      curveSegments: 16,
    });

    g.center();

    // Hedef genişliğe ölçekle
    g.computeBoundingBox();
    const bb = g.boundingBox;
    const w = bb.max.x - bb.min.x;
    const uniform = targetWidth / w;
    g.scale(uniform, uniform, uniform);

    // 🔧 SVG koordinatları Y-down olduğu için ayna/tersi düzelt
    g.scale(1, -1, 1); // Y ekseninde flip — yazı ayna/baş aşağı olmaz

    return g;
  }, [data, thickness, bevelSize, targetWidth]);

  // Malzemeler
  const frontBack = new THREE.MeshStandardMaterial({
    color: "#ffffff",
    metalness: 0.2,
    roughness: 0.5,
    envMapIntensity: 0.8,
    side: THREE.FrontSide,
  });

  const sides = new THREE.MeshPhysicalMaterial({
    color: "#d1d5db", // gümüş
    metalness: 0.95,
    roughness: 0.25,
    clearcoat: 0.6,
    clearcoatRoughness: 0.2,
    envMapIntensity: 1.2,
  });

  return (
    <group ref={spinRef} dispose={null}>
      {/* sabit perspektif eğimi SADECE bu grupta */}
      <group ref={tiltRef} rotation={[tilt, 0, 0]}>
        <mesh geometry={geom} castShadow receiveShadow>
          {/* Extrude, ön/arka ve yanları gruplar. İki malzemeyi dizi olarak geç. */}
          <meshStandardMaterial attach="material-0" {...frontBack} />
          <meshStandardMaterial attach="material-1" {...sides} />
        </mesh>
      </group>
    </group>
  );
}

export default function TeknoKentExtrude3D({
  width = 560,
  height = 380,
  bg = "transparent",
}) {
  return (
    <div style={{ width, height }}>
      <Canvas
        shadows
        dpr={[1, 2]}
        camera={{ position: [0, 0.5, 4], fov: 30 }} // dar FOV + biraz uzaktan
        style={{ background: bg }}
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[3, 3, 2]} intensity={1.1} castShadow />
        <ExtrudedLogo
          svgUrl="/teknokent.svg"
          thickness={12.2}
          bevelSize={0.03}
          spinSpeed={0.35} // biraz daha yumuşak
          tilt={-0.10}      // ters eğim (isteğe göre -0.2 ~ -0.35 arası güzel)
        />
        <ContactShadows position={[0, -0.7, 0]} opacity={0.3} blur={2.2} scale={8} />
        <Environment preset="studio" />
      </Canvas>
    </div>
  );
}
