import React from 'react'
import banner from "../assets/images/banner-acceuil.png"

function Banner() {
    return (
        <div className="banner-acceuil">
            <img src={banner} alt="Paysage montagnes" className="banner-acceuil" />
        </div>
    );
}

export default Banner