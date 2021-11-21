import React from 'react'
import './Input.css'
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import InputMask from "react-input-mask";

function InputHook(props) {

    const onlyNumbers = (str) => str.replace(/[^0-9]/g, "")

    if (props.hook) {
        return (
            <>
                <div className="input-container">
                    <label>{props.label}:</label>
                    {props.change
                        ? <input maxLength={props.maxlength} {...props.register(props.name, { required: props.required, maxLength: props.maxlength, minLength: props.minlength, pattern: { value: props.pattern, message: props.required } })} onChange={e => props.change(e)} className={`form-input ${props.border}`} name={props.name} placeholder={props.placeholder} type={props.type} />
                        : <input maxLength={props.maxlength} {...props.register(props.name, { required: props.required, maxLength: props.maxlength, minLength: props.minlength, pattern: { value: props.pattern, message: props.required } })} className={`form-input ${props.border}`} name={props.name} placeholder={props.placeholder} type={props.type} />
                    }
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
                            console.log(props.watch("senha"))
                            return value === props.watch("senha") || <span className="text-danger">As senhas não coincidem</span>
                        }
                    })
                    } onBlur={e => props.blur(e)} className="form-input" name={props.name} placeholder={props.placeholder} type={props.type} />
                </div>
            </>
        )
    } else if (props.mask) {
        return (
            <>
                <div className="input-container">
                    <label>{props.label}:</label>
                    {props.change
                        ? <InputMask mask={props.mask} {...props.register(props.name, { required: props.required, maxLength: props.maxlength, minLength: props.minlength, pattern: { value: props.pattern, message: props.required } })} onChange={e => props.change(e)} className={`form-input ${props.border}`} name={props.name} placeholder={props.placeholder} type={props.type} />
                        : <InputMask mask={props.mask} {...props.register(props.name, { required: props.required, maxLength: props.maxlength, minLength: props.minlength, pattern: { value: props.pattern, message: props.required } })} className={`form-input ${props.border}`} name={props.name} placeholder={props.placeholder} type={props.type} />
                    }
                </div>
                <ErrorMessage errors={props.errors} name={props.name} />
            </>
        )
    }


}

export default InputHook