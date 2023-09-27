import React from 'react'
import { NavLink } from "react-router-dom"
import logo from '../assets/images/LogoKasa.png'
import '../styles/components/header.css'

function Header() {
    return (
      <header className="header">
        <img src={logo} alt="Logo Kasa"></img>
        <nav>
          <ul className="nav">
            <li>
              <NavLink className={({ isActive }) => (isActive ? 'active' : '')} to="/" >Accueil</NavLink>
            </li>
            <li>
              <NavLink className={({ isActive }) => (isActive ? 'active' : '')} to="/apropos">A propos</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    )
  }
  
  export default Header