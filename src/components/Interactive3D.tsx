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

  // Create cubic diamond lattice structure
  // Diamond cubic consists of two interpenetrating FCC lattices
  const latticePoints: [number, number, number][] = [];
  const bonds: [[number, number, number], [number, number, number]][] = [];
  const a = 1.2; // Lattice parameter
  
  // Generate diamond cubic lattice points
  for (let i = -1; i <= 1; i++) {
    for (let j = -1; j <= 1; j++) {
      for (let k = -1; k <= 1; k++) {
        // First FCC lattice (origin positions)
        const fcc1: [number, number, number][] = [
          [i * a, j * a, k * a],
          [(i + 0.5) * a, (j + 0.5) * a, k * a],
          [(i + 0.5) * a, j * a, (k + 0.5) * a],
          [i * a, (j + 0.5) * a, (k + 0.5) * a]
        ];
        
        // Second FCC lattice (offset by 1/4 body diagonal)
        const offset = a * 0.25;
        const fcc2: [number, number, number][] = fcc1.map(([x, y, z]) => [
          x + offset, y + offset, z + offset
        ] as [number, number, number]);
        
        latticePoints.push(...fcc1, ...fcc2);
        
        // Create tetrahedral bonds for diamond structure
        fcc1.forEach((point1) => {
          fcc2.forEach((point2) => {
            const distance = Math.sqrt(
              Math.pow(point1[0] - point2[0], 2) +
              Math.pow(point1[1] - point2[1], 2) +
              Math.pow(point1[2] - point2[2], 2)
            );
            // Bond if atoms are nearest neighbors (tetrahedral coordination)
            if (distance < a * 0.5) {
              bonds.push([point1, point2]);
            }
          });
        });
      }
    }
  }

  return (
    <group ref={meshRef}>
      {/* Lattice atoms */}
      {latticePoints.map((point, index) => (
        <mesh key={`atom-${index}`} position={point}>
          <sphereGeometry args={[0.08]} />
          <meshPhongMaterial 
            color={index % 8 < 4 ? "hsl(214, 70%, 60%)" : "hsl(200, 70%, 70%)"}
            transparent
            opacity={0.9}
          />
        </mesh>
      ))}
      
      {/* Tetrahedral bonds */}
      {bonds.slice(0, 60).map((bond, index) => {
        const [start, end] = bond;
        const midpoint: [number, number, number] = [
          (start[0] + end[0]) / 2,
          (start[1] + end[1]) / 2,
          (start[2] + end[2]) / 2
        ];
        const length = Math.sqrt(
          Math.pow(end[0] - start[0], 2) +
          Math.pow(end[1] - start[1], 2) +
          Math.pow(end[2] - start[2], 2)
        );
        
        return (
          <mesh key={`bond-${index}`} position={midpoint}>
            <cylinderGeometry args={[0.03, 0.03, length]} />
            <meshBasicMaterial 
              color="hsl(214, 80%, 50%)" 
              transparent 
              opacity={0.6} 
            />
          </mesh>
        );
      })}
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