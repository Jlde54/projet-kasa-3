import React from "react"
import { useRef, useEffect, useState } from "react"
import '../styles/components/collapse.css'
import angledown from '../assets/icons/angle-down-solid.svg'

function Collapse(props) { // arguments got from parent components
    // -set up the state variable "isExpanded" to record if the collapse is expanded or not
    const [isExpanded, setIsExpanded] = useState(false);

    // -function inverting the state of the variable "isExpanded" when the collapse title is clicked
    const toggleIsExpanded = () => {
    setIsExpanded((isExpanded) => !isExpanded);
    }
    // -create a "ref" connected to the paragrafe surounding "props.content"
    // -useRef allows to keep the reference of an DOM element to obtain some information from it
    const ref = useRef(null);

    // -set up the state variable "height" to store the height of the content when expanded 
    const [height, setHeight] = useState(0);

    // -update the variable "height" with the "offsetHeight" of the element
    // -useEffect tells what the component has to do afte render.
        useEffect(() => {
            setHeight (ref.current.offsetHeight)
    }, []);

    return (
        // -onClick event on the <div> "collapseTitle" to call "toggleIsExpanded" function after each clic
        // -the arrow (chevron) rotation is applied according to "isExpanded" value
        // -inline style attribute used to allocate the height 
    <>
        <div className="collapseTitle" onClick={toggleIsExpanded}>
            <h2>{props.title}</h2>
            <div>
                {isExpanded ? <img src={angledown} alt="Chevron down"></img> : <img className= "rotate" src={angledown} alt="Chevron up"></img>}
            </div>
        </div>
        <div className="collapseToggle" style={{ height: isExpanded ? height : 0 }}>
            <p ref={ref}>{props.content}</p>
        </div>
    </>
  );
};

export default Collapse