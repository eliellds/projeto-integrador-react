import React from 'react'
import './Success.css'
import SuccessPage from '../../components/macro/SuccessPage/SuccessPage'


function Success(props) {

    return (
        <>
            <SuccessPage numPedido={999999} valorTotal="R$ 9999,99" prazo="01/01/2022"/>
        </>
    )
}

export default Success