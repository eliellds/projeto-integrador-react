import React from 'react'
import './Input.css'
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

function InputPassword(props) {

    if (props.first) {
        return (
            <>
                <div className="input-container">
                    <label>{props.label}:</label>
                    <input {...props.register(props.name, { required: props.required, minLength: props.minlength, pattern: { value: props.pattern, message: props.required } })} onChange={e => props.change(e)} className="form-input" name={props.name} placeholder={props.placeholder} type={props.type} />
                </div>
                <ErrorMessage errors={props.errors} name={props.name} />
            </>
        )
    } else if (props.confirm) {
        return (
            <>
                <div className="input-container">
                    <label>{props.label}:</label>
                    <input {...props.register(props.name, {
                        validate: value => {
                            return value === props.watch("senha") || "A senhas não coincidem"
                        }
                    })
                    } onChange={e => props.change(e)} className="form-input" name={props.name} placeholder={props.placeholder} type={props.type} />
                </div>
            </>
        )
    }


}

export default InputPassword