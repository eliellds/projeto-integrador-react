import React from 'react'
import './Header.css'
import Bag from '../../micro/Bag/Bag'
// import Menu from '../../../assets/images/headers/Menu-de-Tres-Linhas.png'
import Logotipo from '../../micro/Logo/Logo'
import Perfil from '../../../assets/images/headers/user.png'
import Login from '../../../assets/images/headers/login-icone.png'
import DropdownMenu from '../../macro/DropdownMenu/DropdownMenu'
import FormSearch from '../../macro/Forms/FormSearch/FormSearch'

function Header(props) {

    const location = window.location.pathname

    return (
        <>
            <header>
                <div className="container-fluid">
                    <div className="row justify-content-around">

                        <div className="titulo-header col-lg-3 col-md-8 col-sm-7 col-4 justify-content-center">
                            <Logotipo home={location} />
                        </div>

                        <div className="form-pesquisa-header col-lg-6 d-lg-block d-none">
                            <FormSearch/>
                        </div>


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

                        <Bag/>

                        <div className="container form-pesquisa col-10 d-lg-none d-block">
                            <FormSearch/>
                        </div>

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

                <DropdownMenu class="d-block d-sm-none"/>

            </header>
        </>
    )
}

export default Header