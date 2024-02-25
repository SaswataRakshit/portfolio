import React from "react";
import { ContactCard } from "./style";
import Background from "./background";
import SocialContact from "./socialContact";

const Contact = ({ contactRef }) => {
    return (
        <ContactCard ref={contactRef}>
            <Background />
            <SocialContact />
        </ContactCard>
    )
}

export default Contact