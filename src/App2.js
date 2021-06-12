import React from 'react'
import {Canvas} from 'react-three-fiber'
import {OrbitControls} from 'drei'

import './App2.css'

function Box(){
  
  return(
    <mesh >
      
      <boxBufferGeometry attach="geometry" args={[2,2,2]} />
      <meshLambertMaterial attach="material"  color="#F4CE6A"/>
    </mesh>
    
  )
}

const App = () => {
  
  return (
    <>
      <Canvas>
    <OrbitControls enableZoom={false}/>
    <ambientLight intensity={0.3}/>
    <spotLight position={[10,15,10]} angle={0.5}/>
    <Box />
    </Canvas>
      
     
      
    </>
  )
}

export default App
