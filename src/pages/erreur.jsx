import React from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/pages/erreur.css'

function Erreur() {
  return (
    <div className="error">
      <h1 className="error-title">{404}</h1>
      <h2 className="error-subtitle">
        Oups! La page que vous demandez n'existe pas.
      </h2>
      <h3 className="error-link">
        <NavLink to="/">Retourner sur la page d'accueil</NavLink>
      </h3>
    </div>
  )
}
  
export default Erreur