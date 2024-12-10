import React from 'react';
import About from '../assets/images/banner-a-propos.png'

function BannerAbout() {
    return (
        <div className="banner-about">
            <img src={About} alt="À propos" className="banner-image" />
            <div className="banner-filter"></div>
        </div>
    );
}

export default BannerAbout;
