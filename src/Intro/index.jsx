import React from "react";
import { Grid } from "@mui/material";
import ScrollAnimation from 'react-animate-on-scroll';
import { Intro } from "./style";

const Introduction = () => {
    return (
        <>
            <Intro container justifyContent={'center'} alignContent={'center'} style={{ marginTop: '10%' }} spacing={3}>
                <Grid item lg={2} />
                <Grid item lg={4} style={{ textAlign: 'center' }}>
                    <ScrollAnimation animateIn="fadeIn">
                        <h1>A Bit About Me</h1>
                        <p className="introduction">
                            An innovative Developer with <span className="bold"> 7 years </span> of experience based in India, harnessing software engineering and
                            information systems skills, delivering highly effective and creative solutions to business and
                            technology challenges. Through my good analytical and programming skills, I'm developing IT and
                            business solutions and employing highly diversified top-notch technologies to increase productivity.
                            Obtaining a challenging position as a <span className="bold"> Senior Frontend Developer </span>, working with <span className="bold"> Lowe's </span>,
                            with expertise on mainly Frontend technologies like <span className="bold"> React / Javascript </span>
                            and some Backend Technologies like <span className="bold"> Java / Springboot </span>.
                        </p>
                    </ScrollAnimation>
                </Grid>
                <Grid item lg={6}>
                    <img src={require('../images/porfolio2.png')} />
                </Grid>
            </Intro>
            <Grid container justifyContent={'center'} alignContent={'center'} style={{ height: 200 }} spacing={3}>
                <Grid item lg={2}>
                    React
                </Grid>
                <Grid item lg={2}>
                    Redux
                </Grid>
                <Grid item lg={2}>
                    Javascript
                </Grid>
                <Grid item lg={2}>
                    HTML
                </Grid>
                <Grid item lg={2}>
                    CSS
                </Grid>
            </Grid>
        </>
    )
}

export default Introduction