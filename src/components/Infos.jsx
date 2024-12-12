import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons';

const Infos = ({ title, location, tags, host, rating }) => {
    return (
        <div className="infos">
            <div className="infos-tags">
            <h1 className="info-title">{title}</h1>
            <p className="info-location">{location}</p>
            <div className="tags">
            {tags.map((tag, index) => (
                    <span key={index} className="tag">
                        {tag}
                    </span>
                ))}
                </div>
        </div>
        <div className="host-rating">
        <div className="host">
                <img src={host.picture} alt={host.name} className="host-picture" />
                <p className="host-name">
                    {host.firstName} <br /> {host.lastName}
                </p>

            </div>
            <div className="rating">
                {Array.from({ length: 5 }, (_, index) => (
                    <FontAwesomeIcon
                        key={index}
                        icon={index < rating ? solidStar : regularStar}
                        className="star-icon"
                    />
                ))}
                </div>
            </div>
        </div>
    );
};

export default Infos;