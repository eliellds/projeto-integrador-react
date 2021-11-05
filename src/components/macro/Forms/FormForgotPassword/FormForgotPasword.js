import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./FormForgotPassword.css"
import Input from "../../../micro/Forms/Input/Input";
import Button from "../../../micro/Button/Button";
import FormDefault from "../FormDefault/FormDefault";

function FormForgotPassword(props) {

    return (
        <>
            <main class="conatiner-fluid custom-container py-2 pb-5">

                <FormDefault title="Recuperar senha" action="" class="custom-form-box mx-3 mx-sm-1 mx-lg-4 px-5 px-sm-1 px-lg-4">

                    <div className="row forms-block ">
                        <div className="row d-flex justify-content-center pt-4">

                            <div className=" col-12 col-md-6">
                                <Input label="E-mail" classNameName="form-input col-12 form-label" placeholder="Digite seu e-mail..." type="email" id="email" />
                            </div>
                            <small className="text-center">Não lembra seu e-mail? <a href="./contato.html" className="recuperar">Entrar em contato</a></small>

                        </div>
                    </div>

                    <div className="row justify-content-center">
                        <Button label="Voltar" navigation route="voltar" class="btn-retorno mx-5" />
                        <Button label="Cadastrar" onclick="null" class="btn-confirmacao mx-5" data-bs-toggle="modal" data-bs-target="#recuperar" />
                    </div>

                </FormDefault>

            </main>

        </>
    )
}

export default FormForgotPassword


