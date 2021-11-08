import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css'
import FormDefault from '../../components/macro/Forms/FormDefault/FormDefault'
import Input from '../../components/micro/Forms/Input/Input'
import Button from '../../components/micro/Button/Button'

function Login(props) {

    return(
        <>
            <main className="conatiner-fluid custom-container py-4">
                <FormDefault title="Faça seu Login" action="./carrinho-2.html" className="custom-form-box mx-3 mx-sm-1 mx-lg-4 px-5 px-sm-1 px-lg-4">

                    <div className="container mb-3 custom-form-div py-2">
                        
                        <div className="row custom-form d-flex justify-content-center">
                            <div className="col-12 col-md-7">
                                <Input label="E-mail" className="form-input col-12 form-label" type="email" id="email" placeholder="Digite seu e-mail..." />
                            </div>
                        </div>

                        <div className="row custom-form d-flex justify-content-center">
                            <div className="col-12 col-md-7">
                                <Input label="Senha" type="password" className="form-label form-input col-12 " id="senha" placeholder="Digite sua senha..."/>
                            </div>
                            <small className="text-center my-0 mb-2">Esqueceu a senha?<a href="./recuperar-senha.html">Recuperar</a></small>
                        </div>

                        <div className="row justify-content-center">
                            <Button label="Entrar" onclick="null" class="btn-confirmacao" type="submit"/>
                            
                            <p className="mt-3 mb-1">Ainda não tem cadastro?</p>
                            <Button label="Cadastrar" onclick="null" class="btn-confirmacao" navigation route="./cadastro"/>
                        </div>
                    </div> 

                </FormDefault>
            </main>
        </>
    )
}
export default Login