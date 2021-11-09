import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Checkout.css'
import H2 from "../../components/micro/Title/H2"
import FormShippigAddress from '../../components/macro/Forms/FormCheckout/FormShippigAddress';
import FormDataCard from '../../components/macro/Forms/FormCheckout/FormDataCard';
import Button from '../../components/micro/Button/Button';

function Checkout(props) {

    return (
        <>
            <main class="container-fluid mb-4">
                {/* 
                <H2 class="titulo py-3" h2="Dados Pessoais"></H2> */}

                <FormShippigAddress />
                {/* 
                <H2 class="titulo py-3" h2="Pagamento"></H2> */}

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