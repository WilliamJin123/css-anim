import './App.css'
import { useEffect, useState } from 'react'
import { useAnimate } from 'framer-motion'

export const Component = () => {

}

export default function App() {
  const [scope, animate] = useAnimate();


  async function handleAnimate() {
    await animate("#target", {
      x:150,
    })
    await animate("#target", {
      y:150, 
      rotate:"360deg",
      

    },
    {
      duration: 1.5,

    })
    await animate(".button", {rotate:"360deg"})

    
    await Promise.all(
      [animate("#target", {x:0,y:0,rotate:0,})],
      [animate(".button", {rotate:0})])
    
  }

  useEffect(() => {
    handleAnimate()
  }, [])
  return(
    <div className='main' ref={scope} >
      <div id="target" className="purple center"></div>
      <button 
      onClick={handleAnimate}
      className='button'>Trigger Animation</button>
    </div>
  )
}