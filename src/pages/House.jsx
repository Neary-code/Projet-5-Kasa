import React from 'react';
import { Link } from "react-router-dom";
import Datas from "../datas/logements.json";

const House = () => {
    const { id } = Link();
    const logement = Datas.find((item) => item.id === id);

    if (!logement) {
        return <p>Logement introuvable.</p>;
    }

    return (
        <div>
            <h1>{logement.title}</h1>
            <img src={logement.cover} alt={logement.title} />
            <p>Description : {logement.description}</p>
            {/* Ajoutez d'autres informations ici */}
        </div>
    );
};

export default House;