import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { NavigationBar } from "./style";

const Navigation = ({ handleClickIntro, handleClickTimeline, handleClickProject, handleClickContact }) => {
    return (
        <NavigationBar>
            <div className="nav" onClick={(handleClickIntro)}>
                <FontAwesomeIcon icon="fa-solid fa-pen-nib" style={{ color: '#36454F' }} />
                <span className="title">Introduction</span>
            </div>
            <br />
            <div className="nav" onClick={handleClickTimeline}>
                <FontAwesomeIcon icon="fa-solid fa-calendar-days" style={{ color: '#36454F' }} />
                <span className="title">Timeline</span>
            </div>
            <br />
            <div className="nav" onClick={handleClickProject}>
                <FontAwesomeIcon icon="fa-solid fa-laptop-code" style={{ color: '#36454F' }} />
                <span className="title">Projects</span>
            </div>
            <br />
            <div className="nav" onClick={handleClickContact}>
                <FontAwesomeIcon icon="fa-solid fa-address-book" style={{ color: '#36454F' }} />
                <span className="title">Say HI.</span>
            </div>
        </NavigationBar>
    )
}

export default Navigation;