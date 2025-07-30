// src/components/ModelViewer.jsx
'use client'; // This directive indicates that this component should be rendered on the client-side.

import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { useGLTF, OrbitControls, Environment } from '@react-three/drei';

// This component will load and display your GLB model
function Model({ modelPath }) {
  const { scene } = useGLTF(modelPath);
  return <primitive object={scene} scale={1} />; // Adjust scale as needed
}

export default function ModelViewer({ modelPath, width = '100%', height = '500px' }) {
  return (
    <div style={{ width: width, height: height, background: '#f0f0f0', borderRadius: '8px', overflow: 'hidden' }}>
      <Canvas
        camera={{ position: [0, 0, 3], fov: 75 }} // Initial camera position and field of view
        gl={{ antialias: true }} // Smooth edges
      >
        <Suspense fallback={null}> {/* Fallback while model is loading */}
          <ambientLight intensity={0.5} /> {/* General ambient light */}
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={1} /> {/* Spot light */}
          <pointLight position={[-10, -10, -10]} decay={0} intensity={0.8} /> {/* Point light */}

          {/* Optional: Add an environment map for better lighting/reflections */}
          <Environment preset="city" /> {/* Or 'dawn', 'sunset', 'night', 'warehouse', etc. */}

          <Model modelPath={modelPath} />

          {/* OrbitControls allows users to drag, zoom, and pan the camera */}
          <OrbitControls enableZoom={true} enablePan={true} enableRotate={true} />
        </Suspense>
      </Canvas>
    </div>
  );
}