import React from 'react'

function RadioButton(props) {

    return (

        <div className={props.className} >
        <input name={props.name} type="radio" id={props.id}></input>
            <label for={props.id}>{props.label}</label>
            <p>{props.street} {props.number} {props.complement}</p>
            <p>{props.district} {props.city} {props.state}</p>
            <p>{props.cep}</p>
            <p>{props.reference}</p>
        </div>
    )

}

export default RadioButton