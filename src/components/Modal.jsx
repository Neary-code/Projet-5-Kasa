import React, { useState } from 'react';
import "../styles/house.scss";
import Chevrond from "../assets/images/chevron-droit-modal.png";
import Chevrong from "../assets/images/chevron-gauche-modal.png";

const Modal = ({ slides }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const goToNext = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
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
            <div className="slide-counter">
                {currentIndex + 1} / {slides.length}
            </div>
        </div>
    );
};

export default Modal;

