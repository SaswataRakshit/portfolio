import { Grid } from "@mui/material";
import styled from "styled-components";

export const Intro = styled(Grid)` 
height: calc(100vh - 200px);

.aboutMe {
   font-family: 'Bricolage Grotesque', sans-serif;
   font-size: 24px;
}

.introduction {
  font-family: 'Open Sans', sans-serif;
    font-size: 24px;
    text-align: justify !important;
    text-justify: inter-word;
    color: #696969;
}

.bold {
  font-family: 'Open Sans', sans-serif;
   font-size: 26px;
   font-weight: 600;
   color: #696969; 
}

@media only screen and (max-width: 1500px) {
  .introduction {
    font-family: 'Open Sans', sans-serif;
      font-size: 16px;
      text-align: justify !important;
      text-justify: inter-word;
      color: #696969;
  }

  .bold {
     font-family: 'Open Sans', sans-serif;
     font-size: 18px;
     font-weight: 600;
     color: #696969; 
  }

  .image {
    height: 300px;
    width: 250px;
  }
}

.image {
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
 .image.alt {
   background-image:
     conic-gradient(from 180deg at top    var(--b) right var(--b),#0000 25%,var(--c) 0),
     conic-gradient(from   0deg at bottom var(--b) left  var(--b),#0000 25%,var(--c) 0);
   background-position:
     calc(100% - var(--_p,0%)) var(--_p,0%),
     var(--_p,0%) calc(100% - var(--_p,0%));
 }
 .image:hover {
   background-size: calc(100% - var(--g)) calc(100% - var(--g));
   --_p: calc(var(--g)/2);
   --_i: 0s;
 }
`

export const SvgDiv = styled.div`
position:relative;
// text-align:center;
background: linear-gradient(60deg, rgba(84,58,183,1) 0%, rgba(0,172,193,1) 100%);
color:white;

.waves {
  position:relative;
  width: 100%;
  height:15vh;
  margin-bottom:-7px; /*Fix for safari gap*/
  min-height:100px;
  max-height:200px;
}

@media only screen and (max-width: 1500px) {
  .waves {
    height:100vh;
  }
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

export const SkillDiv = styled.div`
  width: 80%;
  max-width: 960px;
  height: 200px;
  // height: $totalChartCount * ($chartBarHeight + $chartBarGap) + ($chartCount * ($chartGap + $titleHeight));
  margin: auto;
  position: relative;

  .lines {
    height: 100%;
    position: relative;
  }
  .line {
    height: inherit;
    width: 2px;
  
    position: absolute;
  
    background: rgba(#eee, 0.6);
  
    &.l--0 {
      left: 0;
    }
    &.l--25 {
      left: 25%;
    }
    &.l--50 {
      left: 50%;
    }
    &.l--75 {
      left: 75%;
    }
    &.l--100 {
      left: calc(100% - 1px);
    }
  }
  .line__label {
    display: block;
    width: 100px;
    text-align: center;
  
    position: absolute;
    bottom: -20px;
    right: -50px;
  
    &.title {
      text-transform: uppercase;
      font-weight: bold;
    }
  }
  
  .charts {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
  }
  
  .chart {
    &:not(:first-child) {
      margin-top: 10px;
    }
  }
  
  .chart__title {
    display: block;
    margin: 0 0 10px;
  
    font-weight: bold;
  
    opacity: 0;
  
    animation: 1s anim-lightspeed-in ease forwards;
  
    .chart--dev & {}
    .chart--prod & {
      animation-delay: 3.3s;
    }
    .chart--design & {
      animation-delay: 4.5s;
    }
  }
  
  .chart--horiz {
    overflow: hidden;
    list-style:none;
  }
  
  .chart__bar {
    height: 30px;
    margin-bottom: 10px;
    padding-left: 8px;
    background: linear-gradient(90deg, rgba(255,228,172,1) 0%, rgba(207,141,0,1) 100%);
    border-radius: 15px;
    opacity: 0;
  
    animation: 1s anim-lightspeed-in ease forwards;
  
    .chart--dev & {
      @include stagger-anim-delay(11, 0.5s, 0.2s);
    }
    .chart--prod & {
      @include stagger-anim-delay(2, 3.8s, 0.2s);
    }
    .chart--design & {
      @include stagger-anim-delay(4, 5s, 0.2s);
    }
  }
  
  .chart__label {
    padding-left: 10px;
    line-height: 30px;
    display: flex;
  }
  
  //Keyframes
  @keyframes anim-lightspeed-in {
    0% {
      transform: translateX(-200%);
      opacity: 1;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }

  .skill {
    font-family: 'Single Day', cursive;
    font-size: 25px;
    color: black;
    vertical-align: super;
    margin-left: 8px;
  }
`