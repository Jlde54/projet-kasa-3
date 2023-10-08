import React from 'react'
import logo from '../assets/images/LogoKasa.png'
import '../styles/components/footer.css'

function Footer() {
    return (
        // render a footer with logo and text
        <footer className='footer'>
            <img src={logo} alt="Logo Kasa"></img>
            <div className='copyright'>&copy; 2023 Kasa. All rights reserved</div>
        </footer>
    )
}

export default Footer