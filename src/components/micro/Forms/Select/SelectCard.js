
import React from 'react'

function SelectCard(props) {
    const paymentMethod = props.paymentMethod || []

    function getPaymentMethod() {
        return paymentMethod.map(
            option =>  { return <option key={option.id} value={option.id}>{option.description} {option.installments}</option>}
        )
    }

    return (
        <div className="input-container">
            <label>{props.label}</label>
            <select onChange={e => props.change(e)} className="form-input col-12">
                {getPaymentMethod()}
            </select>
        </div>
    )
}

export default SelectCard