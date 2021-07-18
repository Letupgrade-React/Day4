import React from 'react'
import './style.css';
const Button = (props) =>{
    return(
        <button {...props} className="btn">{props.text}</button>
    )
}

export default Button