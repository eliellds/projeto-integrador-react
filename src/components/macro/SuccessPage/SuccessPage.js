import React from "react";
import ProductSuccess from "../../micro/productsSucess/productsSucess";
import OrderInfo from '../../micro/productsSucess/orderInfo'
import Button from "../../micro/Button/Button"


function SuccessPage(props) {
    return (
        <>
            <h1>OBRIGADO!</h1>

            <p class="msg-compra">
                Seu pedido foi <em>concluído com sucesso</em> e os dados da compra foram enviados para seu e-mail.
            </p>
            <div class="container-fluid container-principal">
                <h2 class="numero-pedido col-12">NÚMERO DO PEDIDO:<b>&nbsp;{props.numPedido}</b></h2>

                <div class="row linha-geral justify-content-between">
                
                    <ul class="container col-12 col-lg-6 mx-0 d-flex flex-column">
                    <h4>Itens</h4>
                        <ProductSuccess produto="Penteadeira de madeira nobre" valorUni="R$ 9999,99" qtd="01"/>
                        <ProductSuccess produto="Penteadeira de madeira branca" valorUni="R$5999,99" qtd="01"/>
                        <div class="valor-total">Total:&nbsp;<b>{props.valorTotal}</b></div>

                    </ul>

                    <div class="container col-12 col-lg-5 mx-0">
                        <OrderInfo titulo="Pagamento" primeiraLinha="Mastercard Crédito" segundaLinha="0000-0000-0000-0000" terceiraLinha="À vista"/>
                        <OrderInfo titulo="Frete" primeiraLinha="Sedex" segundaLinha="Data estimada de entrega: 12/12/2021" terceiraLinha="Valor: R$ 250,00"/>
                        <OrderInfo titulo="Endereço de entrega" primeiraLinha="Casa" segundaLinha="Travessa Sinhá Moça, 120- Jardim da Conquista, São Paulo - SP" terceiraLinha="Próximo ao AMA"/>
                    </div>

                </div>
                <div class="texto-prazo">Prazo estimado para entrega: <b>{props.prazo}</b></div>
                <Button navigation route="/dashboard" class="btn-retorno" label="PEDIDOS"/>


            </div>
        </>
    );
}

export default SuccessPage;