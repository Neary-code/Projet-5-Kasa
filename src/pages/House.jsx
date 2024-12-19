import React from "react";
import Modal from "../components/Modal.jsx";
import Infos from "../components/Infos.jsx";
import Collapse from "../components/Collapses.jsx";
import { useParams, Navigate } from "react-router-dom";
import Datas from "../datas/logements.json";
import "../styles/collapses.scss";

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

            <div className="house-collapses">
                <Collapse title="Description">
                    <p>{house.description}</p>
                </Collapse>

                <Collapse title="Équipements">
                    <ul>
                        {house.equipments.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </Collapse>
            </div>
        </div>
    );
};

export default House;
