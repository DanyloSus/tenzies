import React from "react"

export default function Die(props) {
    return (
        <div 
            onClick={props.handleChange}  
            className={props.isHeld ? "die-face on" : "die-face"}
        >
            <h2 className="die-num">{props.value}</h2>
        </div>
    )
}