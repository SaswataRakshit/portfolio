import styled from "styled-components";

export const Header = styled.div`
position: relative;
  
  .heading {
    z-index: 100;
    font-family: 'Alegreya', serif;
    font-size: 30px;
  }

  .backgroundImg {
    position: absolute;
    width: ${props => props.width};
    height: 60px;
    top: ${props => props.top};
    left: -20px;
    left: ${props => props.left};
    z-index: -1;
  }

  @media only screen and (max-width: 1500px) {
    .backgroundImg {
      left: ${props => props.smallScreenLeft};
    }
  }
`

export const ScrollDiv = styled.div`
position: fixed;
top: 80%;
left: 95%;
z-index: 200;
cursor: pointer;

body {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #222a30;
}

p {
  margin-left: -35px;
  font-family: "Cabin", sans-serif;
  // letter-spacing: 8px;
  text-indent: 12px;
  color: #ffffff;
  -webkit-animation: colorText 5s ease-out infinite, nudgeText 5s ease-out infinite;
          animation: colorText 5s ease-out infinite, nudgeText 5s ease-out infinite;
}

.mouse {
  background: #4e5559 linear-gradient(transparent 0%, transparent 50%, #ffffff 50%, #ffffff 100%);
  width: 52px;
  height: 88px;
  border-radius: 100px;
  background-size: 100% 200%;
  -webkit-animation: colorSlide 5s linear infinite, nudgeMouse 5s ease-out infinite;
          animation: colorSlide 5s linear infinite, nudgeMouse 5s ease-out infinite;
}
.mouse:before, .mouse:after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
}
.mouse:before {
  width: 46px;
  height: 82px;
  background-color: #222a30;
  border-radius: 100px;
}
.mouse:after {
  background-color: #ffffff;
  width: 10px;
  height: 10px;
  border-radius: 100%;
  -webkit-animation: trackBallSlide 5s linear infinite;
          animation: trackBallSlide 5s linear infinite;
}

@-webkit-keyframes colorSlide {
  0% {
    background-position: 0% 100%;
  }
  20% {
    background-position: 0% 0%;
  }
  21% {
    background-color: #4e5559;
  }
  29.99% {
    background-color: #ffffff;
    background-position: 0% 0%;
  }
  30% {
    background-color: #4e5559;
    background-position: 0% 100%;
  }
  50% {
    background-position: 0% 0%;
  }
  51% {
    background-color: #4e5559;
  }
  59% {
    background-color: #ffffff;
    background-position: 0% 0%;
  }
  60% {
    background-color: #4e5559;
    background-position: 0% 100%;
  }
  80% {
    background-position: 0% 0%;
  }
  81% {
    background-color: #4e5559;
  }
  90%, 100% {
    background-color: #ffffff;
  }
}

@keyframes colorSlide {
  0% {
    background-position: 0% 100%;
  }
  20% {
    background-position: 0% 0%;
  }
  21% {
    background-color: #4e5559;
  }
  29.99% {
    background-color: #ffffff;
    background-position: 0% 0%;
  }
  30% {
    background-color: #4e5559;
    background-position: 0% 100%;
  }
  50% {
    background-position: 0% 0%;
  }
  51% {
    background-color: #4e5559;
  }
  59% {
    background-color: #ffffff;
    background-position: 0% 0%;
  }
  60% {
    background-color: #4e5559;
    background-position: 0% 100%;
  }
  80% {
    background-position: 0% 0%;
  }
  81% {
    background-color: #4e5559;
  }
  90%, 100% {
    background-color: #ffffff;
  }
}
@-webkit-keyframes trackBallSlide {
  0% {
    opacity: 1;
    transform: scale(1) translateY(-20px);
  }
  6% {
    opacity: 1;
    transform: scale(0.9) translateY(5px);
  }
  14% {
    opacity: 0;
    transform: scale(0.4) translateY(40px);
  }
  15%, 19% {
    opacity: 0;
    transform: scale(0.4) translateY(-20px);
  }
  28%, 29.99% {
    opacity: 1;
    transform: scale(1) translateY(-20px);
  }
  30% {
    opacity: 1;
    transform: scale(1) translateY(-20px);
  }
  36% {
    opacity: 1;
    transform: scale(0.9) translateY(5px);
  }
  44% {
    opacity: 0;
    transform: scale(0.4) translateY(40px);
  }
  45%, 49% {
    opacity: 0;
    transform: scale(0.4) translateY(-20px);
  }
  58%, 59.99% {
    opacity: 1;
    transform: scale(1) translateY(-20px);
  }
  60% {
    opacity: 1;
    transform: scale(1) translateY(-20px);
  }
  66% {
    opacity: 1;
    transform: scale(0.9) translateY(5px);
  }
  74% {
    opacity: 0;
    transform: scale(0.4) translateY(40px);
  }
  75%, 79% {
    opacity: 0;
    transform: scale(0.4) translateY(-20px);
  }
  88%, 100% {
    opacity: 1;
    transform: scale(1) translateY(-20px);
  }
}
@keyframes trackBallSlide {
  0% {
    opacity: 1;
    transform: scale(1) translateY(-20px);
  }
  6% {
    opacity: 1;
    transform: scale(0.9) translateY(5px);
  }
  14% {
    opacity: 0;
    transform: scale(0.4) translateY(40px);
  }
  15%, 19% {
    opacity: 0;
    transform: scale(0.4) translateY(-20px);
  }
  28%, 29.99% {
    opacity: 1;
    transform: scale(1) translateY(-20px);
  }
  30% {
    opacity: 1;
    transform: scale(1) translateY(-20px);
  }
  36% {
    opacity: 1;
    transform: scale(0.9) translateY(5px);
  }
  44% {
    opacity: 0;
    transform: scale(0.4) translateY(40px);
  }
  45%, 49% {
    opacity: 0;
    transform: scale(0.4) translateY(-20px);
  }
  58%, 59.99% {
    opacity: 1;
    transform: scale(1) translateY(-20px);
  }
  60% {
    opacity: 1;
    transform: scale(1) translateY(-20px);
  }
  66% {
    opacity: 1;
    transform: scale(0.9) translateY(5px);
  }
  74% {
    opacity: 0;
    transform: scale(0.4) translateY(40px);
  }
  75%, 79% {
    opacity: 0;
    transform: scale(0.4) translateY(-20px);
  }
  88%, 100% {
    opacity: 1;
    transform: scale(1) translateY(-20px);
  }
}
@-webkit-keyframes nudgeMouse {
  0% {
    transform: translateY(0);
  }
  20% {
    transform: translateY(8px);
  }
  30% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(8px);
  }
  60% {
    transform: translateY(0);
  }
  80% {
    transform: translateY(8px);
  }
  90% {
    transform: translateY(0);
  }
}
@keyframes nudgeMouse {
  0% {
    transform: translateY(0);
  }
  20% {
    transform: translateY(8px);
  }
  30% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(8px);
  }
  60% {
    transform: translateY(0);
  }
  80% {
    transform: translateY(8px);
  }
  90% {
    transform: translateY(0);
  }
}
@-webkit-keyframes nudgeText {
  0% {
    transform: translateY(0);
  }
  20% {
    transform: translateY(2px);
  }
  30% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(2px);
  }
  60% {
    transform: translateY(0);
  }
  80% {
    transform: translateY(2px);
  }
  90% {
    transform: translateY(0);
  }
}
@keyframes nudgeText {
  0% {
    transform: translateY(0);
  }
  20% {
    transform: translateY(2px);
  }
  30% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(2px);
  }
  60% {
    transform: translateY(0);
  }
  80% {
    transform: translateY(2px);
  }
  90% {
    transform: translateY(0);
  }
}
@-webkit-keyframes colorText {
  21% {
    color: #4e5559;
  }
  30% {
    color: #ffffff;
  }
  51% {
    color: #4e5559;
  }
  60% {
    color: #ffffff;
  }
  81% {
    color: #4e5559;
  }
  90% {
    color: #ffffff;
  }
}
@keyframes colorText {
  21% {
    color: #4e5559;
  }
  30% {
    color: #ffffff;
  }
  51% {
    color: #4e5559;
  }
  60% {
    color: #ffffff;
  }
  81% {
    color: #4e5559;
  }
  90% {
    color: #ffffff;
  }
}
`