import React from "react"
import Banner from '../components/banner.jsx'
import Gallery from '../components/gallery.jsx'
import AccueilImage from '../assets/images/Accueil_image.png'
import '../styles/pages/accueil.css'

function Accueil() {
  return (
    <div>
        <Banner image={AccueilImage} altText="Banner" text="Chez vous, partout et ailleurs"/>
        <Gallery />
    </div>
  )
}

export default Accueil
