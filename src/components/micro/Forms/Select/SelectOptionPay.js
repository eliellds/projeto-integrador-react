
import React, { useEffect, useState } from 'react';
import CustomOption from './CustomOption';
function SelectOptionPay(props) {
     console.log(props.freight)
    const pay = props.payments || []
    console.log(props.somarFunc(props.freight).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }))
    const [total,setTotal] =   useState((props.somarFunc()+props.freight).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }))
    

    console.log(pay)
    return pay.map(
        option => { 
           { console.log(props.freight)}
           
        
            return <>
            <CustomOption id={option.id} description={option.description} installments={option.installments} calcInstallmentsFunc={props.calcInstallments} valueTotal={total}  />
            </>
        })
}
export default SelectOptionPay