import React from 'react'
import logo from '../assets/images/LogoKasa.png'
import '../styles/components/footer.css'

function Footer() {
    return (
        <footer className='footer'>
            <img src={logo} alt="Logo Kasa"></img>
            <p className='copyright'>&copy; 2023 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer