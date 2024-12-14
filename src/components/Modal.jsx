import React, { useState } from "react";
import "../styles/house.scss"; // Assurez-vous que ce fichier contient les styles nécessaires
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
      {/* Bouton pour aller à la diapositive précédente */}
        <button className="chevron-left" onClick={goToPrevious} aria-label="Précédent">
        <FontAwesomeIcon icon={faChevronLeft} size="2x" />
        </button>

      {/* Image de la diapositive actuelle */}
        <img
        src={slides[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className="modal-image"
        />

      {/* Bouton pour aller à la diapositive suivante */}
        <button className="chevron-right" onClick={goToNext} aria-label="Suivant">
        <FontAwesomeIcon icon={faChevronRight} size="2x" />
        </button>

      {/* Compteur des diapositives */}
        <div className="slide-counter">
        {currentIndex + 1} / {slides.length}
        </div>
    </div>
    );
};

export default Modal;



