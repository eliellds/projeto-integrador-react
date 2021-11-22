import React from 'react'
import './Input.css'

function InputCep(props) {

    return (
        <>
            <div className="input-container">
                <label>{props.label}:</label>
                <input maxLength={props.length} value={props.value} onBlur={e => props.blur(e)} onChange={e => props.change(e)} disabled={props.disabled} className="form-input" name={props.name} placeholder={props.placeholder} type={props.type} />
            </div>
        </>
    )

}

export default InputCep