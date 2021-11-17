import React, { useEffect, useState } from 'react'
import './Header.css'
import Logotipo from '../../micro/Logo/Logo'
import DropdownMenu from '../../macro/DropdownMenu/DropdownMenu'
import FormSearch from '../../macro/Forms/FormSearch/FormSearch'
import Profile from '../../micro/Profile/Profile'
import Bag from "../../micro/Bag/Bag"
import LoginButton from '../../micro/LoginButton/LoginButton'
import api from '../../../services/api'

function Header(props) {

    const location = window.location.pathname

    const [login, setLogin] = useState(!localStorage.getItem("user"));

    const removeUser = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        localStorage.removeItem("username");
    }

    const changeState = () => {
        if (login) {
            if (localStorage.getItem("user")) {
                setLogin(false);
            }
        } else {
            removeUser();
            setLogin(true);
        }
        compProfile();
    }

    const [perfil,setPerfil]= useState(localStorage.getItem("user")?<Profile/> : <></>)

    function compProfile(){
        setPerfil(localStorage.getItem("user")?<Profile/> : <></>)
    }

    function getPerfil() {
        return perfil
    }

    useEffect(() => {
        getPerfil()
    }, [])

    console.log(login);

    return (
        <>
            <header>
                <div className="container-fluid">
                    <div className="row header-row-ajust">

                        <div className="titulo-header col-lg-3 col-md-8 col-sm-7 col-4 justify-content-center">
                            <Logotipo home={location} />
                        </div>

                        <div className="form-pesquisa-header col-lg-6 d-lg-block d-none">
                            <FormSearch />
                        </div>


                        <LoginButton click={changeState} logged={login} />

                        {perfil}

                        <Bag />

                        <div className="container form-pesquisa col-10 d-lg-none d-block">
                            <FormSearch />
                        </div>

                    </div>
                    <div className="row">
                        <div className="col-12">
                            <nav id="menu">
                                <ul className="align-content-center justify-content-center px-5 d-none d-sm-flex">
                                    <li><a href="/home">Home</a></li>
                                    <li><a href="/category">Categorias</a></li>
                                    <li><a href="/sales">Promoções</a></li>
                                    <li><a href="/contact">Contato</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>

                <DropdownMenu class="d-block d-sm-none" />

            </header>
        </>
    )
}

export default Header