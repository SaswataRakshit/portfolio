import { Grid } from "@mui/material";
import React from "react";
import Photo from "./photo";
import About from "./about";
import Navigation from "./navigation";

const Home = ({ handleClickIntro, handleClickTimeline, handleClickProject, handleClickContact, showNav }) => {
    return (
        <Grid container style={{ backgroundImage: 'linear-gradient(#cfcfcf, #cfcfcf, #dfdfdf, #e4e4e4, #fcfcfc, #ffffff)' }}>
            <Grid item lg={1}>
                {showNav &&
                    <Navigation handleClickIntro={handleClickIntro} handleClickTimeline={handleClickTimeline}
                        handleClickProject={handleClickProject} handleClickContact={handleClickContact} />
                }
            </Grid>
            <Grid item lg={4}
            //style={{ backgroundImage: 'linear-gradient(#cfcfcf, #cfcfcf, #dfdfdf, #e4e4e4, #fcfcfc)' }}
            >
                <Photo />
            </Grid>
            <Grid item lg={7} >
                <About />
            </Grid>
        </Grid>
    )
}

export default Home