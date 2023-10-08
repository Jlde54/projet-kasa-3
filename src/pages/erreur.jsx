import React from 'react'
// useNavigate hook is a new direction for routing in React
// I use it replacing Navlink
import { useNavigate } from 'react-router-dom'
import '../styles/pages/erreur.css'

function Erreur() {
  const navigate = useNavigate()
  return (
    <div className="error">
      <h1 className="error-title">{404}</h1>
      <h2 className="error-subtitle">
        Oups! La page que vous demandez n'existe pas.
      </h2>
      <h3 className="error-link" onClick={() => navigate("/")}>
        Retourner sur la page d'accueil
      {/* <h3 className="error-link">
        <NavLink to="/">Retourner sur la page d'accueil</NavLink> */}
      </h3>
    </div>
  )
}
  
export default Erreur