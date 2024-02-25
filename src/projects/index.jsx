import React from "react";
import laptop from '../assets/images/laptp.png'
import ProjectCards from "./projectCards";

const Projects = ({ projectRef }) => {
    return (
        <div style={{ marginTop: '-60%', position: 'relative' }} ref={projectRef}>
            <img src={laptop} style={{ width: '98vw' }} />
            <ProjectCards />
        </div>
    )
}

export default Projects;