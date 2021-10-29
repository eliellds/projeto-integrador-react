import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'



import Remove from '../../assets/images/cart/remover.png'
import Produto from '../../assets/images/cart/caixaRegistradora.png'
import './Cart.css'


function Cart(props) {

    return(
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
            <div className="row carrinho-card mt-1 mb-2 mx-0 align-items-center justify-content-between">
                <div className="col-2 col-md-2  p-0">
                    <a href="#"> <img src={Produto} className="card-image" /></a>
                </div>
                <a href="#paginaProduto" className="col-4 col-md-4 pe-0  texto-carrinho">
                    Caixa registradora
                    fabricada em <span className="numero">1932 </span>
                    feita aço inoxidavel
                    Criada por James
                    Ritty.


                </a>                    
                <div className=" col-1 numero quantidade align-content-center text-center">
                <a href="#" className="controle positivo">+</a> 1 <a href="" className="controle negativo">-</a>
                </div>
                <div className="col-2 texto-carrinho  text-center">
                    R$<span className="numero">2.500</span>

                </div>
                <div className="col-2 ">
                    <a href="#" className="removerCarrinho row justify-content-center">
                        <img className="col-7 col-md-4" src={Remove} alt="" width="20px" />
                    </a>
                </div>






            </div>

    
            <div className="row tamanho  ">
                <div className="col-5 mb-3 mt-3 text-start">
                    <h4 className="texto-total">Frete fixo: R$<span className="numero total">150,00</span></h4>
                </div>

                <div className="col-5 mb-3 mt-3">
                    <h4 className="texto-total">Total:R$ <span className="numero total">7500,00</span></h4>
                </div>
                

            </div>
            <div className="row justify-content-center tamanho mb-4">
                <div className="col-9 linha-divisoria-apoio justify-self-center "></div> 
            </div>
            <div className="row tamanho justify-content-between my-4">
                <a href="./index.html" className="btn-retorno">VOLTAR</a>

                <a href="./checkout.html" className="btn-confirmacao" >FINALIZAR </a>


            </div>
            
        </div>       
     </>
    )
}

export default Cart