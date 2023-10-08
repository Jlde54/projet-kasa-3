import React from 'react'
import '../styles/components/card.css'

function Card ({image, title}) {
    return (
        // render a card with image, title and overlay
        <div className="card">
            <img src={image} alt={title} className="cardImg" />
            <div className="cardOverlay"></div>
            <p className="cardTitle">{title}</p>
        </div>
    )
}

export default Card