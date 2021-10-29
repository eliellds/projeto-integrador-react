import React from 'react'
import './Footer.css'


function Footer(props) {

    return(
        <>
        <footer>
            <div className="container-fluid ">
                <div className="row justify-content-between first-footer  px-0">
                    <div className="col-5 col-xs-6 col-sm-2 col-md-3 contato px-2">
                        <h3>
                            contato
                        </h3>
                        <ul>
                            <li><a href="./contato.html">Dúvidas</a></li>
                            <li><a href="./contato.html">Informações</a></li>
                            <li><a href="./contato.html">Sugestões</a></li>
                        </ul>
                    </div>
                    <div className=" col-7 col-xs-6 col-sm-6 col-md-3 produtos px-2">
                        <h3>
                            produtos
                        </h3>
                        <ul>
                            <li><a href="./categorias.html">Comprar</a></li>
                            <li><a href="./contato.html">Vender</a></li>
                            <li><a href="">Promoções</a></li>
                        </ul>
                    </div>
                    <div className=" col-5 col-xs-6 col-sm-6 col-md-3 sobre px-2">
                        <h3>
                            sobre
                        </h3>
                        <ul>
                            <li><a href="./sobre.html">Visão</a></li>
                            <li><a href="./sobre.html">Missão</a></li>
                            <li><a href="./sobre.html">História</a></li>
                        </ul>
                    </div>
                    <div className="col-7 col-xs-6 col-sm-6 col-md-3 redes px-2">
                        <h3>
                            redes sociais
                        </h3>
                        <ul>
                            <li className="instagram"><a href="">Instagram</a></li>
                            <li className="facebook"><a href="">Facebook</a></li>
                            <li className="pinterest"><a href="">Pinterest</a></li>
                        </ul>
                    </div>

                    <div className="col-md-12 last-footer px-0">
                        criado por GRUPO 5 RD
                    </div>

                </div>
            </div>
        </footer>
        </>
    )
}

export default Footer