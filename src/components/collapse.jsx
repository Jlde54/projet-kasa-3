import React from "react"
import { useRef, useEffect, useState } from "react"
import '../styles/components/collapse.css'
import angleup from '../assets/icons/angle-up-solid.svg'

function Collapse(props) {

    const [isExpanded, setIsExpanded] = useState(false);

    const toggleIsExpanded = () => {
    setIsExpanded((isExpanded) => !isExpanded);
    }

    const ref = useRef(null);

    const [height, setHeight] = useState(0);

    useEffect(() => {
        if (ref.current) {
            setHeight (ref.current.offsetHeight)
        }
    }, []);

    return (
    <>
        <div className="collapseTitle" onClick={toggleIsExpanded}>
            <h2>{props.title}</h2>
            <div>
                {isExpanded ? <img src={angleup} alt="Chevron up"></img> : <img className= "rotate" src={angleup} alt="Chevron down"></img>}
            </div>
        </div>
        <div className="collapseToggle" style={{ height: isExpanded ? height : 0 }}>
            <p ref={ref} className="fadeIn">{props.content}</p>
        </div>
    </>
  );
};

export default Collapse