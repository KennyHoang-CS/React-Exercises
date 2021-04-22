import React from 'react';
import './Card.css';

const Card = ({ image, name, angle }) => {
    return (
        <img className="Card" src={ image } alt={name} style={{transform: `rotate(${angle}deg)`}}></img>
    )
}

export default Card;