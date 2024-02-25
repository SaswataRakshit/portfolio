import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Grid, Paper } from "@mui/material";
import medium from '../assets/images/medium.svg'

const SocialContact = () => {
    return (
        <Grid container justifyContent={'center'} alignContent={'center'} style={{ position: 'absolute', top: 0 }} spacing={5}>
            <Grid item ls={6} className="gridBorder">
                <div id="connect">
                    <h1>Let's Connect</h1>
                    <p>I'm always open to a virtual coffee — especially regarding freelance work or with
                        underrepresented folks in tech looking for early career guidance.  you can find me on social media or you can send me a message here!</p>
                </div>
                <div id="iconList">
                    <a href="https://www.linkedin.com/in/saswata-rakshit-8b658115b/" className="iconLink"><FontAwesomeIcon icon="fa-brands fa-linkedin" className="icons" /></a>
                    <a href="https://github.com/SaswataRakshit" className="iconLink"><FontAwesomeIcon icon="fa-brands fa-github" className="icons" /></a>
                    <a href="https://medium.com/@saswatarakshit30" className="iconLink"><img src={medium} className="icons" /></a>
                </div>
            </Grid>
            <Grid item ls={6}>
                <div className="container">
                    <div className="front side">
                        <div class="content">
                            <div className="cardheading">
                                <h1>Saswata Rakshit</h1>
                                <h5>( Senior Frontend Developer )</h5>
                            </div>
                            <p><FontAwesomeIcon icon="fa-solid fa-envelope" /> <a href="mailto:saswatarakshit30@gmail.com">saswatarakshit30@gmail.com</a></p>
                            <p><FontAwesomeIcon icon="fa-solid fa-mobile-screen" /> +91 7205250441</p>
                            <p><FontAwesomeIcon icon="fa-solid fa-address-card" /> Bangalore, India</p>
                        </div>
                    </div>
                    <div className="back side">
                        <div className="content">
                            <h1>Contact Me</h1>

                        </div>
                    </div>
                </div>
            </Grid>
        </Grid>
    )
}

export default SocialContact;