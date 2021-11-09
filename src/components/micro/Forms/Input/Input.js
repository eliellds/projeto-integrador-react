import React from 'react'
import './Input.css'

function Input(props) {

    return(
        <>
        <div className="input-container">
            <label>{props.label}:</label>
            <input className="form-input" name={props.name} placeholder={props.placeholder} type={props.type}/>
        </div>
        </>
    )
}

export default Input