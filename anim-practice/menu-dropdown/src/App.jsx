import "./App.css"
import { useState } from "react";
import {motion} from "framer-motion"
export default function App(){
  const [open, setOpen] = useState(false)
  const itemList = [];
  for(let i = 1; i<=5; i++){
    itemList.push(`Item ${i}`)
  }
  const itemListDisplay = itemList.map((item, index) => (
    <li key={index}>
      {item}
    </li>
  ))
  return (
    <motion.div className='main-div'
      initial={open}
      animate={open? "open" : "closed"}
    >
      <button className='main-button' onClick={() => setOpen(!open)}
      
      >Menu
      <div className='svg-div'>
        <svg width="15" height="15" viewBox="0 0 20 20">
            <path d="M0 7 L 20 7 L 10 16" />
          </svg>
      </div>
      
      </button>

      <ul className={`item-list ${open? '' : 'none'}`}>
        {itemListDisplay}
      </ul>
    </motion.div>
  )
}