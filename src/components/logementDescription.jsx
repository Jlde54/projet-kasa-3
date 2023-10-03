import React from 'react'
import '../styles/components/logementDescription.css'
import Collapse from '../components/collapse';


function Fichelogementdescription ({ currentApartment }) {
    return (
        <div className='ficheLogementDescription'>
                <div className="ficheLogemenDropdown">
                    <Collapse title="Description" content={currentApartment.description} />
                </div>
                <div className="ficheLogemenDropdown">
                    <Collapse title="Équipements" content={currentApartment.equipments.map((eq, index) => (
                    <li key={index}>{eq}</li>
                    ))} />
                </div>
            </div>
    )
}

export default Fichelogementdescription