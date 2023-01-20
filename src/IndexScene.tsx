import { Stage, ContactShadows, AccumulativeShadows, Backdrop, RandomizedLight, Sphere, Sky, useTexture, useGLTF, OrbitControls, Environment, Plane, PerspectiveCamera, GradientTexture, MeshReflectorMaterial } from "@react-three/drei";

import { Ape_Animation } from "./assets/BoredApe_Animations";
import { Ape_NoAnimation } from "./assets/BoredApe_NoAnimations";
import * as THREE from "three";

import { useRef } from "react";

import { EffectComposer, Bloom, Noise, DepthOfField } from '@react-three/postprocessing'

export default function IndexScene(){
    
    /**
 * Loaders
 */
// Texture loadern

    // const controls = useControls({ position: - 2 })
    // console.log(controls.position)
    return (
      <>
      
      {/* Orbit Controls ==================================== */}

      <OrbitControls />       

      {/* Environment ====================================== */}

      <mesh>
        <Environment preset="warehouse" background />   
      </mesh>

      {/* Lights =========================================== */}
     
       <spotLight position={[10, 10, 10]} angle={0.15} penumbra={.5} shadow-mapSize={[512, 512]} castShadow />
       <ContactShadows position={[0, -1.4, 0]} opacity={0.75} scale={10} blur={2.5} far={4} />
       <pointLight position={[-10, 0, -20]} color="white" intensity={1} />
       <pointLight position={[0, -10, 0]} intensity={1} />

       <ambientLight intensity={0.5} />

       {/* Backdrop Scene  ================================= */}

       <Backdrop receiveShadow castShadow floor={2} position={[0, 0, -2]} scale={[50, 10, 4]}>
        <meshStandardMaterial color="#353540" envMapIntensity={0.1} />
       </Backdrop>

      {/* Postprocessing =================================== */}
       <EffectComposer disableNormalPass>
        {/* <Bloom luminanceThreshold={0} mipmapBlur luminanceSmoothing={0.0} intensity={2} /> */}
        {/* <DepthOfField focusDistance={0} focalLength={0.02} bokehScale={2} height={480} /> */}
        <Noise opacity={0.025} />
       </EffectComposer>

      {/* Area Light - Not in use  ========================= */}

      {/* <rectAreaLight args={['white', 3]} width={5} height={5} position={[-3, 4, 1]}  visible={false} /> */}
   
      {/* Models =========================================== */}
       
       <Ape_NoAnimation position={[0, .01, 0]} scale={2}/> 
    
      
      
      </>
    );
}