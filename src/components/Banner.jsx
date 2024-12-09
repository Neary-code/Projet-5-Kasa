import React from 'react';
import banner from '../assets/images/banner-accueil.png';

function Banner({ title }) {
    return (
        <div className="banner-accueil">
            <img src={banner} alt="Paysage montagnes" className="banner-accueil" />
            {title && <h1 className="banner-title">{title}</h1>}
        </div>
    );
}

export default Banner;
