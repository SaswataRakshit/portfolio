import React from "react";
import { Grid, Paper } from "@mui/material";
import ScrollAnimation from 'react-animate-on-scroll';
import { Intro, SvgDiv } from "./style";
import ToolKit from "./toolkit";

const Introduction = () => {
    return (
        <>
            <SvgDiv>
                <Intro container justifyContent={'center'} alignContent={'center'} style={{ marginTop: '10%' }} spacing={3}>
                    <Paper style={{ width: '50%', padding: 20 }}>
                        <Grid container>
                            <Grid item lg={6} style={{ textAlign: 'center' }}>
                                <ScrollAnimation animateIn="fadeIn">
                                    <h1 className="aboutMe">A Bit About Me</h1>
                                    <p className="introduction">
                                        An innovative Web-Developer with <span className="bold">7 years</span> of experience based in Bangalore, India.
                                        Obtaining a challenging position as a <span className="bold">Senior Frontend Developer</span>, working with <span className="bold">Lowe's</span>.
                                    </p>
                                    <p className="introduction">I'm passionate about cutting-edge, pixel-perfect, beautiful interfaces and intuitively implemented UX.</p>
                                </ScrollAnimation>
                            </Grid>
                            <Grid item lg={6} style={{ textAlign: 'right' }}>
                                <img src={require('../images/porfolio2.png')} style={{ borderRadius: '5%' }} />
                            </Grid>
                        </Grid>
                    </Paper>
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
            <Grid container justifyContent={'center'} alignContent={'center'} style={{ height: 200 }} spacing={3}>
                <ToolKit />
            </Grid>
        </>
    )
}

export default Introduction