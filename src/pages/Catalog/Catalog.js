import React from "react";
import './Catalog.css';
import Chas from '../../assets/images/cards/chas-schumacher-glamour.jpg'
import CardProduct from "../../components/macro/Cards/Products/CardProduct";

export default function Catalog(props) {

    return (
        <>
            <div className="row justify-content-center mb-3 p-0 mx-0">
                <h1 className="categoria_nome mb-2 mx-0 col-12">Cozinha</h1>
                <div className="col-9 linha-divisoria "></div>
            </div>

            <form action="" className="row justify-content-md-end justify-content-center mb-3">
                <label for="filtro" className="col-md-2 p-0 m-0  col-8">Ordenar por: </label>
                <select name="filtro" className="col-md-2 col-8" id="filtro">
                    <option value="default">Selecione o filtro</option>
                    <option value="maior-preco">Maior Valor</option>
                    <option value="menor-preco">Menor Valor</option>
                    <option value="ofertas">Maior desconto</option>
                    <option value="mais-antigo">Mais Antigo</option>
                    <option value="mais-novo">Mais Novo</option>


                </select>
            </form>

            <div className="container container-cards my-4">

                <ul className="row lista-cards catalogo tamanho mb-3">

                    <CardProduct nome="Vintage Máquina De Escrever Portátil Remington silencioso"
                        ano="1930" precoDe="111,99" precoPor="100,00" vezes={10} parcelas="10,00">

                        <a href="./produto.html" className="">
                            <img src={Chas} />
                        </a>

                    </CardProduct>

                    <CardProduct nome="Vintage Máquina De Escrever Portátil Remington silencioso"
                        ano="1930" precoDe="111,99" precoPor="100,00" vezes={10} parcelas="10,00">

                        <a href="./produto.html" className="">
                            <img src={Chas} />
                        </a>

                    </CardProduct>

                    <CardProduct nome="Vintage Máquina De Escrever Portátil Remington silencioso"
                        ano="1930" precoDe="111,99" precoPor="100,00" vezes={10} parcelas="10,00">

                        <a href="./produto.html" className="">
                            <img src={Chas} />
                        </a>

                    </CardProduct>

                    <CardProduct nome="Vintage Máquina De Escrever Portátil Remington silencioso"
                        ano="1930" precoDe="111,99" precoPor="100,00" vezes={10} parcelas="10,00">

                        <a href="./produto.html" className="">
                            <img src={Chas} />
                        </a>

                    </CardProduct>

                    <CardProduct nome="Vintage Máquina De Escrever Portátil Remington silencioso"
                        ano="1930" precoDe="111,99" precoPor="100,00" vezes={10} parcelas="10,00">

                        <a href="./produto.html" className="">
                            <img src={Chas} />
                        </a>

                    </CardProduct>


                    {/* <li className="col-11 col-sm-8 col-md-5 col-lg-2 mb-4">

                        
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

                    </li> */}


                    {/* <li className="col-12 col-sm-8 col-md-5 col-lg-2 mb-4">
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
                    </li> */}

                    {/* <li className="col-12 col-sm-8 col-md-5 col-lg-2 d-md-none d-lg-block mb-4">
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
                    </li> */}

                </ul>

            </div>

            <div className="ver-mais row justify-content-center tamanho pb-3">
                <a href="" className="btn-ver-mais col-6 mb-3">VER MAIS</a>
            </div>
        </>
    )

}