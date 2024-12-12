import React from 'react';

const Infos = ({ title, location, tags, host, rating }) => {
    return (
        <div className="infos">
            <h1 className="info-title">{title}</h1>
            <p className="info-location">{location}</p>
            <div className="tags">
            {tags.map((tag, index) => (
                    <span key={index} className="tag">
                        {tag}
                    </span>
                ))}
        </div>
        <div className="host">
                <img src={host.picture} alt={host.name} className="host-picture" />
                <p className="host-name">{host.name}</p>
            </div>
            <div className="rating">
                {"⭐".repeat(rating)} 
            </div>
        </div>
    );
};

export default Infos;