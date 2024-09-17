import React from "react";
import ProjectsList from "../components/ProjectsList"

function Projects() {
    return ( 
        <>
        <nav>
            <h2 className='logo'>FELIX <span>JOHN</span></h2>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/projects">Projects</a></li>
                <li><a href="/services">Services</a></li>
            </ul>
            <button className='btn'>Contact me</button>
        </nav>
        <ProjectsList/>
        </>
     );
}

export default Projects;