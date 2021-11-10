import React, {useState}from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import FormDefault from '../FormDefault/FormDefault';
import Input from "../../../micro/Forms/Input/Input";
import Button from "../../../micro/Button/Button"

function FormUser(props) {
    const [show, setShow] = useState(true);
    const [text, setChange] = useState("Alterar");

    function changeText(){

    }

    function ableForm() {
        setShow(false);
    }

    function click(e) {
        e.preventDefault();
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
                            <Input disabled={show}  label="Sobrenome" type="text" id="sobrenome" class="form-input col-12"
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
                   <Button function={ableForm} label={text} class="btn-confirmacao"/>
                </div>

            </FormDefault>
        </>
    )
}

export default FormUser