import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF, SpotLight } from '@react-three/drei'
import CanvasLoader from '../Loader'
import { motion } from 'framer-motion'

const Earth = () => {
  const earth = useGLTF('./sign_in/scene.gltf')

  return (
    <mesh>
        {/* //Right-Left */}
      <SpotLight
        position={[-5, 0.1, 0.1]}
        angle={4}
        penumbra={1}
        intensity={5000}
        castShadow
        shadow-mapSize={200}
      />
       <SpotLight
        position={[5, 0.1, 0]}
        angle={160}
        penumbra={1}
        intensity={50}
        castShadow
        shadow-mapSize={200}
      />
      <SpotLight
        position={[2, 0, 5]}
        angle={160}
        penumbra={1}
        intensity={100}
        castShadow
        shadow-mapSize={200}
      />      
      <SpotLight
      position={[0, 0, -5]}
      angle={160}
      penumbra={1}
      intensity={100}
      castShadow
      shadow-mapSize={200}
    />
    {/* //FrontBack */}
    <SpotLight
        position={[0, 4, 3]}
        angle={160}
        penumbra={1}
        intensity={500}
        castShadow
        shadow-mapSize={200}
      />      
    <SpotLight
        position={[0, -3, 2.5]}
        angle={160}
        penumbra={1}
        intensity={500}
        castShadow
        shadow-mapSize={200}
      />      
      <primitive
        object={earth.scene}
        position={[0, 0, 0]}
        scale={0.125}
        position-y={-1.45}
      rotation-y={0}
      />
    </mesh>
  )
}

const SignInCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop='demand'
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 55,
        near: 0.5,
        far: 100,
        position: [5, 2, 0],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
      <OrbitControls
        autoRotate
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minAzimuthAngle={Math.PI / 2} />
      <Earth />
      </Suspense>
    </Canvas>
  )
}

export default SignInCanvas;