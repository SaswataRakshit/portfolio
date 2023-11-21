import { Grid } from "@mui/material";
import styled from "styled-components";

export const Intro = styled(Grid)` 
height: calc(100vh - 200px);

h1 {
   //font-family: 'Space Grotesk', sans-serif;
   font-family: 'Bricolage Grotesque', sans-serif;
}

.introduction {
   //  font-family: 'Bricolage Grotesque', sans-serif;
   font-family: 'Patrick Hand', cursive;
   //font-family: 'Palanquin', sans-serif;
   //font-family: 'Lora', serif;
    font-size: 22px;
    text-align: justify !important;
    text-justify: inter-word;
    color: #696969;

}

.bold {
   //font-family: 'Bricolage Grotesque', sans-serif;
   font-family: 'Patrick Hand', cursive;
   //font-family: 'Palanquin', sans-serif;
   //font-family: 'Nanum Pen Script', cursive;
   //font-family: 'Lora', serif;
   font-size: 23px;
   font-weight: 600;
   color: #696969; 
}

img {
   --b: 8px;  /* border thickness*/
   --s: 60px; /* size of the corner*/
   --g: 14px; /* the gap*/
   --c: #EDC951;
  
   padding: calc(var(--b) + var(--g));
   background-image:
     conic-gradient(from  90deg at top    var(--b) left  var(--b),#0000 25%,var(--c) 0),
     conic-gradient(from -90deg at bottom var(--b) right var(--b),#0000 25%,var(--c) 0);
   background-position:
     var(--_p,0%) var(--_p,0%),
     calc(100% - var(--_p,0%)) calc(100% - var(--_p,0%));
   background-size: var(--s) var(--s);
   background-repeat: no-repeat;
   cursor: pointer;
   transition:
     background-position .3s var(--_i,.3s),
     background-size .3s calc(.3s - var(--_i,.3s));
 }
 img.alt {
   background-image:
     conic-gradient(from 180deg at top    var(--b) right var(--b),#0000 25%,var(--c) 0),
     conic-gradient(from   0deg at bottom var(--b) left  var(--b),#0000 25%,var(--c) 0);
   background-position:
     calc(100% - var(--_p,0%)) var(--_p,0%),
     var(--_p,0%) calc(100% - var(--_p,0%));
 }
 img:hover {
   background-size: calc(100% - var(--g)) calc(100% - var(--g));
   --_p: calc(var(--g)/2);
   --_i: 0s;
 }
`