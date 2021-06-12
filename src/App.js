import React,{useRef,useState} from 'react'
import {Canvas,useFrame} from 'react-three-fiber'
import {OrbitControls} from 'drei'

import './App.css'

function Box({position}){
  const ref=useRef()
  useFrame(() => (ref.current.rotation.y += 0.01))
 
  return(
    <mesh position={position} ref={ref}>
      
      <boxBufferGeometry attach="geometry" args={[2.3,2.3,2.3]} />
      <meshLambertMaterial attach="material"  color="#F4CE6A"/>
    </mesh>
    
  )
}
function Canva(){
  return(
    <Canvas>
    <OrbitControls enableZoom={false}/>
    <ambientLight intensity={0.3}/>
    <spotLight position={[10,15,10]} angle={0.5}/>
    <Box position={[0,0,0]}/>
    </Canvas>
  )
}

const App = () => {
  const [option,setOption]=useState('Choose a Box');
  const [display,setDisplay]=useState('');
  const [clear,setClear]=useState('');
  const gifts=['Richard Millie','Jordan University Red','Nokia 7','Netflix Subscription','Equinox 1 Year','Cartier','Chuck Taylor','Rick Owens','10$','Disneyland','Trip to mars','Africa Safari']
  const revealGift=()=>{
        if(option==='Choose a Box')
        setDisplay('Must choose before reveal');
        if(option==='Box 1')
        setDisplay(gifts[0]);
        if(option==='Box 2')
        setDisplay(gifts[1]);
        if(option==='Box 3')
        setDisplay(gifts[2]);  
        if(option==='Box 4')
        setDisplay(gifts[3]);
        if(option==='Box 5')
        setDisplay(gifts[4]);
        if(option==='Box 6')
        setDisplay(gifts[5]);
        if(option==='Box 7')
        setDisplay(gifts[6]);
        if(option==='Box 8')
        setDisplay(gifts[7]);
        if(option==='Box 9')
        setDisplay(gifts[8]);
        if(option==='Box 10')
        setDisplay(gifts[9]);
        if(option==='Box 11')
        setDisplay(gifts[10]);
        if(option==='Box 12')
        setDisplay(gifts[11]);
      }
  const payment=()=>{
    setDisplay('');
    setClear('Thanks for shopping');
  }
  const retry=()=>{
    setOption('Choose again');
    setDisplay('');
  }
  return (
    <>
      <div id="head">
      <h1>Choose a Box</h1>
      </div>
      <div className="container">
      <div className="grid">
      <div className="dir">
      <div className="box" onClick={()=>setOption('Box 1')}><Canva/></div>
      <div className="box" onClick={()=>setOption('Box 2')}><Canva/></div>
      <div className="box" onClick={()=>setOption('Box 3')}><Canva/></div>
      <div className="box" onClick={()=>setOption('Box 4')}><Canva/></div>
      </div>
      <div className="dir">
      <div className="box" onClick={()=>setOption('Box 5')}><Canva/></div>
      <div className="box" onClick={()=>setOption('Box 6')}><Canva/></div>
      <div className="box" onClick={()=>setOption('Box 7')}><Canva/></div>
      <div className="box" onClick={()=>setOption('Box 8')}><Canva/></div>
      </div>
      <div className="dir">
      <div className="box" onClick={()=>setOption('Box 8')}><Canva/></div>
      <div className="box" onClick={()=>setOption('Box 10')}><Canva/></div>
      <div className="box" onClick={()=>setOption('Box 11')}><Canva/></div>
      <div className="box" onClick={()=>setOption('Box 12')}><Canva/></div>
      </div>
      </div>
      
      <div className="side">
      <h1>{option}</h1>
      <div className="buttons">
      <button className="confirm" onClick={revealGift}>Reveal now for 20$</button>
      <button className="confirm" onClick={retry}>Retry</button>
      <button className="confirm" onClick={payment}>Checkout</button>
      </div>
      <h1>{display}</h1>
      <h1>{clear}</h1>
      </div>
      </div>
      
    </>
  )
}

export default App
