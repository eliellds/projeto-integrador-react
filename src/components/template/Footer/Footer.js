import {Link} from "react-router-dom";
import React from 'react'
import './Footer.css'

function Footer(props) {

    return(
        <>
        <footer>
            <div className="container-fluid pt-1">
                <div className="row justify-content-between first-footer pt-3 px-0">
                    <div className="col-5 col-xs-6 col-sm-2 col-md-3 contato px-2">
                        <h3>
                            contato
                        </h3>
                        <ul>
                            <li><Link to={"/Contact/"}>Dúvidas</Link></li>
                            <li><Link to={"/Contact/"}>Informações</Link></li>
                            <li><Link to={"/Contact/"}>Sugestões</Link></li>
                        </ul>
                    </div>
                    <div className=" col-7 col-xs-6 col-sm-6 col-md-3 produtos px-2">
                        <h3>
                            produtos
                        </h3>
                        <ul>
                            <li><Link to={"/Category/"}>Comprar</Link></li>
                            <li><Link to={"/Contact/"}>Vender</Link></li>
                            <li><Link to={"/Sales/"}>Promoções</Link></li>
                        </ul>
                    </div>
                    <div className=" col-5 col-xs-6 col-sm-6 col-md-3 sobre px-2">
                        <h3>
                            sobre
                        </h3>
                        <ul>
                            <li><Link to={"/About/"}>Visão</Link></li>
                            <li><Link to={"/About/"}>Missão</Link></li>
                            <li><Link to={"/About/"}>História</Link></li>
                        </ul>
                    </div>
                    <div className="col-7 col-xs-6 col-sm-6 col-md-3 redes px-2">
                        <h3>
                            redes sociais
                        </h3>
                        <ul>
                            <li className="instagram"><a href="">Instagram</a></li>
                            <li className="facebook"><a href="https://www.facebook.com/Velho-Luxo-108803898301516" target="_blank">Facebook</a></li>
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