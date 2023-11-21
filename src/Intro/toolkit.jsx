import React from "react";
import reactIcon from '../images/react (1).svg'
import Css from "../images/css.svg";
import htmlIcon from '../images/html.svg'
import javaScriptIcon from '../images/javascript.svg'
import jqueryIcon from '../images/jquery.svg'
import reduxIcon from '../images/redux.svg'
import lessIcon from '../images/less.svg'
import sassIcon from '../images/sass.svg'
import typescriptIcon from '../images/typescript.svg'
import angularIcon from '../images/angular.svg'
import { ToolkitDiv } from "./style";

const ToolKit = () => {
    return (
        <ToolkitDiv>
            {/* <h1>My ToolKit</h1> */}
            {/* <header>
                <h1 className="header-1">My Toolkit</h1>
            </header> */}
            <div class="three">
                <h1>My Toolkit</h1>
            </div>
            <ul style={{ display: 'inline' }}>
                <li>
                    <img src={reactIcon} alt="" style={{ width: 50, height: 50 }} />
                    <p>React</p>
                </li>
                <li>
                    <img src={angularIcon} alt="" style={{ width: 50, height: 50 }} />
                    <p>Angular</p>
                </li>
                <li>
                    <img src={Css} alt="" style={{ width: 50, height: 50 }} />
                    <p>CSS3</p>
                </li>
                <li>
                    <img src={htmlIcon} alt="" style={{ width: 50, height: 50 }} />
                    <p>HTML5</p>
                </li>
                <li>
                    <img src={javaScriptIcon} alt="" style={{ width: 50, height: 50 }} />
                    <p>Javascript</p>
                </li>
                <li>
                    <img src={jqueryIcon} alt="" style={{ width: 50, height: 50 }} />
                    <p>jQuery</p>
                </li>
                <li>
                    <img src={reduxIcon} alt="" style={{ width: 50, height: 50 }} />
                    <p>Redux</p>
                </li>
                <li>
                    <img src={require('../images/mfe-modified.png')} alt="" style={{ width: 50, height: 50 }} />
                    <p>Micro Frontend</p>
                </li>
                <li>
                    <img src={lessIcon} alt="" style={{ width: 50, height: 50 }} />
                    <p>Less</p>
                </li>
                <li>
                    <img src={sassIcon} alt="" style={{ width: 50, height: 50 }} />
                    <p>Sass</p>
                </li>
                <li>
                    <img src={typescriptIcon} alt="" style={{ width: 50, height: 50 }} />
                    <p>Typescript</p>
                </li>
            </ul>
        </ToolkitDiv>
    )
}

export default ToolKit