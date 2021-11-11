import React from "react";
import ProductSuccess from "../../micro/productsSucess/productsSucess";
import OrderInfo from '../../micro/productsSucess/orderInfo'
import Button from "../../micro/Button/Button"
import "./OrderSummaryPage.css"


function OrderSummaryPage(props) {
    return (
        <>
            <h1>RESUMO DO PEDIDO</h1>

          
            <div className="container-fluid container-principal">
                
                <div className="row linha-geral justify-content-between">
                
                    <ul className="container col-12 col-lg-6 mx-0 d-flex flex-column">
                    <h4>Itens</h4>
                        <ProductSuccess produto="Penteadeira de madeira nobre" valorUni="R$ 9999,99" qtd="01"/>
                        <ProductSuccess produto="Penteadeira de madeira branca" valorUni="R$5999,99" qtd="01"/>
                        <div className="valor-total">Total:&nbsp;<b>{props.valorTotal}</b></div>

                    </ul>

                    <div className="container col-12 col-lg-5 mx-0">
                        <OrderInfo titulo="Pagamento" primeiraLinha="Mastercard Crédito" segundaLinha="0000-0000-0000-0000" terceiraLinha="À vista"/>
                        <OrderInfo titulo="Endereço de entrega" primeiraLinha="Casa" segundaLinha="Travessa Sinhá Moça, 120- Jardim da Conquista, São Paulo - SP" terceiraLinha="Próximo ao AMA"/>
                    </div>

                </div>

            <div className="d-flex justify-content-between">
                <Button navigation route="/checkout" class="btn-retorno align-self-center" label="voltar"/>
                <Button navigation route="/success" class="btn-comprar" label="Finalizar"/>
            </div>



            </div>
        </>
    );
}

export default OrderSummaryPage;