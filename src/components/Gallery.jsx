import React from 'react';
import PropTypes from 'prop-types';

function Gallery(props) {
    return (
        <div className='card'>
            <img className='card-image' id={props.id} src={props.cover} alt="Logement"/>
            <p className='card-title'>{props.title}</p>
        </div>
    );
}

Gallery.propTypes = {
    id: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
};

export default Gallery;

