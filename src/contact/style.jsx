import styled from "styled-components";
import card from '../assets/images/card3.jpg'

export const ContactCard = styled.div`
position: relative;

#tsparticles {
    height: 400px !important;
}

  .container {
    margin-top: 10%;
    margin-left: 30%;
	min-width: 700px;
	min-height: 350px;
	border-radius: 20px;
	position: relative;
}

.side {
	position: absolute;
	text-align: center;
	width: 75%;
	height: 70%;
	color: #fff;
	transform-style: preserve-3d;
	backface-visibility: hidden;
	border-radius: 20px;
}

.front {
	z-index: 2;
	background-size: 100vh;
	background-size: cover;
	background-image: url(${card});
}

.content {
	transform: translatez(70px) scale(0.8);
	line-height: 1.5em;
}
.content h1 {
    color: black;
    margin-top: 0px;
    margin-bottom: 40px;
    font-family: 'Open Sans', sans-serif;
    font-weight: 900;
    text-align: left;
}
.content h5 {
    font-family: 'Open Sans', sans-serif;
    font-weight: 900;
    color: black;
    margin-top: 8px;
    margin-left: 12px;
}
.content p {
	line-height: 2em;
    text-align: left;
    color: black;
    font-family: 'Open Sans', sans-serif;
    font-weight: 900;
}

.cardheading {
    display: flex;
    position: relative;
}

.cardheading:before {
    content: "";
	position: absolute;
	bottom: 20px;
	height: 3px;
	background-color: #B2BEB5;
	width: 230px;
	left: 22%;
	transform: translateX(-50%);
}

#connect {
    width: 500px;
    padding: 50px 50px 0px 50px;
    position: relative;

    h1{
        color: #F0FFFF;
        font-family: 'Open Sans', sans-serif;
        font-weight: 900;
    }
    p{
        word-wrap: break-word;
        font-family: 'Single Day', cursive;
        font-size: 20px;
        color: #F0FFFF;
    }
}

#connect:before {
    content: "";
	position: absolute;
	bottom: 20px;
	height: 3px;
	// background-color: #B2BEB5;
    background: linear-gradient(90deg, rgba(0,63,143,1) 0%, rgba(219,228,255,1) 50%, rgba(0,70,158,1) 100%);
	width: 230px;
	left: 90%;
    top: 80%;
	rotate: 90deg;
}

#connect:after {
    content:''; 
    display:block; 
    margin-left:-20px;
    width:20px; 
    height:100%;  
    border-radius:125px;  
    box-shadow:0 0 8px black;
}

#iconList {
    display: flex;
    padding-left: 40px;

    .iconLink {
        color: inherit;
        background-color: #ADD8E6;
        width: 45px;
        height: 45px;
        border-radius: 50%;
        margin-left: 10px;
    }
    
    .icons {
        width: 25px;
        height: 25px;
        margin: 10px;
    }
}

@media only screen and (max-width: 1500px) {
    .container {
        margin-top: 10%;
        margin-left: 17%;
        min-width: 600px;
    }
  }

`