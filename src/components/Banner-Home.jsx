import React from 'react';
import bannerImage from '../assets/images/banner-accueil.png';

function BannerHome({ title }) {
    return (
        <div className="banner-accueil">
            <img src={bannerImage} alt="Paysage de montagnes" className="banner-image" />
            {title && <h1 className="banner-title">{title}</h1>}
        </div>
    );
}

export default BannerHome;

