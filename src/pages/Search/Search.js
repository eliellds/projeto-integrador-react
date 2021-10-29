import React from "react";
import './Search.css';
import Chas from '../../assets/images/cards/chas-schumacher-glamour.jpg'

export default function Search(props) {

    return (
        <>
            <section>
                <div class="container">
                    <div class="row">
                        <div class="container resultado col-6 col-xs-8 col-sm-7 col-md-8 col-lg-6 info-resultado mt-2">
                            <h2>Resultados para <span>"Bambu soldado da navalha ardente"</span></h2>
                        </div>

                        <div class="container mt-4 col-6 col-xs-4 col-sm-5 col-md-4 col-lg-6 rel no-wrap text-end">

                            <form action="" class="row justify-content-md-between justify-content-center mb-3">
                                <label for="filtro" class="col-md-5 p-0 me-1  col-8">Ordenar por: </label>
                                <select name="filtro" class="col-md-6 col-8" id="filtro">
                                    <option value="default">Filtro</option>
                                    <option value="maior-preco">Maior Valor</option>
                                    <option value="menor-preco">Menor Valor</option>
                                    <option value="ofertas">Maior desconto</option>
                                    <option value="mais-antigo">Mais Antigo</option>
                                    <option value="mais-novo">Mais Novo</option>


                                </select>
                            </form>
                        </div>
                    </div>

                    <ul className="row lista-cards catalogo tamanho mb-3">


                        <li className="col-11 col-sm-8 col-md-5 col-lg-2 mb-4">


                            <div className="caixa-imagem">
                                <a href="./produto.html" className="">
                                    <img src={Chas} />
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
                                    <img src={Chas} />
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
                                    <img src={Chas} />
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
                                    <img src={Chas} />
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
                                    <img src={Chas} />
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

            </section>
        </>

    )

}