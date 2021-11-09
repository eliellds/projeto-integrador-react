import React from 'react'
import './Header.css'
import Lupa from '../../../assets/images/headers/lupa.png'
import Sacola from '../../../assets/images/headers/sacola.png'
import Menu from '../../../assets/images/headers/Menu-de-Tres-Linhas.png'
import Logotipo from '../../micro/Logo/Logo'
import Perfil from '../../../assets/images/headers/user.png'
import Login from '../../../assets/images/headers/login-icone.png'

function Header(props) {

    const location = window.location.pathname

    return (
        <>
            <header>
                <div className="container-fluid">
                    <div className="row">

                        <div className="hamburguer d-block d-sm-none col-2 align-content-end">
                            <a href="#">
                                <img className="menu-hamburguer"
                                    src={Menu} />
                            </a>
                        </div>

                        <div className="titulo-header col-lg-3 col-md-8 col-sm-7 col-4 justify-content-center">
                            <Logotipo home={location} />
                        </div>

                        <form action="/search" className="form-pesquisa-header col-lg-6 d-lg-block d-none">
                            <div className="container">
                                <div className="row">
                                    <div className="pesquisa-btn mx-0 col-11">
                                        <input type="text" className="pesquisa" placeholder="O que deseja colecionar?" />
                                    </div>
                                    <div className="pesquisa-btn mx-0 col-1">
                                        <button className="button-submit" type="submit">
                                            <img className="lupa"
                                                src={Lupa} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>

                        <div className="login-button-header col-2 col-sm-1">
                            <a href="/login" className="perfil-bloco">
                                <img className="login-imagem" src={Login} />
                                <div className="perfil-nome">Sair</div>
                            </a>
                        </div>

                        <div className="perfil-link col-2 col-lg-1">
                            <a href="/dashboard" className="perfil-bloco">
                                <img className="perfil-imagem" src={Perfil} />
                                <div href="/dashboard" className="perfil-nome"><b>Perfil</b></div>
                            </a>
                        </div>

                        <div className="login-button-header sacola col-2 col-sm-1">
                            <a href="/cart" className="perfil-bloco">
                                <img className="login-imagem sacola-imagem" src={Sacola} />
                                <div className="perfil-nome">Sacola</div>
                            </a>
                        </div>

                        <form action="/search" className="container form-pesquisa col-10 d-lg-none d-block">
                            <div className="row">
                                <div className="pesquisa-btn mx-0 col-11">
                                    <input type="text" className="pesquisa" placeholder="O que deseja colecionar?" />
                                </div>
                                <div className="pesquisa-btn mx-0 col-1">
                                    <button className="button-submit" type="submit">
                                        <img className="lupa"
                                            src={Lupa} />
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <nav id="menu">
                                <ul className="align-content-center justify-content-center px-5 d-none d-sm-flex">
                                    <li><a href="/home">Home</a></li>
                                    <li><a href="/category">Catálogo</a></li>
                                    <li><a href="/sales">Promoções</a></li>
                                    <li><a href="/contact">Contato</a></li>
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