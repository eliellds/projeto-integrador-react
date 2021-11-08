import React from 'react'
import './Success.css'
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import CompletedPurchase from '../../components/macro/completedPurchase/CompletedPurchase'
=======
import SuccessPage from '../../components/macro/SuccessPage/SuccessPage'
>>>>>>> 1a6ac873830ade77fb39460b7b057558b6e78aa6
=======
=======
>>>>>>> 2da0a141fcdf42d2e8dd808c3ddabed4b5371528
import SuccessPage from '../../components/macro/SuccessPage/SuccessPage'
import CompletedPurchase from '../../components/macro/completedPurchase/CompletedPurchase'
<<<<<<< HEAD
>>>>>>> 9622ccea7cc439c443de91d19eb665ed01a10c6a
>>>>>>> 608b1d2128ef6345c201a85354678e64f62b3449
=======

>>>>>>> 2da0a141fcdf42d2e8dd808c3ddabed4b5371528

function Success(props) {

    return (
        <>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
            <CompletedPurchase/>
=======
              <div class="container-fluid container-principal">

<div class="row linha-geral justify-content-between">

    <ul class="container col-12 col-lg-6 mx-0 d-flex flex-column">

        <h4>Itens</h4>

        <li class="row bloco-produto item-1">

            <div class="atributos tipo-atributo col-3 d-none d-sm-flex">Desc.:</div>
            <div class="atributos atributo-descricao col-12 col-sm-9">Penteadeira (1918) Madeira</div>

            <div class="atributos tipo-atributo col-3 d-none d-sm-flex">Valor:</div>
            <div class="atributos atributo-valor col-12 col-sm-9">R$1999,00</div>

            <div class="atributos tipo-atributo col-3 d-none d-sm-flex">Qtd.:</div>
            <div class="atributos atributo-qtd col-12 col-sm-9">01</div>
        </li>

        <li class="row bloco-produto item-2">

            <div class="atributos tipo-atributo col-3 d-none d-sm-flex">Desc.:</div>
            <div class="atributos atributo-descricao col-12 col-sm-9">Chás (1908)</div>

            <div class="atributos tipo-atributo col-3 d-none d-sm-flex">Valor:</div>
            <div class="atributos atributo-valor col-12 col-sm-9">R$99,99</div>

            <div class="atributos tipo-atributo col-3 d-none d-sm-flex">Qtd.:</div>
            <div class="atributos atributo-qtd col-12 col-sm-9">01</div>
        </li>

        <li class="row bloco-produto item-3">

            <div class="atributos tipo-atributo col-3 d-none d-sm-flex">Desc.:</div>
            <div class="atributos atributo-descricao col-12 col-sm-9">Penteadeira (1908) Madeira</div>

            <div class="atributos tipo-atributo col-3 d-none d-sm-flex">Valor:</div>
            <div class="atributos atributo-valor col-12 col-sm-9">R$1999,00</div>

            <div class="atributos tipo-atributo col-3 d-none d-sm-flex">Qtd.:</div>
            <div class="atributos atributo-qtd col-12 col-sm-9">01</div>
        </li>

        <div class="valor-total">Total:&nbsp;<b>R$4097,99</b></div>

    </ul>

    <div class="container col-12 col-lg-5 mx-0">

        <div class="row">
            <ul class="lista-pagamento col-12 mx-0 d-flex flex-column">

                <h4>Pagamento</h4>

                <li class="row pagamento-lista">
                    <div class="atributos tipo-pagamento">Mastercard Crédito</div>
                    <div class="atributos numero-cartao">0000-0000-0000-0000</div>
                    <div class="atributos tipo-pagamento">À vista</div>
                </li>
            </ul>
        </div>

        <div class="row">
            <ul class="lista-pagamento col-12 mx-0 d-flex flex-column">

                <h4>Endereço de entrega</h4>

                <li class="row endereco-lista">
                    <div class="atributos nome-endereco">Casa</div>
                    <div class="atributos descricao-endereco">
                        Travessa Sinhá Moça, <b>120</b> - Jardim da Conquista, São Paulo - SP
                    </div>
                    <div class="atributos referencia-endereco">Próximo ao AMA</div>
                </li>
            </ul>
        </div>
    </div>

</div>

<form action="./compra-concluida.html" class="botoes-navegacao d-flex justify-content-between">

    <a href="./checkout.html" class="btn-retorno retorno-resumo">VOLTAR</a>
    <input type="submit" value="FINALIZAR COMPRA" class="btn-confirmacao btn-finalizar"/>

</form>

</div>
>>>>>>> 7370f4c96c36273154f056bb0254c308d5168b5e
=======
            <SuccessPage numPedido={999999} valorTotal="R$ 9999,99" prazo="01/01/2022"/>
>>>>>>> 1a6ac873830ade77fb39460b7b057558b6e78aa6
=======
<<<<<<< HEAD
            <SuccessPage numPedido={999999} valorTotal="R$ 9999,99" prazo="01/01/2022"/>
=======
            <CompletedPurchase/>
>>>>>>> 9622ccea7cc439c443de91d19eb665ed01a10c6a
>>>>>>> 608b1d2128ef6345c201a85354678e64f62b3449
=======
            <SuccessPage numPedido={999999} valorTotal="R$ 9999,99" prazo="01/01/2025"/>
>>>>>>> 2da0a141fcdf42d2e8dd808c3ddabed4b5371528
        </>
    )
}

export default Success