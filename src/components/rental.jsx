import React from 'react'
import '../styles/components/rental.css'

function Rental ({image, title}) {
    return (
        <div className="rental">
            <img src={image} alt={title} className="rental_img" />
            <div className="rental_overlay"></div>
            <p className="rental_title">{title}</p>
        </div>
    )
}

export default Rental