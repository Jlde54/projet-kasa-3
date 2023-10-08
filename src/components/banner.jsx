import React from "react"
import '../styles/components/banner.css'

function Banner(props) {
    return (
        // render a banner with image, text and overlay
        <div className="banner">
            <img className="banner-img" src={props.image} alt={props.altText} />
            <div className="banner-overlay"></div>
            <p className="banner-text">{props.text}</p>
        </div>
    )
}

export default Banner