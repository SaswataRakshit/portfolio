import { Grid } from "@mui/material";
import styled from "styled-components";

export const Intro = styled(Grid)` 
height: calc(100vh - 200px);

h1 {
   font-family: 'Montserrat', sans-serif; 
}

.introduction {
    font-family: 'Bricolage Grotesque', sans-serif;
    font-size: 16px;
    text-align: justify !important;
    text-justify: inter-word;

}

.bold {
   font-family: 'Bricolage Grotesque', sans-serif;
   font-size: 22px;
   font-weight: 600; 
}
`