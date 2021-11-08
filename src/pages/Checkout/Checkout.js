import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Checkout.css'
import H2 from "../../components/micro/Title/H2"
import FormShippigAddress from '../../components/macro/Forms/FormCheckout/FormShipAddress';
import FormDataCard from '../../components/macro/Forms/FormCheckout/FormDataCard';

function Checkout(props) {

    return (
        <>
            <main class="container-fluid mb-4">

                <H2 class="titulo py-3" h2="Dados Pessoais"></H2>

                <FormShippigAddress />

                <H2 class="titulo py-3" h2="Pagamento"></H2>

                <div class="escolha row justify-content-around mb-4 ">

                    <a href="#" class=" col-4 cartao forma-pagamento"><h2>Cartão</h2></a>
                    <a href="#" class="col-4 forma-pagamento boleto"><h2>Boleto</h2></a>

                </div>

                <div className=" row pagamento justify-content-center d-none">
                    <div className="col-8 justify-content-center text-center ">
                        Numero do boleto: 00000000000000000000000000000000000000000000000000000000000000000
                    </div>
                </div>

                <FormDataCard />

            </main>
        </>
    )
}

export default Checkout