import React from 'react'
import '../styles/components/card.css'

function Card ({image, title}) {
    return (
        <div className="card">
            <img src={image} alt={title} className="cardImg" />
            <div className="cardOverlay"></div>
            <p className="cardTitle">{title}</p>
        </div>
    )
}

export default Card