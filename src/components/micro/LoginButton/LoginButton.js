import React, { useEffect, useState } from 'react'
import LoginImage from '../../../assets/images/headers/login-icone.png';
import Button from "../Button/Button";
import { Link } from "react-router-dom";


export default function LoginButton(props) {

    function buttonsRend() {
        return (
            <>
                <div className="login-button-header col-2 col-sm-1">
                    <Link
                        onClick={() => props.click()}
                        to={props.logged ? "/login" : "/"}
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