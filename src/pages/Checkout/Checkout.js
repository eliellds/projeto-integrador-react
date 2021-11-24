import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Checkout.css'
import { useHistory } from 'react-router';
import FormShippigAddress from '../../components/macro/Forms/FormCheckout/FormShippigAddress';


function Checkout(props) {
 

    return (
        <>
            <main class="container-fluid mb-4">
                
                <FormShippigAddress />

                {/* <FormDataCard/> */}

                {/* <div className="row justify-content-around py-4">
                    <Button label="Voltar" onclick={history.goBack} class="btn-retorno"  />
                    <Button onclick={envio} label="Finalizar"  class="btn-confirmacao" type="submit" />
                </div> */}

            </main>
        </>
    )
}

export default Checkout