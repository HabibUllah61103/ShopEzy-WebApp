import { Suspense,useState, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF, SpotLight } from '@react-three/drei'
import CanvasLoader from '../Loader'
import { motion } from 'framer-motion'

const Earth = () => {
  const earth = useGLTF('./sign_up/scene.gltf')

  return (
    <mesh>
      <SpotLight
        position={[-5, 0.1, 0]}
        angle={165}
        penumbra={1}
        intensity={100}
        castShadow
        shadow-mapSize={200}
      />
       <SpotLight
        position={[5, 0.1, 0]}
        angle={160}
        penumbra={1}
        intensity={100}
        castShadow
        shadow-mapSize={200}
      />
      <SpotLight
        position={[0, 0.5, 5]}
        angle={160}
        penumbra={1}
        intensity={100}
        castShadow
        shadow-mapSize={200}
      />      
      <SpotLight
      position={[0, 0.5, -5]}
      angle={160}
      penumbra={1}
      intensity={100}
      castShadow
      shadow-mapSize={200}
    />
      <primitive
        object={earth.scene}
        position={[0, 0, 0]}
        scale={10}
        position-y={-0.85}
      rotation-y={0}
      />
    </mesh>
  )
}

const SignUpCanvas = () => {
  const [ ismobile,setIsmobile ] = useState(false);

  
  //comment this out if you don't want the canvas to be responsive
  //this is a media query for mobile devices
useEffect(() => {
  //add a listener to the media query
  const mediaQuery = window.matchMedia('(max-width: 500px)');

  //set the initial state
  setIsmobile(mediaQuery.matches);

  //create a function to handle the change
  const handleMediaQueryChange = (event) => {
    setIsmobile(event.matches);
  }
  //add the listener to the media query
  mediaQuery.addEventListener('change', handleMediaQueryChange);

  //this will clean up the event every time the component is re-rendered
  return () => {
    mediaQuery.removeEventListener('change', handleMediaQueryChange);
  }
}, [])
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
      <Suspense fallback={<CanvasLoader />} >
      <OrbitControls
        autoRotate
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minAzimuthAngle={Math.PI / 2} />
      <Earth />
      </Suspense>
      <Preload all />
    </Canvas>
  )
}

export default SignUpCanvas;