import React from "react";
import { ScrollDiv } from "./shared.style";

const Scroll = ({ handleClick }) => {
    return (
        <ScrollDiv onClick={handleClick}>
            <div className="mouse"></div>
            <p>Scroll Down</p>
        </ScrollDiv>
    )
}

export default Scroll