import { Suspense, useRef } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import * as THREE from 'three';

interface Interactive3DProps {
  src?: string;
  caption?: string;
  autoRotate?: boolean;
  className?: string;
  fallbackImage?: string;
}

// Cubic Diamond Lattice Geometry
const CubicDiamondLattice = ({ autoRotate = true }: { autoRotate?: boolean }) => {
  const meshRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (meshRef.current && autoRotate) {
      meshRef.current.rotation.x += 0.005;
      meshRef.current.rotation.y += 0.01;
    }
  });

  // Create lattice structure
  const latticePoints = [];
  const spacing = 1.5;
  
  // Generate cubic lattice points
  for (let x = -2; x <= 2; x++) {
    for (let y = -2; y <= 2; y++) {
      for (let z = -2; z <= 2; z++) {
        latticePoints.push([x * spacing, y * spacing, z * spacing]);
      }
    }
  }

  return (
    <group ref={meshRef}>
      {latticePoints.map((point, index) => (
        <mesh key={index} position={point as [number, number, number]}>
          <octahedronGeometry args={[0.1]} />
          <meshPhongMaterial 
            color={`hsl(${214 + (index * 10) % 60}, 70%, ${50 + (index * 5) % 30}%)`}
            transparent
            opacity={0.8}
          />
        </mesh>
      ))}
      
      {/* Connection lines between lattice points */}
      {latticePoints.slice(0, 20).map((point, index) => (
        <mesh key={`line-${index}`} position={point as [number, number, number]}>
          <cylinderGeometry args={[0.02, 0.02, spacing * 0.8]} />
          <meshBasicMaterial color="hsl(214, 100%, 50%)" transparent opacity={0.3} />
        </mesh>
      ))}
    </group>
  );
};

// Model Loader Component
const ModelViewer = ({ src }: { src: string }) => {
  try {
    const gltf = useLoader(GLTFLoader, src);
    return <primitive object={gltf.scene} scale={[1, 1, 1]} />;
  } catch (error) {
    console.warn(`Failed to load 3D model: ${src}`, error);
    return <CubicDiamondLattice />;
  }
};

export const Interactive3D = ({ 
  src, 
  caption, 
  autoRotate = true, 
  className = "",
  fallbackImage 
}: Interactive3DProps) => {
  return (
    <div className={`w-full h-96 theory-card ${className}`}>
      <div className="w-full h-full bg-gradient-to-br from-background to-neutral-light rounded-lg overflow-hidden">
        <Suspense fallback={
          <div className="w-full h-full flex items-center justify-center bg-neutral-light">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cobalt"></div>
          </div>
        }>
          <Canvas>
            <PerspectiveCamera makeDefault position={[5, 5, 5]} />
            
            {/* Lighting */}
            <ambientLight intensity={0.4} />
            <directionalLight 
              position={[10, 10, 5]} 
              intensity={1}
              castShadow
            />
            <pointLight position={[-10, -10, -10]} intensity={0.5} />
            
            {/* 3D Content */}
            {src ? (
              <ModelViewer src={src} />
            ) : (
              <CubicDiamondLattice autoRotate={autoRotate} />
            )}
            
            {/* Controls */}
            <OrbitControls 
              enablePan={true}
              enableZoom={true}
              enableRotate={true}
              autoRotate={autoRotate}
              autoRotateSpeed={2}
            />
          </Canvas>
        </Suspense>
      </div>
      
      {caption && (
        <p className="text-sm text-muted-foreground mt-3 text-center font-inter">
          {caption}
        </p>
      )}
    </div>
  );
};