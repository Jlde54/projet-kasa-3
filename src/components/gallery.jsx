import React from 'react'
import { NavLink } from "react-router-dom"
import '../styles/components/gallery.css'
import Logements from '../data/fiches_logement.json'
import Card from "./card"

function Gallery() {
    return (
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