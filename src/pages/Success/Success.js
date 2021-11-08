import React from 'react'
import './Success.css'
import CompletedPurchase from '../../components/macro/completedPurchase/CompletedPurchase'

function Success(props) {

    return(
        <>
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
        </>
    )
}

export default Success