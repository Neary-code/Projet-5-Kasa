import React from 'react';
import { useParams } from 'react-router-dom';
import Datas from '../datas/logements.json';
import Modal from '../components/Modal.jsx';
import Tags from '../components/Infos.jsx';
import Error404 from "../pages/Error404.jsx";
import Collaps from '../components/Collaps-house.jsx';

const House = () => {
    const { id } = useParams();

    const house = Datas.find(item => item.id === id);

    if (!house) {
        return <Error404 />;
    }

    return (
        <div className="Modal">
            <Modal slides={house.pictures} />

            <div className="Description-container">
                <h1>{house.title}</h1>
                <p>{house.location}</p>
                <Tags tags={house.tags} />
            </div>

            <span className="Host-rating">
                <div className="host-name">{house.host.name}</div>
                <div className="avatar">
                    <img src={house.host.picture} alt={house.host.name} />
                </div>
            </span>

            <div className="stars">
                {Array.from({ length: parseInt(house.rating) }).map((_, index) => (
                    <span key={index} className="star"></span>
                ))}
            </div>

            <Collaps className="collapsDescription" title="Description">
                <p>{house.description}</p>
            </Collaps>

            <Collaps className="collapsEquipements" title="Equipements">
                <ul>
                    {house.equipments.map((equip, index) => (
                        <li key={index}>{equip}</li>
                    ))}
                </ul>
            </Collaps>
        </div>
    );
};

export default House;


