import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Checkout.css'
import FormShippigAddress from '../../components/macro/Forms/FormCheckout/FormShippigAddress';
import FormDataCard from '../../components/macro/Forms/FormCheckout/FormDataCard';
// import FormDataBankSlip from '../../components/macro/Forms/FormCheckout/FormDataBankSlip';
import Button from '../../components/micro/Button/Button';

function Checkout(props) {

    function envio() {
        for( var index = 0; index < document.forms.length; index++ ) {
            document.forms[index].submit();
        };
    }

    return (
        <>
            <main class="container-fluid mb-4">

                <FormShippigAddress />

                <FormDataCard />

                <div className="row justify-content-around py-4">
                    <Button label="Voltar" navigation route="/cart" class="btn-retorno"  />
                    <Button onclick={envio} label="Finalizar"  class="btn-confirmacao" type="submit" />
                </div>

            </main>
        </>
    )
}

export default Checkout