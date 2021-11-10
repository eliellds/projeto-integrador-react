import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Checkout.css'
import FormShippigAddress from '../../components/macro/Forms/FormCheckout/FormShippigAddress';
import FormDataCard from '../../components/macro/Forms/FormCheckout/FormDataCard';
// import FormDataBankSlip from '../../components/macro/Forms/FormCheckout/FormDataBankSlip';
import Button from '../../components/micro/Button/Button';

function Checkout(props) {

    return (
        <>
            <main class="container-fluid mb-4">

                <FormShippigAddress />

                <FormDataCard />

            </main>
        </>
    )
}

export default Checkout