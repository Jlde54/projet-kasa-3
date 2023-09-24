import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Accueil from './pages/accueil'
import Apropos from './pages/apropos'
import Fichelogement from './pages/fichelogement'
import Erreur from './pages/erreur'

import Header from './components/header'
import Footer from './components/footer'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/apropos" element={<Apropos />} />
        <Route path="/fichelogement" element={<Fichelogement />} />
        <Route path="*" element={<Erreur />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)