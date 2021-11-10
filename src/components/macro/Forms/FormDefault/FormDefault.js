import React from 'react'
import './FormDefault.css'

function FormDefault(props) {

    return(
        <>
            <div className={props.class}>
                <h1 className="custom-title">{props.title}</h1>
                <form classNameName="form-input" onClick={props.click}>
                    {props.children}
                </form>
            </div>
        </>
    )
}

export default FormDefault