import { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, SpotLight, meshBounds, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader';

const Computers = ({ ismobile }) => {
  const computer = useGLTF('./desktop_pc/scene.gltf');
  return (
    <mesh>
      <hemisphereLight intensity={0.85} groundColor='black' />
      <pointLight intensity={4} position={[0,0,1]} />
      <primitive
        object={computer.scene}
        scale={ ismobile ? 17  :  35}
        position={ ismobile ? [0,-1.45,0] : [-1.5, -1.49, 0.5]}
        rotation={[-0.9, 0.8, 2]}/>
      <SpotLight
        position={[-20, 50, 10]}
        angle={0.22}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
    </mesh>
  )
}

const ComputersCanvas = () => {
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
    <Canvas frameloop='demand'
      shadows
      camera={{ position: [15, 0, 15], fov: 23 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI/2}
          minPolarAngle={Math.PI/2}
        />
        <Computers ismobile={ismobile}/>
      </Suspense>
      <Preload all />
    </Canvas>
  )
}

export default ComputersCanvas