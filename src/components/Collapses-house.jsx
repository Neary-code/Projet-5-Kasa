import React, { useState } from "react";
import chevronUp from "../assets/images/chevron-fermer-collapse.png";  
import chevronDown from "../assets/images/chevron-ouvert-collapse.png";

const CollapsesHouse = ({ title, description, equipements }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleCollapse = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="collapse-house">
            <button className="collapse-house-button" onClick={toggleCollapse}>
                {title && <h3 className="collapse-house-title">{title}</h3>}
                <img
                    src={isOpen ? chevronUp : chevronDown}
                    alt={isOpen ? "Chevron Up" : "Chevron Down"}
                    className="chevron-icon"
                />
            </button>

            {isOpen && (
                <div className="collapse-house-content">
                    {description && <p className="collapse-description">{description}</p>}

                    {equipements && (
                        <ul className="collapse-equipements">
                            {equipements.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    )}
                </div>
            )}
        </div>
    );
};

export default CollapsesHouse;
