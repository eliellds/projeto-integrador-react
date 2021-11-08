import React from 'react'
import './Home.css'
import Banners from '../../components/macro/Banners/Banner'
import ListProduct from '../../components/macro/Cards/Products/CardProduct'
function Home(props) {

    return (
        <>

            <Banners />
            <h2 className="home-titles">Promoções</h2>

            {/* <!-- Inicio lista cards produtos promocoes--> */}
            <div className="container container-cards">
                <div className="row justify-content-center"> 
                
                <ListProduct/>
                <ListProduct/>
                <ListProduct/>
                <ListProduct/>
                <ListProduct/>
                <ListProduct/>
                </div>

             
             

            </div>
            {/* <!-- Fim lista cards produtos promocoes --> */}


            {/* <!-- INÍCIO DESTAQUES --> */}

            <h2 className="mt-3 home-titles">Destaques</h2>

            <section className="container-fluid">

                <div className="row custom-section mb-5 justify-content-center">

                    <div className="col-md-5 col-12 custom-section-item">

                        <img src="./natalia/imgs/caixaRegistradora.png" alt="Caixa Registradora" />

                    </div>

                    <div className="col-md-5 col-12 custom-section-item">

                        <h6>Caixa registradora <br /> (1932)</h6>
                        <p>R$ 8520,00</p>
                        <button> Comprar</button>

                    </div>

                    <div className="col-md-5 col-12 custom-section-item">

                        <h6>Louças Portuguesas <br />(1889)</h6>
                        <p>R$ 2520,00</p>
                        <button>Comprar</button>

                    </div>

                    <div className="col-md-5 col-12 custom-section-item">

                        <img src="./natalia/imgs/loucasPortuguesas.jpg" alt="Louças Portuguesas" />

                    </div>

                </div>

            </section>

            {/* <!-- FINAL  DESTAQUES --> */}

            <h2>Novidades</h2>

            {/* <!-- Inicio lista cards produtos novidades --> */}
            <div className="container container-cards">

                <ul className="row lista-cards novidades tamanho mb-5">

                    <li className="col-12 col-sm-8 col-md-5 col-lg-2 mb-4">
                        <div className="caixa-imagem">
                            <a href="./produto.html" className="imagem-produto card-1"></a>
                        </div>
                        <div className="corpo-card">
                            <a href="./produto.html" className="descricao">Jogo de chá<br />(1889)</a>
                            <div className="pagamento">
                                <div className="preco">
                                    <div className="preco-de">R$999,59</div>
                                    <div className="preco-por">R$ 850,59</div>
                                </div>
                                <a href="./produto.html" className="btn-comprar">COMPRAR</a>
                            </div>
                        </div>
                    </li>

                    <li className="col-12 col-sm-8 col-md-5 col-lg-2 mb-4">
                        <div className="caixa-imagem">
                            <a href="./produto.html" className="imagem-produto card-1"></a>
                        </div>
                        <div className="corpo-card">
                            <a href="./produto.html" className="descricao">Jogo de chá<br />(1889)</a>
                            <div className="pagamento">
                                <div className="preco">
                                    <div className="preco-de">R$999,59</div>
                                    <div className="preco-por">R$ 850,59</div>
                                </div>
                                <a href="./produto.html" className="btn-comprar">COMPRAR</a>
                            </div>
                        </div>
                    </li>

                    <li className="col-12 col-sm-8 col-md-5 col-lg-2 mb-4">
                        <div className="caixa-imagem">
                            <a href="./produto.html" className="imagem-produto card-1"></a>
                        </div>
                        <div className="corpo-card">
                            <a href="./produto.html" className="descricao">Jogo de chá<br />(1889)</a>
                            <div className="pagamento">
                                <div className="preco">
                                    <div className="preco-de">R$999,59</div>
                                    <div className="preco-por">R$ 850,59</div>
                                </div>
                                <a href="./produto.html" className="btn-comprar">COMPRAR</a>
                            </div>
                        </div>
                    </li>

                    <li className="col-12 col-sm-8 col-md-5 col-lg-2 mb-4">
                        <div className="caixa-imagem">
                            <a href="./produto.html" className="imagem-produto card-1"></a>
                        </div>
                        <div className="corpo-card">
                            <a href="./produto.html" className="descricao">Jogo de chá<br />(1889)</a>
                            <div className="pagamento">
                                <div className="preco">
                                    <div className="preco-de">R$999,59</div>
                                    <div className="preco-por">R$ 850,59</div>
                                </div>
                                <a href="./produto.html" className="btn-comprar">COMPRAR</a>
                            </div>
                        </div>
                    </li>

                    <li className="col-12 col-sm-8 col-md-5 col-lg-2 d-md-none d-lg-block mb-4">
                        <div className="caixa-imagem">
                            <a href="./produto.html" className="imagem-produto card-1"></a>
                        </div>
                        <div className="corpo-card">
                            <a href="./produto.html" className="descricao">Jogo de chá<br />(1889)</a>
                            <div className="pagamento">
                                <div className="preco">
                                    <div className="preco-de">R$999,59</div>
                                    <div className="preco-por">R$ 850,59</div>
                                </div>
                                <a href="./produto.html" className="btn-comprar">COMPRAR</a>
                            </div>
                        </div>
                    </li>

                </ul>

            </div>
        </>
    )
}

export default Home