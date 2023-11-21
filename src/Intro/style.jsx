import { Grid } from "@mui/material";
import styled from "styled-components";

export const Intro = styled(Grid)` 
height: calc(100vh - 200px);

h1 {
   font-family: 'Bricolage Grotesque', sans-serif;
   font-size: 24px;
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

export const ToolkitDiv = styled.div`

.three h1 {
  font-family: 'Bricolage Grotesque', sans-serif;
  font-size: 28px;
  font-weight: 500;
  letter-spacing: 0;
  line-height: 1.5em;
  padding-bottom: 15px;
  position: relative;
}
.three h1:before {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  height: 5px;
  width: 55px;
  background-color: #111;
}
.three h1:after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 2px;
  height: 1px;
  width: 95%;
  max-width: 255px;
  background-color: #333;
}
// header {
//   width: 100%;
//   display: inline-block;
//   flex-direction: column;
//   align-items: center;
// }
// header h1 {
//   // position: relative;
//   // left: 10%;
//   // width: 90%;
//   font-size: 60px;
//   font-weight: 600;
//   color: transparent;
//   -webkit-background-clip: text;
//   background-clip: text;   
//   font-family: 'Bricolage Grotesque', sans-serif;
//   font-size: 24px;
// }
// header .header-1{
//   background-image: repeating-radial-gradient(closest-side at 20px 20px,#553c9a, #ee4b2b, #553c9a);
// }
// h1 {
//   font-family: 'Bricolage Grotesque', sans-serif;
//   font-size: 24px;
//   background-image: repeating-radial-gradient(closest-side at 20px 20px,#553c9a, #ee4b2b, #553c9a);
// }

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333333;
}

li {
  float: left;
  text-align: center;
}

li:not(:first-child) {
  margin-left: 100px;
}

p {
  font-family: 'Nanum Pen Script', cursive;
  font-size: 25px;
  margin: 5px 0px;
}

`