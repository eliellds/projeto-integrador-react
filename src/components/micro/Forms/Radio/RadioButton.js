import React, { useState } from 'react'

function RadioButton(props) {

    return (

        <div className={props.className}>
            <input name={props.name}
                type="radio"
                value={props.id}
                id={props.id}
                value={props.id}
                checked={props.checked}
                onChange={props.onChange}>
            </input>

            <label for={props.id}>{props.label}</label>

            <p>{props.street} {props.number} {props.complement}</p>
            <p>{props.district} {props.city} {props.state}</p>
            <p>CEP: <span className={props.class}>{props.cep}</span></p>
            <p>{props.reference}</p>

        </div>
    )
}

export default RadioButton