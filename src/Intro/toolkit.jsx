import React from "react";

const ToolKit = () => {
    return (
        <div>
            <h1>My ToolKit</h1>
            <ul class="skills">
                <li><img src={require('../images/react.svg')} alt="" />React</li>
                <li>Angular</li>
                <li><img src={require('../images/css.png')} alt="" />CSS3</li>
                <li><img src={require('../images/html.png')} alt="" />HTML5</li>
                <li><img src={require('../images/javascript.png')} alt="" />Javascript</li>
                <li><img src={require('../images/jquery.png')} alt="" />jQuery</li>
                <li><img src={require('../images/redux.png')} alt="" />Redux</li>
                <li><img src={require('../images/61727377.png')} alt="" />Micro Frontend</li>
                <li><img src={require('../images/Less.png')} alt="" />Less</li>
                <li><img src={require('../images/sass.png')} alt="" />Sass</li>
                <li><img src={require('../images/typescript.png')} alt="" />Typescript</li>
            </ul>
        </div>
    )
}

export default ToolKit