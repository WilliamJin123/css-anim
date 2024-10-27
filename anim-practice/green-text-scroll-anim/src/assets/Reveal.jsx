import { useEffect, useState, useRef } from "react";
import { useAnimate, motion, useInView,  } from "framer-motion";

export default function Reveal({ children }) {

    const [scope, animate] = useAnimate();

    const viewRef = useRef(null);
    const isInView = useInView(viewRef, {threshold: 0.1, once:true});

    

    useEffect(() => {
        const animateElement = () => {
            if (isInView){
            animate(".reveal-green-box", {left:"200%"},{duration:0.6, delay: 0.1, ease:"easeIn"});
            animate(".reveal-animation", {opacity:1, y:0}, {duration: 0.5, delay: 0.25});
        }
        }
        animateElement();
    }, [isInView, animate])


    return (
        <div className="reveal" ref={scope}>
            <motion.div ref={viewRef}
                
                className="reveal-animation"
                initial={{
                    opacity: 0,
                    y:20,
                }}
                // whileInView={{opacity: 1, y: 0, }}
                // transition={{duration: 0.5, delay: 0.25}}
                // viewport={{once:true}}

            >
                {children}
            </motion.div>
            <motion.div className="reveal-green-box"
                initial={{left:0}}/>
        </div>

    )
}