import React from 'react';
import "../styles/error404.scss";

const Error404 = () => {
    return (
    <div className="not-found-container">
        <h1 className="not-found-title">404</h1>
        <p className="not-found-text">Oups! La page que vous cherchez n'existe pas.</p>
        <a href="/" className="not-found-link">
        Retourner sur la page d'accueil
        </a>
    </div>
    );
};

export default Error404;