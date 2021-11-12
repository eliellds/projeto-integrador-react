import React from 'react'
import './Success.css'
import SuccessPage from '../../components/macro/SuccessPage/SuccessPage'


function Success(props) {

    return (
        <>
            <SuccessPage   prazo="01/01/2022" frete={150.00}/>
        </>
    )
}

export default Success