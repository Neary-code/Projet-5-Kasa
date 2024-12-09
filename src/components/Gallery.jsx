import React from "react";
import { Link } from "react-router-dom";
import Datas from "../datas/logements.json";

const Gallery = () => {
    return (
        <div className="gallery">
            {Datas.map((item) => (
                <div key={item.id} className="gallery-item">
                    <p className="gallery-title">{item.title}</p>
                    <Link to={`/house/${item.id}`}></Link>
                    <img src={item.cover} alt={item.title} className="gallery-image" />
                </div>
            ))}
        </div>
    );
};

export default Gallery;



