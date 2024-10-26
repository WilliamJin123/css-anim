import { useState } from "react";
import { useAnimate, motion } from "framer-motion";

export default function Body() {


    return (
        <div className="main">
            <div className="intro">
                <h1>Hey, I'm William <span className="green">.</span></h1>
                <h3>I'm a UWaterloo Student</h3>
                <p>I have literally done 0 projects. I want to learn UI / UX Design and Animations so I can make a sick personal portfolio website
                    even though I have no projects to put on it :&#40;&#40;&#40; I want to be able to have a decent array of projects done over the next 4ish months,
                    so that I won't get completely shafted during my coop application cycle
                </p>
                <button>Contact me</button>
            </div>
            <div className="body">
                <h1>About<span className="green">.</span> <span className="break"></span></h1>
                <div className="body-items">
                    <div className="paragraphs">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in ligula at risus ultrices vestibulum. Nunc pharetra lectus augue, a sagittis neque hendrerit sit amet. Pellentesque magna neque, sollicitudin id ultrices nec, fringilla eu elit. Vestibulum blandit eros at ipsum.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat nibh id egestas rutrum. Pellentesque a convallis nunc. Pellentesque ornare placerat metus, nec tempus tellus fermentum a. Nullam rhoncus, lorem vestibulum commodo placerat, tortor enim imperdiet lacus, sit amet maximu</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla in sagittis mauris. Cras blandit cursus orci nec scelerisque. Aenean vulputate urna eget elit lacinia vehicula. Curabitur dui quam, lacinia at neque id, rutrum porttitor massa. Pellentesque ac pellentesque neque, ut.</p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sagittis ornare arcu, quis vulputate nulla feugiat quis. Sed tincidunt eget urna id hendrerit. Sed lacinia dui a egestas semper. Nulla eu quam aliquet risus congue condimentum dapibus ut dolor. Proin.
                        </p>
                    </div>
                    <div className="lists">
                        <div className="list-grid">
                            <h4> <i className="fa-solid fa-briefcase"></i>Use for work</h4>
                            <span className="chip">TypeScript</span>
                            <span className="chip">JavaScript</span>
                            <span className="chip">HTML</span>
                            <span className="chip">CSS</span>
                            <span className="chip">React</span>
                            <span className="chip">Redux</span>
                            <span className="chip">NodeJS</span>
                            <span className="chip">Express</span>
                            <span className="chip">Postgres</span>
                            <span className="chip">MongoDB</span>
                            <span className="chip">GitHub</span>
                            <span className="chip">Jira</span>
                            <span className="chip">Heroku</span>
                            <span className="chip">AWS</span>
                        </div>
                        <div className="list-grid">
                            <h4> <i className="fa-solid fa-gamepad"></i>Use for fun</h4>
                            <span className="chip">Rust</span>
                            <span className="chip">Tailwind</span>
                            <span className="chip">Java</span>
                            <span className="chip">Spring</span>
                            <span className="chip">Figma</span>
                            <span className="chip">Whimsical</span>
                            <span className="chip">Planetscale</span>
                            <span className="chip">GraphQL</span>
                            <span className="chip">Python</span>
                            <span className="chip">FastAPI</span>
                        </div>
                    </div>
                    
                </div>
                <div className="links">
                        <h4>My Links:</h4>
                        <a href="https://github.com/WilliamJin123?tab=repositories"><i className="fa-brands fa-linkedin"></i></a>
                        <a href="https://github.com/WilliamJin123?tab=repositories"><i className="fa-brands fa-github"></i></a>
                        <a href="https://github.com/WilliamJin123?tab=repositories"><i className="fa-brands fa-square-youtube"></i></a>
                    </div>
            </div>
            <div className="projects">
                <h1><div className="break"></div> Projects<span className="green">.</span></h1>
                <div className="projects-grid">
                    <div className="project">
                        <img src={`https://picsum.photos/1000/1000?random=${Math.random()}`}></img>
                        <h3>Project X</h3>
                        <p>
                            <span className="green">Flutter - MUI - Python - FastAPI</span><br/>
                            A real-time coaching app for students learning to paint. This app is my baby, designed and built on my own.
                        </p>
                    </div>
                    <div className="project">
                        <img src={`https://picsum.photos/1000/1000?random=${Math.random()}`}></img>
                        <h3>Project X</h3>
                        <p>
                            <span className="green">Flutter - MUI - Python - FastAPI</span><br/>
                            A real-time coaching app for students learning to paint. This app is my baby, designed and built on my own.
                        </p>
                    </div>
                    <div className="project">
                        <img src={`https://picsum.photos/1000/1000?random=${Math.random()}`}></img>
                        <h3>Project X</h3>
                        <p>
                            <span className="green">Flutter - MUI - Python - FastAPI</span><br/>
                            A real-time coaching app for students learning to paint. This app is my baby, designed and built on my own.
                        </p>
                    </div>
                    <div className="project">
                        <img src={`https://picsum.photos/1000/1000?random=${Math.random()}`}></img>
                        <h3>Project X</h3>
                        <p>
                            <span className="green">Flutter - MUI - Python - FastAPI</span><br/>
                            A real-time coaching app for students learning to paint. This app is my baby, designed and built on my own.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}