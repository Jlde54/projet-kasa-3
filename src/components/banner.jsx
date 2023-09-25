import React from "react"
import '../styles/components/banner.css'

function Banner(props) {
    return (
        <div className="banner">
            <img className="banner-img" src={props.image} alt={props.altText} />
            <p className="banner-text">{props.text}</p>
        </div>
    )
}

export default Banner