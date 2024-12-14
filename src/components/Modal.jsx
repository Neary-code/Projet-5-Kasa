import React, { useState } from "react";
import "../styles/house.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

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
        <button className="chevron-left" onClick={goToPrevious} aria-label="Précédent">
        <FontAwesomeIcon icon={faChevronLeft} size="2x" />
        </button>

        <img
        src={slides[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className="modal-image"
        />

        <button className="chevron-right" onClick={goToNext} aria-label="Suivant">
        <FontAwesomeIcon icon={faChevronRight} size="2x" />
        </button>

        <div className="slide-counter">
        {currentIndex + 1} / {slides.length}
        </div>
    </div>
    );
};

export default Modal;



