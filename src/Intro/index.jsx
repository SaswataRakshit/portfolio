import React, { useState } from "react";
import { Grid, Paper } from "@mui/material";
import ScrollAnimation from 'react-animate-on-scroll';
import { Intro, SvgDiv } from "./style";
import { Header } from "../shared/shared.style";
import backgroundImg from '../assets/images/vecteezy_gold-brush-stroke-for-design_9874689.png'
import Skills from "./skills";
import { useEffect } from "react";

const Introduction = ({ introRef }) => {
    const [showSkills, setShowSkills] = useState(false)

    useEffect(() => {
        let showSkillTime = setInterval(() => {
            if (!showSkills) {
                setShowSkills(true)
            }
        }, 3000)

        return () => {
            clearInterval(showSkillTime)
        }
    }, [])

    const afterLoad = () => {
        console.log('calledddd');
        setShowSkills(true)
    }

    return (
        <div ref={introRef}>
            <SvgDiv >
                <Intro container justifyContent={'center'} alignContent={'center'} spacing={3} style={{ margin: 10, width: '98vw' }}>
                    <Grid item lg={6} xs={8}>
                        <Paper style={{ padding: 20, marginLeft: 20 }}>
                            <Grid container>
                                <Grid item lg={6} xs={8} style={{ textAlign: 'center' }}>
                                    <ScrollAnimation animateIn="fadeIn" afterAnimatedIn={afterLoad}>
                                        <Header width={'250px'} top={'-8px'} left={'100px'} smallScreenLeft={'50px'}>
                                            <h1 className="heading">A Bit About Me</h1>
                                            <img src={backgroundImg} className="backgroundImg" />
                                        </Header>
                                        <p className="introduction">
                                            An innovative Web-Developer with <span className="bold">8 years</span> of experience based in Bangalore, India.
                                            Obtaining a challenging position as a <span className="bold">Senior Frontend Developer</span>, working with <span className="bold">Lowe's</span>.
                                        </p>
                                        <p className="introduction">I'm passionate about cutting-edge, pixel-perfect, beautiful interfaces and intuitively implemented UX.</p>
                                    </ScrollAnimation>
                                </Grid>
                                <Grid item lg={6} xs={4} style={{ textAlign: 'right' }}>
                                    <img src={require('../assets/images/porfolio2.png')} style={{ borderRadius: '5%' }} className="image" />
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                    <Grid item lg={6} xs={4}>
                        {showSkills &&
                            <Skills />
                        }
                    </Grid>
                </Intro>
                <div>
                    <svg className="waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                        viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
                        <defs>
                            <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
                        </defs>
                        <g className="parallax">
                            <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7" />
                            <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
                            <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
                            <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
                        </g>
                    </svg>
                </div>
            </SvgDiv>
            {/* <Grid container justifyContent={'center'} alignContent={'center'} style={{ height: 200 }} spacing={3}>
                <ToolKit />
            </Grid> */}
        </div>
    )
}

export default Introduction