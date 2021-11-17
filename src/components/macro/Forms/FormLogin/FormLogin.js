import React, { useState, useEffect } from "react";
import Input from "../../../micro/Forms/Input/Input";
import Button from "../../../micro/Button/Button"
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Header from "../../../template/Header/Header";
import axios from "axios";
import api from "../../../../services/api";

function FormLogin(props) {

    // let user = { id: 1, nome: "Eliel", idade: 26 }
    // let userString = JSON.stringify(user)
    const history = useHistory()

    function test() {
        return history.goBack();
    }

    const addUser = (userMail) => {
        const config = {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem("token")
            }
        }

        api.get(`/user/email/${userMail}`, config)
        .then(
            res => {
                localStorage.setItem("user", JSON.stringify(res.data));
                test();
            },
            err => {
                console.log(err);
            }
            
        )
        
    }

    function logar(userMail) {
        addUser(userMail);
    }

    const [email, setEmail] = useState("")
    const [password1, setPassword] = useState("")

    function postApi(data) {
        api.post("/login", data)
        .then(res => {
            localStorage.setItem("token", res.data.jwt)
            logar(res.data.email)
        })
        .catch(err => {
            console.log(err)
        })
    }

    const handleSubmit = () => {

        const data = ({
            username: email,
            password: password1
        })

        postApi(data)
    }
    
    return (
        <>
            <div className="container custom-form-div py-2">

                <div className="row custom-form d-flex justify-content-center">
                    <div className="col-12 col-md-7">
                        <Input change={e => setEmail(e.target.value)} label="E-mail" className="form-input form-control col-12 form-label" type="email" id="email" placeholder="Digite seu e-mail..." />
                    </div>
                </div>

                <div className="row custom-form d-flex justify-content-center">
                    <div className="col-12 col-md-7">
                        <Input change={e => setPassword(e.target.value)} label="Senha" type="password" className="form-label form-control form-input col-12 " id="senha" placeholder="Digite sua senha..." />
                    </div>
                    <small className="text-center my-0 mb-2">Esqueceu a senha? <Link to="/forgotpassword">  Recuperar</Link></small>
                </div>

                <div className="row justify-content-center">
                    <Button label="Entrar" onclick={handleSubmit} class="btn-confirmacao" type="submit" />

                    <p className="mt-3 mb-1 text-center">Ainda não tem cadastro?</p>
                    <Button label="Cadastrar"  class="btn-confirmacao" navigation route="./register" />
                </div>
            </div>
        </>
    )
}

export default FormLogin