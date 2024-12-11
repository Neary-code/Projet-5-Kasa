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
        return <Navigate to="*" />;
    }

    return (
        <div className="house-page">
            <div className="house-modal">
                <Modal slides={house.pictures} />
            </div>
            <div className="house-infos">
                <Infos house={house} />
            </div>
            <div className="house-collaps">
                <Collaps house={house} />
            </div>
        </div>
    );
};
export default House;


