import React from 'react'
import './Input.css'

function Input(props) {

    return(
        <>
        <div className="input-container">
            <label>{props.label}:</label>
            <input disabled={props.disabled} className="form-input" name={props.name} placeholder={props.placeholder} type={props.type}/>
        </div>
        </>
    )
}

export default Input