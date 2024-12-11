import React from 'react';
import Modal from "../components/Modal.jsx";
import Infos from "../components/Infos.jsx";
import Collaps from "../components/Collapses-house.jsx";
import { useParams, Navigate } from "react-router-dom";
import Datas from "../datas/logements.json";

const House = () => {
    const { id } = useParams();
    const house = Datas.find((item) => item.id === id);

    if (!house) {
        return <Navigate to="/404" />;
    }

    return (
        <div>
            <h1>{house.title}</h1>
        </div>
    );
};

export default House;


