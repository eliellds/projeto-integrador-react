import React from 'react'
import './Input.css'
import { useForm } from "react-hook-form";
import MaskedInput from 'react-text-mask'
import { ErrorMessage } from "@hookform/error-message";

function InputCep(props) {

    return (
        <>
            <div className="input-container">
                <label>{props.label}:</label>
                <MaskedInput mask={props.mask} value={props.value} {...props.register(props.name, { required: props.required, maxLength: props.maxlength, minLength: props.minlength, pattern: { value: props.pattern, message: props.required } })} onChange={e => props.change(e)} onBlur={e => props.blur(e)} disabled={props.disabled} className="form-input" name={props.name} placeholder={props.placeholder} type={props.type} />
            </div>
            <ErrorMessage errors={props.errors} name={props.name} />
        </>
    )

}

export default InputCep