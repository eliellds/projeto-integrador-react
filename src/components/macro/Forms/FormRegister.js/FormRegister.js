import React from "react"
import Input from "../../../micro/Forms/Input/Input"
import Button from "../../../micro/Button/Button"

function FormRegister(props) {
    return (
        <>
            <div className="row justify-content-center">
                <div className="row custom-form">
                    <div className="nome col-12 col-md-4">
                        <Input label="Nome" type="text" type="text" id="nome" className="form-input col-12" placeholder="Ex.: Francisca" />
                    </div>
                    <div className="sobrenome col-12 col-md-5">
                        <Input label="Sobrenome" type="text" id="sobrenome" className="form-input col-12" placeholder="Ex.: dos Santos" />
                    </div>
                    <div className="nascimento col-12 col-md-3">
                        <Input label="Data Nascimento" type="date" id="nascimento" className="form-input col-12"/>
                    </div>
                </div>

                <div className="row custom-form">

                    <div className="cpf col-12 col-sm-6 col-md-3">
                        <Input label="CPF" type="text" id="cpf" className="form-input col-12" placeholder="000.000.000-00" />
                    </div>

                    <div className="telefone col-12 col-sm-6 col-md-3">
                        <Input label="Telefone" type="text" id="telefone" className="form-input col-12" placeholder="(00) 00000-0000" />
                    </div>

                    <div className="email col-12 col-md-6">
                        <Input label="E-mail" type="text" id="email" className="form-input col-12" placeholder="exemplo@exemplo.com" />
                    </div>

                </div>

                <div className="row custom-form">

                    <div className="senha col-12 col-sm-6 col-md-6">
                        <Input label="Senha" type="password" id="senha" className="form-input col-12" placeholder="Defina uma senha" />
                    </div>

                    <div className="confirmarSenha col-12 col-sm-6 col-md-6">
                        <Input label="Confirmar Senha" type="password" id="confirmarSenha" className="form-input col-12" placeholder="Confirme a senha" />
                    </div>

                </div>
            </div>

            <div className="row justify-content-around py-4">
                <Button label="Voltar" navigation route="login" class="btn-retorno" />
                <Button label="Cadastrar" onclick="null" class="btn-confirmacao" />
            </div>
        </>
    )
}

export default FormRegister
