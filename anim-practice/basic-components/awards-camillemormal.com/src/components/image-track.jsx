import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform, useAnimate} from "framer-motion";


const imgList = []
for (let i = 0; i < 8; i++) {
    imgList.push(`../../public/img-${i+1}.jpg`)
}

export default function Track() {


    const divRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: divRef });
    const [scope, animate] = useAnimate();
    const [trackX, setTrackX] = useState(null);
    const [imageX, setImageX] = useState(null);
    // const scrollPercent = useRef(null);

    // useEffect(() => {
    //     const updateScrollPercent = () => {
    //         if (divRef.current) {
    //             let scrollWidth = divRef.current.scrollWidth;
    //             let vwWidth = window.innerWidth * 0.5 - window.innerHeight * 0.16;
    //             let percentage = (vwWidth / scrollWidth) * 100;
    //             scrollPercent.current = percentage / 2;
    //         }
    //     };

    //     updateScrollPercent(); 
        
    // }, []);
    const transformX = useTransform(scrollYProgress, [0, 1], [`21.3%`, `-67.1%`]);
    const transformImgX = useTransform(scrollYProgress, [0, 1], [`100%`, `0%`]);
    
    const [height, setHeight] = useState('auto');
    const [opacity, setOpacity] = useState(0);
    useEffect(() => {
        setTrackX(transformX);
        setImageX(transformImgX);
        console.log("changes occuring");
        
       
    }, [transformX, transformImgX])

    // useEffect(()=>{
    //     animate(".img-list", {x:`${transformX}`}, {duration:0.12, ease:'easeInOut'})
    //     console.log("play anim")
    // }, [scrollYProgress, animate])

    useEffect(() => {
        const updateHeight = () => {
            if (divRef.current) {
                const width = divRef.current.scrollWidth;
                setHeight(`${width*5}px`)
                setOpacity(1)
            }   
        }
        updateHeight();
        window.addEventListener('resize', updateHeight)
        
        return () => window.removeEventListener('resize', updateHeight)
    })


    return (
        <div className="img-track-div" ref={divRef} style={{ height, width: '100%',}}>
            <div className="img-track" ref={scope}>
                <motion.ul className="img-list" initial={{x:'21.3%'}} style={{x:trackX}}
                >
                    {imgList.map((image, index) => (
                        <li key={index} ><motion.img layout src={image} style={{objectPosition:imageX, opacity }}
                        /></li>
                    ))}
                </motion.ul>

            </div>
        </div>
    )



}