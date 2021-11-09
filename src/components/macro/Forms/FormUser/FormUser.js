import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import FormDefault from '../FormDefault/FormDefault';
import Input from "../../../micro/Forms/Input/Input";
import Button from "../../../micro/Button/Button"

function FormUser(props) {

    return (
        <>
            <FormDefault title="Meus Dados">

                <div class="row forms-block ">

                    <div class="row custom-form d-flex justify-content-center">
                        <div class=" col-12 col-md-5">
                            <Input label="Nome" type="text" id="nome" class="form-input col-12" placeholder="Nome" />
                        </div>

                        <div class="col-12 col-md-5">
                            <Input label="Sobrenome" type="text" id="sobrenome" class="form-input col-12"
                                placeholder="Sobrenome" />
                        </div>
                    </div>

                    <div class="row custom-form d-flex justify-content-center">
                        <div class="col-12 col-md-5">
                            <Input label="CPF" type="text" id="cpf" class="form-input col-12"
                                placeholder="CPF" />
                        </div>

                        <div class="col-12 col-md-5">
                            <Input label="Telefone" type="text" id="telefone" class="form-input col-12"
                                placeholder="Telefone" />
                        </div>
                    </div>

                    <div class="row custom-form d-flex justify-content-center">

                        <div class="col-12 col-md-5">
                            <Input label="E-mail" type="email" id="email" class="form-input col-12"
                                placeholder="e-mail" />
                        </div>

                        <div class=" col-12 col-md-5">
                            <Input label="Senha" type="password" id="senha" class="form-input col-12"
                                placeholder="xxxxxxxxx" />
                        </div>

                    </div>
                </div>

                <div class="row justify-content-center pt-3">
                    <Button label="Alterar" onclick="null" class="btn-confirmacao" />
                </div>

            </FormDefault>
        </>
    )
}

export default FormUser