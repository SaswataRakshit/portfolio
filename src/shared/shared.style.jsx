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