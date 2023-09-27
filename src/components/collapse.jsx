import { useState } from "react"
import '../styles/components/collapse.css'
import angleup from '../assets/icons/angle-up-solid.svg'
import angledown from '../assets/icons/angle-down-solid.svg'

// const initialState = {transform: "rotate(180deg)",};

function Collapse (props) {
    const [ isActive, setisActive ] = useState(false);

    return (
        <>
            <div className="collapseTitle" onClick={() => setisActive(!isActive)}>
                <h2>{props.title}</h2>
                <div>
                    {isActive ? <img src={angleup} alt="Chevron up"></img> : <img src={angledown} alt="Chevron down"></img>}
                </div>
            </div>
            <div className="toggle">
                {isActive && <p>{props.content}</p>}
            </div>
        </>
    );
};

export default Collapse;