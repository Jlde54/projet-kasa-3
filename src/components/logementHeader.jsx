import React from 'react';
import '../styles/components/logementHeader.css';

function LogementHeader({ currentApartment }) {
  
      const name = currentApartment.host.name.split(' ');

  return (
      <div className="logementHeader">
            <div className='logementTitle'>
                  <h1>{currentApartment.title}</h1>
                  <p>{currentApartment.location}</p>
                  <div className="logementTags">
                        {currentApartment.tags.map((tag) => (
                              <span key={tag}>{tag}</span>
                              ))}
                  </div>
            </div>
            <div className="logementOwner">
                  <div className="logementOwnerDetails">
                        <h3>
                              <span>{name[0]}</span>
                              <span>{name[1]}</span>
                        </h3>
                        <div className="logementOwnerBadge">
                              <img src={currentApartment.host.picture} alt="Appartment"/>
                        </div>
                  </div>
                  <div className='logementOwnerStars'>
                         {[1,2,3,4,5].map((num) => (
                              <span key={num} className={currentApartment.rating >= num ? "on" : ""}>★</span>
                         ))}
                  </div>
            </div>
      </div>
  )
}

export default LogementHeader