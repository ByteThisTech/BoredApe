
import { Canvas } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import { Suspense } from 'react';
import './App.css'
import IndexScene  from './IndexScene';
export default function App() {
 
  return (
    
     <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 4], fov: 50 }}>
        <Suspense fallback={null}>
            <IndexScene />
        </Suspense>
        
      </Canvas>
   

  )
}