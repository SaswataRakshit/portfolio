import React from "react";
import { Grid, Paper } from "@mui/material";
import ScrollAnimation from 'react-animate-on-scroll';
import { Intro } from "./style";
import ToolKit from "./toolkit";

const Introduction = () => {
    return (
        <>
            <Intro container justifyContent={'center'} alignContent={'center'} style={{ marginTop: '10%' }} spacing={3}>
                <Paper style={{ width: '50%', padding: 20 }}>
                    <Grid container>
                        {/* <Grid item lg={2} /> */}
                        <Grid item lg={6} style={{ textAlign: 'center' }}>
                            <ScrollAnimation animateIn="fadeIn">
                                <h1>A Bit About Me</h1>
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
            <ToolKit />
            {/* <Grid container justifyContent={'center'} alignContent={'center'} style={{ height: 200 }} spacing={3}>
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
            </Grid> */}
        </>
    )
}

export default Introduction