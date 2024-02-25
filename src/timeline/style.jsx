import styled from "styled-components";
import background3 from '../assets/images/brick-wall-painted-white.jpg'
import border from '../assets/images/corkborder_f8cm3g.png'
import board from '../assets/images/cork_w2tt25.jpg'

export const TimelineDiv = styled.div`
background-image: url(${background3});
height: 180vh;
width: 97.5vw;
padding: 16px;
margin-top: 16px;
display: flex;

#board {
    border: 31px solid transparent;
    height: 610px;
    width: 1220px;
    background-image: url(${board});
    background-size: 1300px;
    border-image-source: url(${border});
    border-image-slice: 31 29;
    border-image-width: 31px 29px;
    overflow: hidden;
    position: absolute;
  }

  .blackboardMsg {
    font-family: 'Shadows Into Light', cursive;
    color: white;
    font-size: 20px;
    word-spacing: 10px;
    animation: slow 2s ease forwards;
  }

  .blackboardImg {
    width: 500px; 
    height: 750px
  }

  .contentDiv {
    position: absolute; 
    top: 185px;
    left: 100px; 
    z-index: 100; 
    width: 300px; 
    height: 600px
  }

  @media only screen and (max-width: 1500px) {
    #board {
      border: 31px solid transparent;
      height: 400px;
      width: 800px;
      background-image: url(${board});
      background-size: 1300px;
      border-image-source: url(${border});
      border-image-slice: 31 29;
      border-image-width: 31px 29px;
      overflow: hidden;
      position: absolute;
    }

    .blackboardImg {
      width: 450px; 
      height: 530px;
    }
  
    .contentDiv {
      top: 10%;
      left: 18%; 
      z-index: 100; 
      width: 290px; 
      height: 500px
    }

    .blackboardMsg {
      font-size: 16px;
    }
  }
`

export const StickyNotes = styled.div`
margin-right: 20px;

ul li{
    list-style: none;
  }
  
  ul{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  }
  
  ul li a{
    text-decoration: none;
    color:#130f40;
    display: block;
    height: 200px;
    width: 200px;
    background-color:#badc58 ;
    padding: 10px;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
    margin: 10px;
    transform: rotate(-8deg);
    transition: transform 0.2s linear;
    border-radius: 5px;
  }
  
  
  h2{
    font-size: 15px;
    color:#ff4757;
    font-family: 'Single Day', cursive;
}
  p{
    font-size: 18px;
    font-family: 'Single Day', cursive;
    margin: 0px;
}
 
ul li:nth-child(2n) a{
    position: relative;
    top:15px;
    left:5px;
    transform: rotate(6deg);
    background-color: #f9ca24;
  }
  
  ul li:nth-child(1) a{
    position: relative;
    top:20px;
    left:5px;
    transform: rotate(25deg);
    background-color: #eccc68;
  }
  
  ul li:nth-child(8n) a{
    position: relative;
    top:20px;
    left:5px;
    transform: rotate(25deg);
    background-color: #70a1ff;
  }
  
  
  ul li a:hover{
    transform: scale(1.25);
    z-index: 99;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
    position: relative;
    cursor: pointer;
  }

  @media only screen and (max-width: 1500px) {
    ul li a{
      height: 150px;
      width: 150px;
      padding: 5px;
    }

    h2{
      font-size: 12px;
      color:#ff4757;
      font-family: 'Single Day', cursive;
  }
    p{
      font-size: 14px;
      font-family: 'Single Day', cursive;
      margin: 0px;
  }
  }
`