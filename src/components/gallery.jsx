import React from 'react'
import { NavLink } from "react-router-dom"
import '../styles/components/gallery.css'
import Logements from '../data/fiches_logement.json'
import Card from "./card"

function Gallery() {
    return (
        // -render a gallery with all apartments coming from the database JSON
        // -for each apartment render an article which is "cliquable" 
        //  to connect to the component "fichelogement/id"
        // -The component "Card" is called with 2 parameters (an image and a title)
        <div className="gallery">
            {Logements.map((logement) => {
                return (
                    <article key={logement.id}>
                        <NavLink to={`/fichelogement/${logement.id}`}>
                            <Card image={logement.cover} title={logement.title} />
                        </NavLink>
                    </article>
                );
            })}
        </div>
    );
};

export default Gallery