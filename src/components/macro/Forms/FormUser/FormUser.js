import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import FormDefault from '../FormDefault/FormDefault';
import Input from "../../../micro/Forms/Input/Input";
import Button from "../../../micro/Button/Button"

function FormUser(props) {
    let bool = true

    const [show, setShow] = useState(bool);

    function disableForm() {
        bool=true
        setShow(bool);
        changeButton(bool)
    }

    function ableForm() {
        bool= false
        setShow(bool);
        changeButton(bool)
    }

    function click(e) {
        e.preventDefault();
    }

    const [buttons, setButtons] = useState(
        <>
            <Button function={ableForm} label="Alterar" class="btn-confirmacao" />
        </>
    )

    function changeButton(change) {
        if (change) {
            setButtons(
                <>
                    <Button function={ableForm} label="Alterar" class="btn-confirmacao" />
                </>
            )
        } else {
            setButtons(
                <>
                    <Button function={disableForm} label="Salvar" class="btn-confirmacao" />
                </>
            )
        }
    }

    return (
        <>
            <FormDefault click={click} title="Meus Dados">

                <div className="row forms-block">

                    <div className="row custom-form d-flex justify-content-center">
                        <div className=" col-12 col-md-5">
                            <Input disabled={show} label="Nome" type="text" id="nome" className="form-input col-12" placeholder="Nome" />
                        </div>

                        <div className="col-12 col-md-6">
                            <Input disabled={show} label="Sobrenome" type="text" id="sobrenome" className="form-input col-12"
                                placeholder="Sobrenome" />
                        </div>
                    </div>

                    <div className="row custom-form d-flex justify-content-center">
                        <div className="col-12 col-md-3">
                            <Input disabled="true" label="CPF" type="text" id="cpf" className="form-input col-12"
                                placeholder="CPF" />
                        </div>

                        <div className="col-12 col-md-4">
                            <Input disabled="true" label="E-mail" type="email" id="email" className="form-input col-12"
                                placeholder="e-mail" />
                        </div>

                        <div className="col-12 col-md-4">
                            <Input disabled={show} label="Telefone" type="text" id="telefone" className="form-input col-12"
                                placeholder="Telefone" />
                        </div>

                    </div>
                </div>

                

            </FormDefault>
            <div className="row justify-content-center">
                    {buttons}
                </div>
        </>
    )
}

export default FormUser