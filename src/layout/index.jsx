import React, { useRef } from 'react';
import InfiniteScroll from "react-infinite-scroll-component";

import NavBar from './downloadResume'
import Home from '../home';
import Introduction from '../Introduction';
import TimeLine from '../timeline';
import Projects from '../projects';
import Contact from '../contact';
import { useState } from 'react';
import LoadingImg from '../assets/images/Loader.svg'
import Scroll from '../shared/Scroll';


const Layout = () => {
    const introRef = useRef(null);
    const timelineRef = useRef(null);
    const projectRef = useRef(null);
    const contactRef = useRef(null);
    const [items, setItems] = useState(Array.from({ length: 1 }))

    const handleClickIntro = () => {
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

    const fetchMoreData = () => {
        setTimeout(() => {
            setItems(items.concat(Array.from({ length: 1 })))
        }, 1500)
    }

    const loadComponent = (id) => {
        switch (id) {
            case 0: return null
            case 1: return <Introduction introRef={introRef} />
            case 2: return (<div><TimeLine timelineRef={timelineRef} /><Projects projectRef={projectRef} /></div>)
            case 3: return <Contact contactRef={contactRef} />
            default: return null
        }
    }

    const handleScrollClick = () => {
        console.log('document.body.offsetHeight', document.body.offsetHeight);
        window.scroll({
            top: document.body.offsetHeight,
            left: 0,
            behavior: 'smooth',
        })
        if (items.length == 2) {
            setTimeout(() => { handleClickIntro() }, 1000)
        }
        else if (items.length == 3) {
            handleClickProject()
        }
        else {
            handleClickContact()
        }
    }

    return (
        <>
            <NavBar />
            {items.length < 4 &&
                <Scroll handleClick={handleScrollClick} />
            }
            <Home handleClickIntro={handleClickIntro} handleClickTimeline={handleClickTimeline}
                handleClickProject={handleClickProject} handleClickContact={handleClickContact} showNav={items.length === 4} />
            <InfiniteScroll
                dataLength={items.length}
                next={fetchMoreData}
                hasMore={items.length === 4 ? false : true}
                style={{ overflow: 'hidden !important' }}
                loader={<div style={{ textAlign: 'center' }}><img src={LoadingImg} alt='Loading...' /></div>}
            >
                {items.map((i, index) =>
                    <div key={index}>
                        {loadComponent(index)}
                    </div>
                )}
            </InfiniteScroll>
        </>
    );
}

export default Layout;
