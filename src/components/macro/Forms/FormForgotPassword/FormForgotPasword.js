import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap'
import "./FormForgotPassword.css"
import Input from "../../../micro/Forms/Input/Input";
import FormDefault from "../FormDefault/FormDefault";
import ModalComp from "../../../micro/Modal/Modal";
import { Link } from "react-router-dom";


function FormForgotPassword(props) {

    return (
        <>
            <main class="container-fluid custom-container py-2 pb-5">

                <FormDefault title="Recuperar senha" action="" class="custom-form-box mx-3 mx-sm-1 mx-lg-4 px-5 px-sm-1 px-lg-4">

                    <div className="row d-flex justify-content-center pt-4">

                        <div className=" col-12 col-md-6">
                            <Input label="E-mail" classNameName="form-input col-12 form-label" placeholder="Digite seu e-mail..." type="email" id="email" />
                        </div>
                        <small className="text-center">Não lembra seu e-mail? <Link to="/contact" className="recuperar">Entrar em contato</Link></small>

                    </div>

                    <ModalComp 
                        msg={<p className="modal-text">Mensagem Enviada!</p>} 
                        info={<p className="modal-text">Seu pedido de recuperção de senha foi recebido.</p>} 
                        info1={ <p className="modal-text">Confira seu e-mail e cheque sua caixa de spam. Qualquer dúvida, entre em contato.</p>} 
                        info2={<p className="modal-text">Obrigado!</p>}>
                    </ModalComp>        

                </FormDefault>

            </main>

        </>
    )
}

export default FormForgotPassword


