import { Grid } from "@mui/material";
import styled from "styled-components";
import backgroundImg from '../images/vecteezy_gold-brush-stroke-for-design_9874689.png'
import img from '../images/New_Portfolio-1.png'

export const Intro = styled(Grid)` 
height: calc(100vh - 200px);

.aboutMe {
   font-family: 'Bricolage Grotesque', sans-serif;
   font-size: 24px;
}

.introduction {
   font-family: 'Patrick Hand', cursive;
    font-size: 22px;
    text-align: justify !important;
    text-justify: inter-word;
    color: #696969;

}

.bold {
   font-family: 'Patrick Hand', cursive;
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

// .three h1 {
//   font-family: 'Bricolage Grotesque', sans-serif;
//   font-size: 28px;
//   font-weight: 500;
//   letter-spacing: 0;
//   line-height: 1.5em;
//   padding-bottom: 15px;
//   position: relative;
// }
// .three h1:before {
//   content: "";
//   position: absolute;
//   left: 0;
//   bottom: 0;
//   height: 5px;
//   width: 55px;
//   background-color: #111;
// }
// .three h1:after {
//   content: "";
//   position: absolute;
//   left: 0;
//   bottom: 2px;
//   height: 1px;
//   width: 95%;
//   max-width: 255px;
//   background-color: #333;
// }
// h1 {
//   position: relative;
//   background-image: url(${backgroundImg});
// }

// h1::after{
//   content: "";
//   position: absolute;
//   background-image: url(${backgroundImg});
//   opacity: 30;
//     // background-color: #F0F8FF;
//     // -webkit-box-shadow: 0 0 8px rgb(192 221 244);
//     // box-shadow: 0 0 8px rgb(192 221 244);
//     height: 18px;
//     left: 5px;
//     // bottom: 0;
//     width: 180px;
//     // z-index: -1;
// }

h1{
  background: url(${backgroundImg}) 0 0 repeat-x;
  position:relative;
  display: inline-block;
  margin:0 25px;
  padding:0 10px;
  height:40px;
}

h1:before,h1:after {
  content:'';
  display: inline-block;
  position:absolute;
  top: 0;
  right: -20px;
  width: 20px;
  height: 100%;
  background:inherit;
  background-position:100% 100%;
}
h1:before {
  left:-20px;
  background-position: 0 100%;
}

// h2{
//   //font-size: 9.0em;
//   text-transform: uppercase;
//   font-family: 'Bricolage Grotesque', sans-serif;;
//   background: url(https://www.adorama.com/alc/wp-content/uploads/2021/05/bird-wings-flying-feature.gif);
//   //background: url(${backgroundImg});
//   background-size: cover;
//   -webkit-background-clip: text;
//   -webkit-text-fill-color: transparent;
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

.skill {
  font-family: 'Nanum Pen Script', cursive;
  font-size: 25px;
  margin: 5px 0px;
}

`

export const SvgDiv = styled.div`
position:relative;
text-align:center;
background: linear-gradient(60deg, rgba(84,58,183,1) 0%, rgba(0,172,193,1) 100%);
color:white;

.waves {
  position:relative;
  width: 100%;
  height:15vh;
  margin-bottom:-7px; /*Fix for safari gap*/
  min-height:100px;
  max-height:150px;
}

/* Animation */

.parallax > use {
  animation: move-forever 25s cubic-bezier(.55,.5,.45,.5)     infinite;
}
.parallax > use:nth-child(1) {
  animation-delay: -2s;
  animation-duration: 7s;
}
.parallax > use:nth-child(2) {
  animation-delay: -3s;
  animation-duration: 10s;
}
.parallax > use:nth-child(3) {
  animation-delay: -4s;
  animation-duration: 13s;
}
.parallax > use:nth-child(4) {
  animation-delay: -5s;
  animation-duration: 20s;
}
@keyframes move-forever {
  0% {
   transform: translate3d(-90px,0,0);
  }
  100% { 
    transform: translate3d(85px,0,0);
  }
}
/*Shrinking for mobile*/
@media (max-width: 768px) {
  .waves {
    height:40px;
    min-height:40px;
  }
  .content {
    height:30vh;
  }
  h1 {
    font-size:24px;
  }
}
`