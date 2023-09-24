import React from 'react'
import { Link } from "react-router-dom"
import logo from '../assets/images/LogoKasa.png'
import '../styles/components/header.css'

function Header() {
    return (
      <header className="header">
        <img src={logo} alt="Logo Kasa"></img>
        <nav>
          <ul className="nav">
            <li>
              <Link to="/">Accueil</Link>
            </li>
            <li>
              <Link to="/apropos">A propos</Link>
            </li>
          </ul>
        </nav>
      </header>
    )
  }
  
  export default Header