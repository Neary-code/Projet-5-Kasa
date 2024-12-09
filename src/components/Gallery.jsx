import React from "react";
import Datas from "../datas/logements.json";

const Gallery = () => {
    return (
        <div className="gallery">
            {Datas.map((item) => (
                <div key={item.id} className="gallery-item">
                    <p className="gallery-title">{item.title}</p>
                    <img src={item.cover} alt={item.title} className="gallery-image" />
                </div>
            ))}
        </div>
    );
};

export default Gallery;



