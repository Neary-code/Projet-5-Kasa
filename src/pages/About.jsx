import React from 'react';
import BannerAbout from "../components/Banner-About.jsx";
import Collapses from "../components/Collapses.jsx";

function About() {
    return (
        <div>
            <div className='about-banner'>
                <BannerAbout />
            </div>
            <div className='collapses'>
                <Collapses />
            </div>
        </div>
    );
}

export default About;

