import React, { useState } from "react";
import "../styles/collapse.scss";
import chevronUp from "../assets/images/chevron-fermer-collapse.png";  
import chevronDown from "../assets/images/chevron-ouvert-collapse.png"

const Collapse = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleCollapse = () => {
    setIsOpen(!isOpen);
    };

    return (
    <div className="collapse-container">
        <button className="collapse-button" onClick={toggleCollapse}>
        <span className="collapse-title">{title}</span>
        <img
            src={isOpen ? chevronUp : chevronDown}
            alt={isOpen ? "Chevron Up" : "Chevron Down"}
            className="chevron-icon"
            />
        </button>
        <div className={`collapse-content ${isOpen ? "open" : ""}`}>
        {children}
        </div>
    </div>
    );
};

export default Collapse;
