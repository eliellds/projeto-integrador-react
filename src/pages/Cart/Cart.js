import React from 'react'
import './Cart.css'
import Remove from '../../assets/imgs/cart/remove.png'

function Cart(props) {

    return(
        <>
        <div className="container mt-5">
            
            <div className="row justify-content-center mt-2 mb-2">
                <h2 className="titulo col-12 mb-3">Carrinho</h2>
                <div className="col-9 linha-divisoria mb-3"></div> 
            </div>
        </div>
    
        <div className=" container
        personalizado-carrinho-desc p-0 pl-md-1 pr-md-1  ">
        

            <div className="row container-descricao justify-content-between align-items-center">
                <h2 className=" ms-4 texto-desc col-5  col-md-4 col">
                    DESCRIÇÃO PRODUTOS

                </h2>
                <h2 className="texto-desc col-2 ms-5 "><abbr title="Quantidade unitaria">QTD UN.</abbr></h2>
                <h2 className="texto-desc col-2 me-5">PREÇO </h2>

            </div>



        </div>
        <div className=" container
        personalizado-carrinho p-0 pl-md-1 pr-md-1  ">
            <div className="row carrinho-card mt-1 mb-2 mx-0 align-items-center justify-content-between">
                <div className="col-2 col-md-1  p-0">
                    <a href="#"> <img src="./jose/carrinhoCard/images/caixaRegistradora.png" className="card-image " alt=""/></a>
                </div>
                <a href="#paginaProduto" className="col-4 col-md-3  texto-carrinho">
                    Caixa registradora
                    <br/>fabricada em <span className="numero">1932</span><br/>
                    feita aço inoxidavel<br/>
                    Criada por James
                    Ritty.


                </a>
                <div className=" col-1 numero quantidade align-content-center">
                    <a href="" className="controle negativo">-</a><br/> 01 <br/><a href="" className="controle positivo">+</a>
                </div>
                <div className="col-md-2 col-lg-1 col-2 texto-carrinho ms-4">
                    R$<span className="numero">2.500</span>

                </div>
                <div className="col-1 ms-0"><a href="#" className="removerCarrinho"><img src={Remove} alt="" /> </a></div>






            </div>

    
            <div className="row tamanho  ">
                <div className="col-11 mb-3 mt-3">
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