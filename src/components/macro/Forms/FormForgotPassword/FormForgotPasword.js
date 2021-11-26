import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap'
import "./FormForgotPassword.css"
import Input from "../../../micro/Forms/Input/Input";
import FormDefault from "../FormDefault/FormDefault";
import { Link } from "react-router-dom";
import Button from "../../../micro/Button/Button"
import api from '../../../../services/api';
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import Loading from "../../../../assets/images/success/loading.gif"
import { useHistory } from 'react-router';


function FormForgotPassword(props) {

    const history = useHistory()
    const [email, setEmail] = useState("");
    // const { register, handleSubmit, formState: { errors }, clearErrors } = useForm();

    // handleSubmit = e => {
    //     e.preventDefault();

    //     const data = {
    //         email: this.email
    //     }
        
    // }

    const getEmail = () => {
        api
            .get("/forgotpassword")
            .then((response) => setEmail(response.data))
            .catch((err) => {
                console.error("ops! ocorreu um erro" + err);
            })
    }

    useEffect(() => {
        getEmail();
    }, []);

    function sendEmail(email) {
        api.post("/forgotpassword", email)
            .then((response) => {
                console.log(response)
                alert("Verifique seu e-mail, você receberá um link para resetar sua senha. Caso nao receba, entre em contato conosco.")
                window.location.href = "/newpasswordform";
            })
            .catch((err) => {
                console.error("Erro ao realizar Post de recuperar senha" + err)
                alert("Não foi possível recuperar sua senha.")
                setDisable(false)
            });
    }

    useEffect(() => {
        document.addEventListener("keydown", function (event) {
            if (event.keyCode === 13 && event.target.nodeName === "INPUT") {
                var form = event.target.form;
                var index = Array.prototype.indexOf.call(form, event.target);
                form.elements[index + 1].focus();
                event.preventDefault();
            }
        });
    }, []);

    // imagem de loading
    function renderLoading() {
        return <img className="img-loading-btn" src={Loading} alt="Gerando pedido" />
    }

    // desabilita botão apos o click
    const [disable, setDisable] = React.useState(false);

    return (
        <>
            <main class="container-fluid custom-container py-2 pb-5">

                <FormDefault title="Recuperar senha" action="" class="custom-form-box mx-3 mx-sm-1 mx-lg-4 px-5 px-sm-1 px-lg-4">

                    <div className="row d-flex justify-content-center pt-4">

                        <p className="text-center recuperar-senha-text">Um link de reset de senha será enviado ao seu e-mail.</p>

                        <div className=" col-12 col-md-6">
                            <Input label="E-mail" classNameName="form-input col-12 form-label" placeholder="Digite seu e-mail..." type="email" id="email" />
                        </div>
                        <small className="text-center">Não lembra seu e-mail? <Link to="/contact" className="recuperar">Entrar em contato</Link></small>

                    </div>

                    <div className="row justify-content-center mt-2">
                        <Button class="btn-confirmacao" type="submit" disabled={disable} label={disable ? renderLoading(sendEmail) : "Recuperar"}/>
                    </div>

                </FormDefault>

            </main>

        </>
    )
}

export default FormForgotPassword


