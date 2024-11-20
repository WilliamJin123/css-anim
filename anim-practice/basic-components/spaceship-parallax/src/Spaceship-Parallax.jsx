import "./Spaceship-Parallax.css"
import { SiSpacex } from "react-icons/si"
import { FiArrowRight } from "react-icons/fi"
import {motion, useScroll, useTransform, useMotionTemplate } from "motion/react"
export default function SpaceshipParallax() {

    return (
        <div className="main-div">
            <Nav />
            <Hero />
            
        </div>
    )
}

const Nav = () => (
    <nav className="navbar">
        <SiSpacex className="space-icon" />
        <button
            onClick={() => {
                document.getElementById("launch-schedule")?.scrollIntoView({
                    behavior: "smooth",
                });
            }}
            className="launch-btn">
            LAUNCH SCHEDULE <FiArrowRight />
        </button>
    </nav>
)

const SECTION_HEIGHT = 1500;

const Hero = () => (
    <div style={{ height: `calc(${SECTION_HEIGHT}px + 100vh)` }} className="hero-div">
        <CenterImg/>
        <div className="buffer-gradient"/>
    </div>
)

const CenterImg = () => {

    const {scrollY} = useScroll()

    const opacity = useTransform(
        scrollY,
        [SECTION_HEIGHT, SECTION_HEIGHT + 500],
        [1, 0]
      );

    const backgroundSize = useTransform(scrollY, [0, SECTION_HEIGHT + 500], ["150%", "100%"])
 
    const clip1 = useTransform(scrollY, [0, SECTION_HEIGHT], [25, 0]);
    const clip2 = useTransform(scrollY, [0, SECTION_HEIGHT], [75, 100]);
    const clipPath = useMotionTemplate`polygon(${clip1}% ${clip1}%, ${clip2}% ${clip1}%, ${clip2}% ${clip2}%, ${clip1}% ${clip2}%)`
    return (
        <motion.div className="center-img-div"
            style={{
                opacity,
                backgroundSize,
                clipPath,
                backgroundImage:
                    "url(https://images.unsplash.com/photo-1460186136353-977e9d6085a1?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        />
    )
}