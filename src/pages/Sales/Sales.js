import React from "react";
import './Sales.css';
import Chas from '../../assets/images/cards/chas-schumacher-glamour.jpg'
import Select from "../../components/micro/Forms/Select/Select";

export default function Sales(props) {
    const filter = [
        {
            id:1 ,
            subjectDescription:"Maior Valor"

        },
        {
            id:2 ,
            subjectDescription:"Menor Valor"

        },
        {
            id:3 ,
            subjectDescription:"Maior Desconto"

        },
        {
            id:4 ,
            subjectDescription:"Mais Antigo"

        },
        {
            id:5 ,
            subjectDescription:"Mais Novo"

        },
    ]
    return (
        <>

        {/* 10 por cento */}

        <div class="container mt-2">

            <div class="row justify-content-center mb-3 p-0 mx-0">
                {/* <!-- nome da categoria --> */}
                <h2 class="categoria_nome mb-1 col-12">10% Desconto</h2> 
                <div class="col-9 linha-divisoria "></div>
            </div>

            <form action="" class="row justify-content-md-end justify-content-center mb-3">
                <div  class="col-md-3 p-0 m-0  col-8">
                <Select  label="Filtro :" default="filtro" options={filter} />
                </div>
               
            </form>

        </div>

        {/* <!-- Inicio lista cards produtos catalogo--> */}
        <div className="container container-cards my-4">

            <ul className="row lista-cards catalogo tamanho mb-3">

                
                <li className="col-11 col-sm-8 col-md-5 col-lg-2 mb-4">

                    
                    <div className="caixa-imagem">
                        <a href="./produto.html" className="">
                            <img src={Chas}/>
                        </a>
                    </div>

                    
                    <div className="corpo-card">
                        <a href="./produto.html" className="descricao">Jogo de chá<br />(1889)</a>
                        <div className="pagamento">
                            <div className="preco">
                                <div className="preco-de">R$999,59</div>
                                <div className="preco-por">R$ 850,59</div>
                                <div class="parcelas">À vista, ou em <em>10x</em> de <em>R$100,00</em> no cartão</div>
                            </div>

                            
                            <a href="./produto.html" className="btn-comprar">COMPRAR</a>

                        </div>

                    </div>

                </li>
                

                <li className="col-12 col-sm-8 col-md-5 col-lg-2 mb-4">
                    <div className="caixa-imagem">
                        <a href="./produto.html" className="">
                            <img src={Chas}/>
                        </a>
                    </div>
                    <div className="corpo-card">
                        <a href="./produto.html" className="descricao">Jogo de chá<br />(1889)</a>
                        <div className="pagamento">
                            <div className="preco">
                                <div className="preco-de">R$999,59</div>
                                <div className="preco-por">R$ 850,59</div>
                                <div class="parcelas">À vista, ou em <em>10x</em> de <em>R$100,00</em> no cartão</div>
                            </div>
                            <a href="./produto.html" className="btn-comprar">COMPRAR</a>
                        </div>
                    </div>
                </li>

                <li className="col-12 col-sm-8 col-md-5 col-lg-2 mb-4">
                    <div className="caixa-imagem">
                        <a href="./produto.html" className="">
                            <img src={Chas}/>
                        </a>
                    </div>
                    <div className="corpo-card">
                        <a href="./produto.html" className="descricao">Jogo de chá<br />(1889)</a>
                        <div className="pagamento">
                            <div className="preco">
                                <div className="preco-de">R$999,59</div>
                                <div className="preco-por">R$ 850,59</div>
                                <div class="parcelas">À vista, ou em <em>10x</em> de <em>R$100,00</em> no cartão</div>
                            </div>
                            <a href="./produto.html" className="btn-comprar">COMPRAR</a>
                        </div>
                    </div>
                </li>

                <li className="col-12 col-sm-8 col-md-5 col-lg-2 mb-4">
                    <div className="caixa-imagem">
                        <a href="./produto.html" className="">
                            <img src={Chas}/>
                        </a>
                    </div>
                    <div className="corpo-card">
                        <a href="./produto.html" className="descricao">Jogo de chá<br />(1889)</a>
                        <div className="pagamento">
                            <div className="preco">
                                <div className="preco-de">R$999,59</div>
                                <div className="preco-por">R$ 850,59</div>
                                <div class="parcelas">À vista, ou em <em>10x</em> de <em>R$100,00</em> no cartão</div>
                            </div>
                            <a href="./produto.html" className="btn-comprar">COMPRAR</a>
                        </div>
                    </div>
                </li>

                <li className="col-12 col-sm-8 col-md-5 col-lg-2 d-md-none d-lg-block mb-4">
                    <div className="caixa-imagem">
                        <a href="./produto.html" className="">
                            <img src={Chas}/>
                        </a>
                    </div>
                    <div className="corpo-card">
                        <a href="./produto.html" className="descricao">Jogo de chá<br />(1889)</a>
                        <div className="pagamento">
                            <div className="preco">
                                <div className="preco-de">R$999,59</div>
                                <div className="preco-por">R$ 850,59</div>
                                <div class="parcelas">À vista, ou em <em>10x</em> de <em>R$100,00</em> no cartão</div>
                            </div>
                            <a href="./produto.html" className="btn-comprar">COMPRAR</a>
                        </div>
                    </div>
                </li>

            </ul>

        </div>

        <div className="ver-mais row justify-content-center tamanho pb-3">
            <a href="" className="btn-ver-mais col-6 mb-3">VER MAIS</a>
        </div>



        </>
    )

}