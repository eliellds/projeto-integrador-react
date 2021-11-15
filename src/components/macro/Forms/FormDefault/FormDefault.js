import React from 'react'
import './FormDefault.css'

function FormDefault(props) {

    return(
        <>
            <div className={props.class}>
                <h1 className="custom-title">{props.title}</h1>

                <form className={props.formClass} action={props.action} method={props.method} onSubmit={props.onSubmit}>
                    {props.children}
                </form>
            </div>
        </>
    )
}

export default FormDefault