import React from 'react'
import './FormDefault.css'

function FormDefault(props) {

    return(
        <>
            <div className={props.class}>
                <h1 className="custom-title">{props.title}</h1>
<<<<<<< HEAD
                <form className={props.formClass} action={props.action} method={props.method}>
=======
                <form classNameName="form-input" onClick={props.click}>
>>>>>>> 3163711a4fd162dc519ece239e72f2ade8421860
                    {props.children}
                </form>
            </div>
        </>
    )
}

export default FormDefault