import React from 'react'
import './FormDefault.css'

function FormDefault(props) {

    return(
        <>
            <div classNameName="container-form" className={props.class}>
                <h1 className="custom-title">{props.title}</h1>
                <form classNameName="form-input">
                    {props.children}
                </form>
            </div>
        </>
    )
}

export default FormDefault