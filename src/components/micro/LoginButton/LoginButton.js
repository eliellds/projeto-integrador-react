import React, { useEffect, useState } from 'react'
import LoginImage from '../../../assets/images/headers/login-icone.png';
import Button from "../Button/Button";
import { Link } from "react-router-dom";


export default function LoginButton(props) {

    function preventDefault(e) {
        e.preventDefault()
        props.click()
        window.location.href = props.logged ? "/login" : "/";

    }

    function buttonsRend() {

        

        return (
            <>
                <div className="login-button-header col-2 col-sm-1">
                    <Link
                        onClick={(e) => preventDefault(e)}
                        className="perfil-bloco"
                    >

                        <img className="login-imagem" src={LoginImage} />
                        <div className="perfil-nome">{props.logged ? "Entrar" : "Sair"}</div>
                    </Link>
                </div>
            </>
        )
    }

    return (

        buttonsRend()

    );

}