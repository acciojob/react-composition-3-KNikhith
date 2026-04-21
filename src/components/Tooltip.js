import React, { useState } from "react";

export default function Tooltip({text,children}){
    let [show,setShow]=useState(false);
    const handleShow=()=>{
        setShow(prev=>!prev);
    }
    return(
        <div 
        className="tooltip"
        onMouseEnter={handleShow}
        onMouseLeave={handleShow}
        >
            {children}
            {show && (<span className="tooltiptext">{text}</span>)}
        </div>
    )
}