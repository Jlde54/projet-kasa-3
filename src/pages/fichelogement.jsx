import React from 'react'
import { useParams } from 'react-router-dom'
import '../styles/pages/fichelogement.css'
import Logements from '../data/fiches_logement.json'
import LogementSlideShow from '../components/logementSlideShow'
import LogementHeader from '../components/logementHeader'
import LogementDescription from '../components/logementDescription'
import Erreur from './erreur'

function Fichelogement() {

    // Retrieve the id of the current Apartment
    const idLogement = useParams("id").id
    const currentApartment = Logements.filter(item => item.id === idLogement);

    if (currentApartment.length === 0) {
        return (
            <Erreur />
        )
    }

    return (
        <div className="ficheLogement">
            <LogementSlideShow pictures={currentApartment[0].pictures} numberPhotos={currentApartment[0].pictures.length} />
            <LogementHeader currentApartment={currentApartment[0]} />
            <LogementDescription currentApartment={currentApartment[0]} />
        </div>
    )
 }
  
  export default Fichelogement