import React from 'react'
import './Header.css'
import Lupa from '../../../assets/images/headers/lupa.png'
import Logo from '../../../assets/images/headers/velho-luxo.png'
import Logo2 from '../../../assets/images/headers/vl.png'
import Sacola from '../../../assets/images/headers/sacola.png'
import Menu from '../../../assets/images/headers/Menu-de-Tres-Linhas.png'

function Header(props) {

    return(
        <>
        <header>
            <div className="container-fluid">
                <div className="row">
                    <div className="hamburguer d-block d-sm-none col-2 align-content-end">
                        <a href="#">
                            <img className="menu-hamburguer"
                                src={Menu}/>
                        </a>
                    </div>
                    <div className="titulo col-lg-3 col-md-8 col-sm-7 col-4 justify-content-center">
                        <a href="./index.html" className="logo-marca" title="Velho Luxo">
                        <img className="logo d-sm-block d-none" alt="Velho Luxo"
                            src={Logo}/>
                        <img className="logo-2 d-block d-sm-none" alt="Velho Luxo"
                            src={Logo2}/>
                        </a>
                    </div>
                    <form action="./search" className="form-pesquisa col-lg-6 d-lg-block d-none">
                        <div className="container">
                            <div className="row">
                                <div className="pesquisa-btn mx-0 col-11">
                                    <input type="text" className="pesquisa" placeholder="O que deseja colecionar?"/>
                                </div>
                                <div className="pesquisa-btn mx-0 col-1">
                                    <button className="button-submit" type="submit">
                                        <img className="lupa"
                                            src={Lupa}/>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                    <div className="login col-2 col-sm-1"><a href="./login.html">Sair</a></div>
                    
                    <div className="perfil-link col-2 col-lg-1"><a  href="./meus-dados.html"><b>Perfil</b></a></div>
                    
                    <a href="./carrinho.html" className="button-sacola col-md-1 col-sm-2 col-2">
                        <img className="sacola"
                            src={Sacola}/>
                    </a>
                    <form action="./busca.html" className="container form-pesquisa col-10 d-lg-none d-block">
                        <div className="row">
                            <div className="pesquisa-btn mx-0 col-11">
                                <input type="text" className="pesquisa" placeholder="O que deseja colecionar?"/>
                            </div>
                            <div className="pesquisa-btn mx-0 col-1">
                                <button className="button-submit" type="submit">
                                    <img className="lupa"
                                        src={Lupa}/>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="row">
                    <div className="col-12">
                        <nav id="menu">
                            <ul className="align-content-center justify-content-center px-5 d-none d-sm-flex">
                                <li><a href="./index.html">Home</a></li>
                                <li><a href="./categorias.html">Catálogo</a></li>
                                <li><a href="./promocoes.html">Promoções</a></li>
                                <li><a href="./contato.html">Contato</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
        </>
    )
}

export default Header