import React from 'react'
// NavLink is similar to Link, but with the ability to add additional styling attributes to the element
import { NavLink } from "react-router-dom"
import logo from '../assets/images/LogoKasa.png'
import '../styles/components/header.css'

function Header() {
    return (
      // -render a <header> includng a logo and a navigation bar 
      //  with 2 links to "A propos" and "Accueil" pages.
      // -isActive prop is used to determine whether the component should have the active class applied
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