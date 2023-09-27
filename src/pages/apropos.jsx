import React from "react"
import Banner from '../components/banner.jsx'
import AproposImage from '../assets/images/A_propos_image.png'
import '../styles/pages/apropos.css'
import Collapses from "../data/collapses.json"
import Collapse from '../components/collapse'

function Apropos() {
    return (
      <>
        <Banner image={AproposImage} altText="Banner" text=""/>
        <div className="collapse">
          <div className="dropdown">
            {Collapses.map((item) => {
                return (
                  <div key={item.id} className="collapse-item">
                    <Collapse content={item.content} title={item.title} />
                  </div>
                )
                })}
          </div>
        </div>
      </>
    )
}
  
  export default Apropos
  