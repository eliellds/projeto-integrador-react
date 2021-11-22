
import React from 'react'

function SelectCard(props) {
    const paymentMethod = props.paymentMethod || []

    function getPaymentMethod() {
        return paymentMethod.map(
            option =>  { 
                if(option.id>1 && option.id<=3){
                return <option key={option.id} value={option.id}>{option.description} {option.installments}</option>}
                

                if(option.id>=4){
                    return <option key={option.id} value={option.id}>{option.description} {option.installments +"x s/JUROS"}</option>
                }

                }
            

            
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