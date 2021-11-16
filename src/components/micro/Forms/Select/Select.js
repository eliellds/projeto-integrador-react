import React from 'react'

function Select(props) {
    const options = props.options || []
    

    function getOptions(){
        return options.map(
            function(option){
            return <option key={option.id} value={option.id}>{option.subjectDescription}</option>
                }
        )
    
    }

    return(
        <div className="input-container">
            <label>{props.label}</label>
            <select onChange={e => props.change(e)} disabled={props.disabled} className="form-input col-12">
                {getOptions()}
            </select>
        </div>
    )
}

export default Select