import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from "../assets/images/logo-header.png";

const Navigation = () => {
    return (
        <div className='navigation'>
            <div className="logo-header">
                <img src={logo} alt="Logo Kasa" className="logo-header" />
                </div>
            <ul>
                <NavLink to="/" className="link-home">
                <li>Accueil</li>
                </NavLink>
                <NavLink to="/about" className="link-about">
                <li>A propos</li>
                </NavLink>
            </ul>
        </div>
    );
};

export default Navigation;