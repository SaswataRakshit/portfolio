import React, { useRef } from 'react';

import NavBar from './downloadResume'

import Home from '../home';
import Introduction from '../Introduction';
import TimeLine from '../timeline';
import Projects from '../projects';
import Contact from '../contact';

function Layout() {
    const introRef = useRef(null);
    const timelineRef = useRef(null);
    const projectRef = useRef(null);
    const contactRef = useRef(null);

    const handleClickIntro = () => {
        console.log('clickedddd');
        introRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const handleClickTimeline = () => {
        timelineRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const handleClickProject = () => {
        projectRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const handleClickContact = () => {
        contactRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <>
            <NavBar />
            <Home handleClickIntro={handleClickIntro} handleClickTimeline={handleClickTimeline}
                handleClickProject={handleClickProject} handleClickContact={handleClickContact} />
            <Introduction introRef={introRef} />
            <TimeLine timelineRef={timelineRef} />
            <Projects projectRef={projectRef} />
            <Contact contactRef={contactRef} />
        </>
    );
}

export default Layout;
