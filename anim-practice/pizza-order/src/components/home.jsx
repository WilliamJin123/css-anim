import { Link } from "react-router-dom"
import { motion } from "framer-motion";
export default function Home(){
    return(
        <div className="home page">
            <motion.h2
                initial={{
                    opacity:0.3,
                    color:'var(--red)',
                    rotateY:180,
                }}
                animate={{
                    scale:2,
                    color:'var(--white)',
                    opacity: 1,
                    rotateY:0,
                }}
                transition={{
                    duration:1,
                    ease: [0.2, 0.79, 0.59, 0.95],
                    delay:0.1,
                }}
            >Welcome to the Pizza Joint </motion.h2>
            <Link to="/base">
                <motion.button
                    initial={{
                        opacity:0
                    }}
                    animate={{
                        scale:1.25,
                        transition:{
                            duration:1,
                            ease: [0.2, 0.79, 0.59, 0.95],
                            delay:0.1,
                        },
                        opacity:0.7
                    }}
                    
                    whileHover={{
                        y:-10,
                        backgroundColor:'var(--white)',
                        color:'#58066F',
                        transition:{
                            duration: 0.3,
                            ease:'easeInOut',
                        }
                    }}
                    
                    
                >
                    Create Your Pizza
                </motion.button>
            </Link>
        </div>
    )
}