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
                <NavLink to="/" className={({ isActive }) => (isActive ? "active-link" : "inactive-link")}>
                <li>Accueil</li>
                </NavLink>
                <NavLink to="/about" className={({ isActive }) => (isActive ? "active-link" : "inactive-link")}>
                <li>A Propos</li>
                </NavLink>
            </ul>
        </div>
    );
};

export default Navigation;