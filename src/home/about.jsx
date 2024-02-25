import React from "react";

import { AboutDiv } from './style'

const About = () => {
    return (
        <AboutDiv>
            <h1 className="intro">Hi, I'm <span className="gradient-text">Saswata Rakshit.</span></h1>
            <h4 aria-label="I'm a developer">
                I'm a&nbsp;<span className="typewriter"></span>
            </h4>
        </AboutDiv>
    )
}

export default About