import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import FormDefault from '../FormDefault/FormDefault';
import Input from "../../../micro/Forms/Input/Input";
import Button from "../../../micro/Button/Button"

function FormUser(props) {
    const [show, setShow] = useState(true);

    function disableForm() {
        setShow(true);
        changeButton()
    }

    function ableForm() {
        setShow(false);
        changeButton()
    }

    function click(e) {
        e.preventDefault();
    }

    const [buttons, setButtons] = useState(
        <>
            <Button function={ableForm} label="Alterar" class="btn-confirmacao" />
        </>
    )
    let change = false

    function changeButton() {
        if (change == false) {
            setButtons(
                <>
                    <Button function={ableForm} label="Alterar" class="btn-confirmacao" />
                </>
            )
            change=true
        } else {
            setButtons(
                <>
                    <Button function={disableForm} label="Salvar" class="btn-confirmacao" />
                </>
            )
            change=false
        }
    }

    return (
        <>
            <FormDefault click={click} title="Meus Dados">

                <div class="row forms-block">

                    <div class="row custom-form d-flex justify-content-center">
                        <div class=" col-12 col-md-5">
                            <Input disabled={show} label="Nome" type="text" id="nome" class="form-input col-12" placeholder="Nome" />
                        </div>

                        <div class="col-12 col-md-6">
                            <Input disabled={show} label="Sobrenome" type="text" id="sobrenome" class="form-input col-12"
                                placeholder="Sobrenome" />
                        </div>
                    </div>

                    <div class="row custom-form d-flex justify-content-center">
                        <div class="col-12 col-md-3">
                            <Input disabled="true" label="CPF" type="text" id="cpf" class="form-input col-12"
                                placeholder="CPF" />
                        </div>

                        <div class="col-12 col-md-4">
                            <Input disabled="true" label="E-mail" type="email" id="email" class="form-input col-12"
                                placeholder="e-mail" />
                        </div>

                        <div class="col-12 col-md-4">
                            <Input disabled={show} label="Telefone" type="text" id="telefone" class="form-input col-12"
                                placeholder="Telefone" />
                        </div>

                    </div>
                </div>

                <div class="row justify-content-center">
                    {buttons}
                </div>

            </FormDefault>
        </>
    )
}

export default FormUser