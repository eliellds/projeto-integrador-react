import React, { useState } from 'react'
function CustomOption(props){
   const [totalValue,setTotal] =useState(props.valueTotal)
   const [installmentsPrice,setInstallments] = useState(props.installmentsPrice)

    if (props.id == 3) {
        return <option key={props.id} value={props.id}>{props.description}  {totalValue}</option>
    }

    if (props.id >= 4 && props.id < 13) {
        return <option key={props.id} value={props.id}>{props.description} {props.installments + " x de "+ installmentsPrice}</option>
    }else{
        return<></>
    }
}
export default CustomOption