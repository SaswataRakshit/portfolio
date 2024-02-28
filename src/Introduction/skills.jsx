import React from "react";

import reactIcon from '../assets/images/react (1).svg'
import Css from "../assets/images/css.svg";
import htmlIcon from '../assets/images/html.svg'
import javaScriptIcon from '../assets/images/javascript.svg'
import jqueryIcon from '../assets/images/jquery.svg'
import reduxIcon from '../assets/images/redux.svg'
import lessIcon from '../assets/images/less.svg'
import sassIcon from '../assets/images/sass.svg'
import typescriptIcon from '../assets/images/typescript.svg'
import angularIcon from '../assets/images/Angular.svg'
import microFrontendIcon from '../assets/images/webpack-icon-logo-black-and-white.png'

import { SkillDiv } from "./style";
import { Header } from "../shared/shared.style";

const Skills = () => {
    return (
        <SkillDiv>
            <div className="charts">
                <div className="chart chart--dev">
                    {/* <span className="chart__title">Development</span> */}
                    <ul className="chart--horiz">
                        <li className="chart__bar" style={{ width: '98%' }}>
                            <div className="chart__label">
                                <img src={reactIcon} alt="" style={{ width: 25, height: 25 }} />
                                <span className="skill">React JS</span>
                            </div>
                        </li>
                        <li className="chart__bar" style={{ width: '70%' }}>
                            <div className="chart__label">
                                <img src={angularIcon} alt="" style={{ width: 25, height: 25 }} />
                                <span className="skill">Angular 6</span>
                            </div>
                        </li>
                        <li className="chart__bar" style={{ width: '95%' }}>
                            <div className="chart__label">
                                <img src={htmlIcon} alt="" style={{ width: 25, height: 25 }} />
                                <span className="skill">HTML 5</span>
                            </div>
                        </li>
                        <li className="chart__bar" style={{ width: '95%' }}>
                            <div className="chart__label">
                                <img src={Css} alt="" style={{ width: 25, height: 25 }} />
                                <span className="skill">CSS3</span>
                            </div>
                        </li>
                        <li className="chart__bar" style={{ width: '98%' }}>
                            <div className="chart__label">
                                <img src={javaScriptIcon} alt="" style={{ width: 25, height: 25 }} />
                                <span className="skill">Javascript</span>
                            </div>
                        </li>
                        <li className="chart__bar" style={{ width: '60%' }}>
                            <div className="chart__label">
                                <img src={jqueryIcon} alt="" style={{ width: 25, height: 25 }} />
                                <span className="skill">Jquery</span>
                            </div>
                        </li>
                        <li className="chart__bar" style={{ width: '95%' }}>
                            <div className="chart__label">
                                <img src={reduxIcon} alt="" style={{ width: 25, height: 25 }} />
                                <span className="skill">Redux & Redux-Thunk</span>
                            </div>
                        </li>
                        <li className="chart__bar" style={{ width: '80%' }}>
                            <div className="chart__label">
                                <img src={microFrontendIcon} alt="" style={{ width: 25, height: 25 }} />
                                <span className="skill">Micro-Frontend</span>
                            </div>
                        </li>
                        <li className="chart__bar" style={{ width: '70%' }}>
                            <div className="chart__label">
                                <img src={sassIcon} alt="" style={{ width: 25, height: 25 }} />
                                <span className="skill">Sass</span>
                            </div>
                        </li>
                        <li className="chart__bar" style={{ width: '50%' }}>
                            <div className="chart__label">
                                <img src={lessIcon} alt="" style={{ width: 25, height: 25 }} />
                                <span className="skill">Less</span>
                            </div>
                        </li>
                        <li className="chart__bar" style={{ width: '40%' }}>
                            <div className="chart__label">
                                <img src={typescriptIcon} alt="" style={{ width: 25, height: 25 }} />
                                <span className="skill">TypeScript</span>
                            </div>
                        </li>
                    </ul>
                </div>


            </div>
        </SkillDiv>

    )
}

export default Skills