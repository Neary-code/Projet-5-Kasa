import React, { useState } from 'react';
import Datas from "../datas/logements.json";
import "../styles/modal.scss";
import Chevrond from "../assets/images/chevron-droit-modal.png";
import Chevrong from "../assets/images/chevron-gauche-modal.png";

const Modal = ({ slides }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;  // Vérification de la déclaration
        setCurrentIndex(newIndex);
    };

    const goToNext = () => {
        const isLastSlide = currentIndex === slides.length - 1;  // Vérification de la déclaration
        const newIndex = isLastSlide ? 0 : currentIndex + 1;  // Vérification de la déclaration
        setCurrentIndex(newIndex);
    };

    return (
        <div className="modal">
            <img 
                src={Chevrong} 
                alt="Précédent" 
                onClick={goToPrevious} 
                className="chevron-left"
            />
            <img 
                src={slides[currentIndex]} 
                alt={`Slide ${currentIndex + 1}`} 
                className="modal-image" 
            />
            <img 
                src={Chevrond} 
                alt="Suivant" 
                onClick={goToNext} 
                className="chevron-right"
            />
        </div>
    );
};

export default Modal;

