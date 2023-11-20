import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { NavigationBar } from "./style";

const Navigation = () => {
    return (
        <NavigationBar>
            {/* <div className="nav">
                <FontAwesomeIcon icon="fa-solid fa-house-chimney" />
                <span className="title">Home</span>
            </div>
            <br /> */}
            <div className="nav">
                <FontAwesomeIcon icon="fa-solid fa-pen-nib" style={{ color: '#36454F' }} />
                <span className="title">Introduction</span>
            </div>
            <br />
            <div className="nav">
                <FontAwesomeIcon icon="fa-solid fa-laptop-code" style={{ color: '#36454F' }} />
                <span className="title">Work Experience</span>
            </div>
            <br />
            <div className="nav">
                <FontAwesomeIcon icon="fa-solid fa-graduation-cap" style={{ color: '#36454F' }} />
                <span className="title">Education</span>
            </div>
            <br />
            <div className="nav">
                <FontAwesomeIcon icon="fa-solid fa-address-book" style={{ color: '#36454F' }} />
                <span className="title">Contact Me</span>
            </div>
        </NavigationBar>
    )
}

export default Navigation;