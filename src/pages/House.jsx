import React from "react";
import Modal from "../components/Modal.jsx";
import Infos from "../components/Infos.jsx";
import CollapsesHouse  from "../components/Collapses-house.jsx";
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
                <Infos 
                    title={house.title}
                    location={house.location}
                    tags={house.tags}
                    host={house.host}
                    rating={house.rating}
                />
            </div>

            <div className="house-collaps">
                <CollapsesHouse
                    title="Description"
                    description={house.description}
                    />

                    <CollapsesHouse
                    title="Équipements"
                    equipements={house.equipments} 
                    />
            </div>
        </div>
    );
};

export default House;