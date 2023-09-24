import React from 'react'
import { Link } from "react-router-dom"
import '../styles/components/gallery.css'
import Logements from '../data/fiches_logement.json'
import Rental from "./rental"

function Gallery() {
    return (
        <div className="gallery">
            {Logements.map((logement) => {
                return (
                    <article key={logement.id}>
                        {/* <Link to={`/fichelogement/${logement.id}`}> */}
                        <Link to="/fichelogement">
                            <Rental image={logement.cover} title={logement.title} />
                        </Link>
                    </article>
                );
            })}
        </div>
    );
};

export default Gallery