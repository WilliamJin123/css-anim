import './App.css'
import { motion, useInView} from 'framer-motion'
import { useEffect } from 'react'
import { useRef } from 'react'

export default function App() {

  const ref = useRef(null)
  const isInView = useInView(ref)

  
  return(
    <div className="main">
      <motion.div className='box black'
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:1}}
      >

      </motion.div>

      <motion.div className='box red' ref={ref} style={{background:isInView?'blue': 'red'}} 
        transition={{duration:1}}
      
      >
      </motion.div>
    </div>
  )
}