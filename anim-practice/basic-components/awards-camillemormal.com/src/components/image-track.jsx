import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform, useAnimate } from "framer-motion";


const imgList = []
for (let i = 0; i < 8; i++) {
    imgList.push(`../../public/img-${i + 1}.jpg`)
}

export default function Track() {


    const divRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: divRef });
    const [scope, animate] = useAnimate();
    const [trackX, setTrackX] = useState("21.3%");
    const [imageX, setImageX] = useState("100%");
    const [isPanning, setIsPanning] = useState(false);
    const viewProgress = useRef(scrollYProgress);

    const lastScrollY = useRef(scrollYProgress.get());
    const scrollPercent = useRef(null);

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
        if (!isPanning) {
            lastScrollY.current = scrollYProgress.get();
            setTrackX(transformX);
            setImageX(transformImgX);
            console.log("changes occuring");
        }



    }, [scrollYProgress, isPanning])

    // useEffect(()=>{
    //     animate(".img-list", {x:`${transformX}`}, {duration:0.12, ease:'easeInOut'})
    //     console.log("play anim")
    // }, [scrollYProgress, animate])

    useEffect(() => {
        const updateHeight = () => {
            if (divRef.current) {
                const width = divRef.current.scrollWidth;
                setHeight(`${width * 5}px`)
                setOpacity(1)
            }
        }
        updateHeight();
        window.addEventListener('resize', updateHeight)

        return () => window.removeEventListener('resize', updateHeight)
    }, [])


    function handlePanStart() {
        setIsPanning(true)
        console.log("panning start")
    }
    function handlePanEnd(event, panInfo) {
        let panWidth = window.innerWidth / 2;
        let offset = Math.max(Math.min(100, panInfo.offset.x / panWidth * 100), -100)
        let scrollableHeight = divRef.current.scrollHeight - window.innerHeight;
        let newProgress = Math.max(0, Math.min(1, (lastScrollY.current + offset / 100)));
        window.scrollTo(0, newProgress*scrollableHeight);
        console.log("panning end")
        setIsPanning(false)
    }
    function handlePan(event, panInfo) {
        if (!isPanning) return;
        let panWidth = window.innerWidth / 2;
        let offset = Math.max(Math.min(100, panInfo.offset.x / panWidth * 100), -100)
        let baseTrackX = 21.3 + ((-88.4) * lastScrollY.current);
        let baseImageX = 100 - (100 * lastScrollY.current);
        let newTrackX = Math.max(-67.1, Math.min(21.3, baseTrackX + offset*0.882))
        let newImageX = Math.max(0, Math.min(100, baseImageX + offset))
        setTrackX(`${newTrackX}%`);
        setImageX(`${newImageX}%`);

        
    }

    return (
        <motion.div className="img-track-div" ref={divRef} style={{ height, width: '100%', }} onPanStart={handlePanStart}
            onPan={handlePan}
            onPanEnd={handlePanEnd}>
            <div className="img-track" ref={scope}>
                <motion.ul className="img-list" initial={{ x: '21.3%' }} style={{ x: trackX }} 
                    transition={{
                        type: "tween",
                        ease: "linear",
                        duration: 0
                    }}
                >
                    {imgList.map((image, index) => (
                        <li key={index} ><motion.img layout src={image} style={{ objectPosition: imageX, opacity }} 
                        transition={{
                            type: "tween",
                            ease: "linear",
                            duration: 0
                        }}
                        /></li>
                    ))}
                </motion.ul>

            </div>
        </motion.div>
    )



}