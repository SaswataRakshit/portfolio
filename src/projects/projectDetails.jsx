import React from "react";
import { ProjectCard } from "./style";
import { Chip } from "@mui/material";

const ProjectDetails = ({ technologyUsed, heading, index }) => {

    const text = () => {
        let details
        if (heading == 'Nodestar') {
            details = (
                <div>
                    <a>Nodestar is an application which build on micro-frontend architecture. Using module-federation plugin from webpack 5, this apllication is working as an umbrella of 5 child application.</a>
                    <p><span>Roles & Responsibility - </span>Build micro-frontend applications from scratch, style, and ship high-quality websites, design systems, for a diverse array of projects for Business people from Lowe's.
                        Provide leadership within engineering department through close collaboration, knowledge shares, and spearheading the development of internal tools. Worked on bringing all application under
                        one using which business can perform any action based on their role.</p>
                </div>
            )
        }
        if (heading == 'Sourcing-Insights') {
            details = (
                <div>
                    <a>Sourcing Insights is one of the child application which provides a detail picture of how a particular order is getting sourced, analyse performance of stores, inventory picture of stores.</a>
                    <p><span>Roles & Responsibility - </span>Developed and styled interactive web apps and integrate google maps to visualize the actual picture of how orders are getting sourced.
                        For analyzing performance of stores, developed a dashboard using Apache e-charts.</p>
                </div>
            )
        }
        if (heading == 'Configurator-Dashboard') {
            details = (
                <div>
                    <a>Dashboard of numerous features which helps day to day activities of supply chain division of a retailer.</a>
                    <p><span>Roles & Responsibility - </span>Developed maintained and shipped numerous feature to production which helps day to day activity of business people like Store Manager / Inventory Management team and so on.
                        Collaborated with UX team and helped to develop multiple screens and functionality. Modified old codes and transform it into sclable structure.</p>
                </div>
            )
        }
        if (heading == 'Imports Payment Tool') {
            details = (
                <div>
                    <a>Tool for maintaining commercial invoice application which is responsible for raising and calculating payment to vendor.</a>
                    <p><span>Roles & Responsibility - </span> Created APIs and integrate with frontend along with designing pages using existing components.
                        Developed Batch application using Spring Batch which generate daily item feed to provide
                        vendor. Also developed Kafa consumer to read HTS (Harmonized Tariff Schedule, US) details for each item from Vendor side MQ
                        and save data in noSQL DB (MongoDB). Worked on an application which calculates the duty using Drool Engine and
                        publish data using API.</p>
                </div>
            )
        }
        if (heading == 'Insurance Claim Tool') {
            details = (
                <div>
                    <a>Tool related to insurance claim activities which helps users to upload necessary documents and claim their insurance </a>
                    <p><span>Roles & Responsibility - </span>Designed and developed the Frontend from scratch and make it Single Pageapplication. Build Unit Test Case
                        (spec.ts) and End to End Test (e2e). Develop REST API to feed data to the newly created UI
                        and develop unit test case using Junit 5. Followed Test Driven
                        Development, Pair Programming and DevOps Techniques. Worked in Agile methodology in
                        Scrum framework</p>
                </div>
            )
        }
        return details
    }
    return (
        <ProjectCard index={index}>
            {text()}
            <div className="technologyDiv">
                {technologyUsed.map((el, id) => <Chip label={el} className="chipStyle" key={id} />)}
            </div>
        </ProjectCard>
    )
}

export default ProjectDetails;