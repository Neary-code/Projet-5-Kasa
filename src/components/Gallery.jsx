import React from "react";
import Datas from "../datas/logements.json";

const Gallery = () => {
    return (
        <div className="gallery">
            {Datas.map((item) => (
                <div key={item.id} className="gallery-item">
                    <img src={item.cover} alt={item.title} className="gallery-image" />
                    <p className="gallery-title">{item.title}</p>
                </div>
            ))}
        </div>
    );
};

export default Gallery;



