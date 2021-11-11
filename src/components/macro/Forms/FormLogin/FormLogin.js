import React from "react";
import Input from "../../../micro/Forms/Input/Input";
import Button from "../../../micro/Button/Button"
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

function FormLogin(props) {

    let user = { id: 1, nome: "Eliel", idade: 26 }
    let userString = JSON.stringify(user)
    const history = useHistory()

    function logar() {
        localStorage.setItem("user", userString)
        history.goBack()
    }

    
    
    return (
        <>
            <div className="container mb-3 custom-form-div py-2">

                <div className="row custom-form d-flex justify-content-center">
                    <div className="col-12 col-md-7">
                        <Input label="E-mail" className="form-input col-12 form-label" type="email" id="email" placeholder="Digite seu e-mail..." />
                    </div>
                </div>

                <div className="row custom-form d-flex justify-content-center">
                    <div className="col-12 col-md-7">
                        <Input label="Senha" type="password" className="form-label form-input col-12 " id="senha" placeholder="Digite sua senha..." />
                    </div>
                    <small className="text-center my-0 mb-2">Esqueceu a senha?<Link to="/forgotpassword">Recuperar</Link></small>
                </div>

                <div className="row justify-content-center">
                    <Button label="Entrar" onclick={logar} class="btn-confirmacao" type="submit" />

                    <p className="mt-3 mb-1 text-center">Ainda não tem cadastro?</p>
                    <Button label="Cadastrar"  class="btn-confirmacao" navigation route="./register" />
                </div>
            </div>
        </>
    )
}

export default FormLogin