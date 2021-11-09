import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Checkout.css'
import FormShippigAddress from '../../components/macro/Forms/FormCheckout/FormShippigAddress';
import FormDataCard from '../../components/macro/Forms/FormCheckout/FormDataCard';
import Button from '../../components/micro/Button/Button';

function Checkout(props) {

    return (
        <>
            <main class="container-fluid mb-4">

                <FormShippigAddress />

                <FormDataCard />

                <div className="row justify-content-around py-4">
                    <Button label="Voltar" navigation route="./cadastro" class="btn-retorno" onclick="null" />
                    <Button label="Finalizar" onclick="null" class="btn-confirmacao" type="submit" />
                </div>

            </main>
        </>
    )
}

export default Checkout