import styled from "styled-components";

export const AboutDiv = styled.div`
margin-top: 30%;

.intro {
    font-family: 'Montserrat', sans-serif;
    font-size: 44px;
    margin-bottom: 12px;
}

.gradient-text {
  /* Fallback: Set a background color. */
  background-color: #CA4246;
  font-size: 52px;
  font-weight: 900;
  
  /* Create the gradient. */
   background-image: linear-gradient(
        45deg,
        #CA4246 16.666%, 
        #E16541 16.666%, 
        #E16541 33.333%, 
        #F18F43 33.333%, 
        #F18F43 50%, 
        #8B9862 50%, 
        #8B9862 66.666%, 
        #476098 66.666%, 
        #476098 83.333%, 
        #A7489B 83.333%);
  
  /* Set the background size and repeat properties. */
  background-size: 100%;
  background-repeat: repeat;

  /* Use the text as a mask for the background. */
  /* This will show the gradient as a text color rather than element bg. */
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent; 
  
  /* Animate the text when loading the element. */
    /* This animates it on page load and when hovering out. */
    animation: rainbow-text-simple-animation-rev 0.75s ease forwards;

}

.gradient-text:hover{
    animation: rainbow-text-simple-animation 0.5s ease-in forwards;
}


/* Move the background and make it smaller. */
/* Animation shown when entering the page and after the hover animation. */
@keyframes rainbow-text-simple-animation-rev {
    0% {
        background-size: 650%;
    }
    40% {
        background-size: 650%;
    }
    100% {
        background-size: 100%;
    }
}

/* Move the background and make it larger. */
/* Animation shown when hovering over the text. */
@keyframes rainbow-text-simple-animation {
    0% {
        background-size: 100%;
    }
    80% {
        background-size: 650%;
    }
    100% {
        background-size: 650%;
    }
}

h4 {
    font-size: 24px;
    font-family: 'Montserrat', sans-serif;
    margin-top: 8px;
    margin-left: 4px;
}

@keyframes typing {
  0.0000%, 27.3488% { content: ""; }
  1.1395%, 26.2093% { content: "W"; }
  2.2791%, 25.0698% { content: "We"; }
  3.2791%, 24.0698% { content: "Web"; }
  3.4186%, 23.9302% { content: "Web D"; }
  4.5581%, 22.7907% { content: "Web De"; }
  5.6977%, 21.6512% { content: "Web Dev"; }
  6.8372%, 20.5116% { content: "Web Deve"; }
  7.9767%, 19.3721% { content: "Web Devel"; }
  9.1163%, 18.2326% { content: "Web Develo"; }
  11.2558%, 16.0930% { content: "Web Develop"; }
  12.2558%, 15.0930% { content: "Web Develope"; }
  13.2558%, 15.0930% { content: "Web Developer"; }

  30.7674%, 51.2791% { content: ""; }
  31.9070%, 50.1395% { content: "C"; }
  33.0465%, 49.0000% { content: "Co"; }
  34.1860%, 47.8605% { content: "Cod"; }
  35.3256%, 46.7209% { content: "Code"; }
  36.4651%, 45.5814% { content: "Coder"; }

  54.6977%, 90.2093% { content: ""; }
  55.8372%, 89.0698% { content: "P"; }
  56.9767%, 88.9302% { content: "Ph"; }
  58.1163%, 86.7907% { content: "Pho"; }
  59.2558%, 84.6512% { content: "Phot"; }
  60.3953%, 83.5116% { content: "Photo"; }
  61.5349%, 82.3721% { content: "Photog"; }
  62.6279%, 81.8605% { content: "Photogr"; }
  63.7674%, 80.7209% { content: "Photogra"; }
  64.9070%, 79.5814% { content: "Photograp"; }
  65.0465%, 78.4419% { content: "Photograph"; }
  67.1860%, 77.3023% { content: "Photographe"; }
  68.3256%, 76.1628% { content: "Photographer"; }
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

.typewriter {
  --caret: currentcolor;
  font-size: 30px;
  color: red;
  font-family: 'Roboto Mono', monospace;
  margin-left: 6px;
}

.typewriter::before {
  content: "";
  animation: typing 13.5s infinite;
}

.typewriter::after {
  content: "";
  border-right: 1px solid var(--caret);
  animation: blink 0.5s linear infinite;
}

@media (prefers-reduced-motion) {
  .typewriter::after {
    animation: none;
  }
  
  @keyframes sequencePopup {
    0%, 100% { content: "UI Developer"; }
    25% { content: "Coder"; }
    50% { content: "Photographer"; }
    // 75% { content: "human"; }
  }

  .typewriter::before {
    content: "developer";
    animation: sequencePopup 12s linear infinite;
  }
}
`

export const NavigationBar = styled.div`
margin-left: 20px;
position: fixed;
top: 40%;
z-index: 100;

.nav{
    padding-left: 4px;
    width: 23px;
    height: 20px;
    border-radius: 50px;
    transition: width 2s;
    background-color: #CCCCFF;
    border: 1px solid #7393B3;
    overflow: hidden;
}

.nav:hover{
    width: 120px;
    cursor: pointer;
}

.title {
  margin-left: 5px;
  color: #36454F;
}
`