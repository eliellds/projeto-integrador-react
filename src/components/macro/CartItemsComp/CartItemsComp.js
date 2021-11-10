import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'




import '../../../pages/Cart/Cart.css'
import CartItems from '../../micro/CartItems/CartItems';
import Button from "../../micro/Button/Button"


function CartItemsComp(props) {

    return (
        <>
            <div className="container mt-5">

                <div className="row justify-content-center mt-2 mb-2">
                    <h2 className="titulo col-12 mb-3">Carrinho</h2>
                    <div className="col-9 linha-divisoria mb-3"></div>
                </div>
            </div>

            <div className=" container personalizado-carrinho-desc p-0 pl-md-1 pr-md-1  ">


                <div className="row container-descricao justify-content-between align-items-center">
                    <div className="col-2"></div>
                    <h2 className=" texto-desc col-4  col-md-4">DESCRIÇÃO PRODUTOS</h2>
                    <h2 className="texto-desc col-1  "><abbr title="Quantidade unitaria">QTD UN.</abbr></h2>
                    <h2 className="texto-desc col-2 ">PREÇO </h2>
                    <h2 className="texto-desc col-2"><abbr title="Remover do carrinho">REM</abbr></h2>

                </div>
            </div>

            <div className=" container personalizado-carrinho p-0 pl-md-1 pr-md-1  ">

                <CartItems description="Caixa registradora fabricada em 1932 feita aço inoxidavel Criada por James Ritty." price=" 2,500" />
                <CartItems description="Caixa registradora fabricada em 1932 feita aço inoxidavel Criada por James Ritty." price=" 2,500" />


                <div className="row tamanho  ">
                    <div className="col-5 mb-3 mt-3 text-start">
                        <h4 className="texto-total">Frete fixo: R$<span className="numero total">150,00</span></h4>
                    </div>

                    <div className="col-5 mb-3 mt-3">
                        <h4 className="texto-total">Total:R$ <span className="numero total">{props.finalprice}</span></h4>
                    </div>


                </div>
                <div className="row justify-content-center tamanho mb-4">
                    <div className="col-9 linha-divisoria-apoio justify-self-center "></div>
                </div>
                <div className="d-flex justify-content-between mb-5">
                    <Button navigation route="/" class="btn-retorno" label="voltar"/>
                    <Button navigation route="/checkout" class="btn-comprar" label="finalizar"/>
                </div>

            </div>
        </>
    )
}

export default CartItemsComp;