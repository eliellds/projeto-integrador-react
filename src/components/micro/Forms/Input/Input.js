import React from 'react'
import './Input.css'

function Input(props) {

    if (props.change) {
        return (
            <>
            <div className="input-container">
                <label>{props.label}:</label>
                <input onChange={e => props.change(e)} disabled={props.disabled} className="form-input" name={props.name} placeholder={props.placeholder} type={props.type}/>
            </div>
            </>
        )
    } else if (props.input || props.value) {
        return (
            <>
            <div className="input-container">
                <label>{props.label}:</label>
                <input value={props.value} onChange={e => props.change(e)} disabled={props.disabled} className="form-input" name={props.name} placeholder={props.placeholder} type={props.type}/>
            </div>
            </>
        )
    } else {
        return(
            <>
            <div className="input-container">
                <label>{props.label}:</label>
                <input disabled={props.disabled} className="form-input" name={props.name} placeholder={props.placeholder} type={props.type}/>
            </div>
            </>
        )
    }

    
}

export default Input