import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Register.css'
import FormDefault from '../../components/macro/Forms/FormDefault/FormDefault'
import Input from '../../components/micro/Forms/Input/Input'
import Button from '../../components/micro/Button/Button'

function Register(props) {

    return (
        <>
            <section className="container-fluid px-sm-5 py-3 custom-container">
                <FormDefault title="Faça seu Cadastro" action="./login.html" className="custom-form-box mx-3 mx-sm-1 mx-lg-4 px-5 px-sm-1 px-lg-4">
                
                    <div className="row justify-content-center">
                        <div className="row custom-form">
                            <div className="nome col-12 col-md-6">
                                <Input label="Nome" type="text"  type="text" id="nome" className="form-input col-12" placeholder="Ex.: Francisca"/>
                            </div>
                            <div className="sobrenome col-12 col-md-6">
                                <Input label="Sobrenome" type="text" id="sobrenome" className="form-input col-12" placeholder="Ex.: dos Santos"/>
                            </div>
                        </div>

                        <div className="row custom-form">

                            <div className="cpf col-12 col-sm-6 col-md-3">
                                <Input label="CPF" type="text" id="cpf" className="form-input col-12" placeholder="000.000.000-00"/>
                            </div>

                            <div className="telefone col-12 col-sm-6 col-md-3">
                                <Input label="Telefone" type="text" id="telefone" className="form-input col-12" placeholder="(00) 00000-0000"/>
                            </div>

                            <div className="email col-12 col-md-6">
                                <Input label="E-mail" type="text" id="email" className="form-input col-12" placeholder="exemplo@exemplo.com"/>
                            </div>

                        </div>

                        <div className="row custom-form">

                            <div className="senha col-12 col-sm-6 col-md-6">
                                <Input label="Senha" type="password" id="senha" className="form-input col-12" placeholder="Defina uma senha"/>
                            </div>

                            <div className="confirmarSenha col-12 col-sm-6 col-md-6">
                                <Input label="Confirmar Senha" type="password" id="confirmarSenha" className="form-input col-12" placeholder="Confirme a senha"/>
                            </div>

                        </div>
                    </div>

                    <div className="row justify-content-around py-4">
                        <Button label="Voltar" navigation route="login" class="btn-retorno" />
                        <Button label="Cadastrar" onclick="null" class="btn-confirmacao" />
                    </div>

                </FormDefault>
            </section>
        </>
    )
}

export default Register