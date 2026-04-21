import React, { useState } from "react";

export default function Tooltip({text,children}){
    let [show,setShow]=useState(false);
    return(
        <div 
        className="tooltip"
        onMouseEnter={()=>setShow(true)}
        onMouseLeave={()=>setShow(false)}
        >
            {children}
            {show && (<span className="tooltiptext">{text}</span>)}
        </div>
    )
}