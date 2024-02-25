import styled from "styled-components";

export const ProjectDiv = styled.div`
margin-top: -1000px; 
position: relative
`

export const ProjectCard = styled.div`
background-image: ${props => props.index % 2 == 0 ? "linear-gradient(to top left, #0096FF, #F0FFFF)" : "linear-gradient(to bottom left, #ECFFDC, #478778)"};
//background-image: linear-gradient(to bottom right, #89CFF0, #F0FFFF);
display: block;
padding: 8px;
position: relative;
overflow: hidden;

a{
    font-family: 'Open Sans', sans-serif;
}

p{
    font-family: 'Open Sans', sans-serif;
}

span{
    font-weight: 600;
}

.chipStyle {
    margin: 5px;
    color: ${props => props.index % 2 == 0 ? "#F0FFFF" : "#ECFFDC"};
}

.technologyDiv {
    margin-top: 12px;
}

@media only screen and (min-width: 1600px) {
    height: 100%;
    
    .technologyDiv {
        margin-top: 0px;
        position: absolute; 
        top: 72%;
    }
}
`