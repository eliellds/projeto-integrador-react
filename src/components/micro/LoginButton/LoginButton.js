import React from "react";
import LoginImage from '../../../assets/images/headers/login-icone.png';
import Button from "../Button/Button";
import { Link } from "react-router-dom";

export default class LoginButton extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            login: !localStorage.getItem("user")
        };
        this.changeState = this.changeState.bind(this);
    }

    removeUser = () => {
        localStorage.removeItem("user")
    }

    changeState = () => {
        if (this.login) {
            this.setState({
                login: false
            });
        } else {
            this.removeUser()
            this.setState({
                login: true
            });
        }

    };

    render() {
        // const login2 = this.state.login;
        console.log(this.state.login)
        return (

            <div className="login-button-header col-2 col-sm-1">
                <Link
                    onClick={this.changeState}
                    to={this.state.login ? "/login" : "/"}
                    className="perfil-bloco"
                >

                    <img className="login-imagem" src={LoginImage} />
                    <div className="perfil-nome">{this.state.login ? "Entrar" : "Sair"}</div>
                </Link>
            </div>
        );
    }

}