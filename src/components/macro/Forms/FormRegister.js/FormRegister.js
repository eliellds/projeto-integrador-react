import React, { useEffect, useState } from "react"
import Input from "../../../micro/Forms/Input/Input"
import Button from "../../../micro/Button/Button"
import { useHistory } from "react-router"
import api from "../../../../services/api"
import InputPassword from "../../../micro/Forms/Input/InputPassword"
import { useForm } from "react-hook-form"; // lembrar de fazer npm install para instalar a biblioteca react-hook-form
import { ErrorMessage } from "@hookform/error-message"; // lembrar de fazer npm install para instalar a biblioteca error-message

const initial = {
    firstName: "",
    lastName: "",
    cpf: "",
    email: "",
    telephone: {

        number: ""
    },
    born: "",
    password: ""
}


function FormRegister(props) {

    // desfragmentando as funcoes e objetos da biblioteca
    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();

    const [user, setUser] = useState(initial)
    const [passwordConfirm, setConfirm] = useState("")
    useEffect(() => { })
    console.log(user)
    const history = useHistory()
    console.log()
    function goBackTo() {
        history.goBack()

    }
    function registration() {
        console.log("aqui foi")
        api.post('/sign-up', user).then((response) => {
            window.alert("Cadastrado com successo!")
            goBackTo()
        }).catch((error) => {
            window.alert("Erro ao cadastrar")
            console.log(error)
        })

    }


    return (
        <>
            <div className="row justify-content-center">
                <div className="row custom-form">
                    <div className="nome col-12 col-md-4">


                        <Input change={e => setUser({ ...user, firstName: e.target.value })} label="Nome" type="text" className="form-input col-12" placeholder="Ex.: Francisca" />

                    </div>
                    <div className="sobrenome col-12 col-md-5">
                        <Input change={e => setUser({ ...user, lastName: e.target.value })} label="Sobrenome" type="text" className="form-input col-12" placeholder="Ex.: dos Santos" />
                    </div>
                    <div className="nascimento col-12 col-md-3">
                        <Input change={e => setUser({ ...user, born: e.target.value })} label="Data de Nascimento" type="date" className="form-input col-12" />

                    </div>
                </div>

                <div className="row custom-form">

                    <div className="cpf col-12 col-sm-6 col-md-3">
                        <Input change={e => setUser({ ...user, cpf: e.target.value })} label="CPF" type="text" className="form-input col-12" placeholder="000.000.000-00" />

                    </div>

                    <div className="telefone col-12 col-sm-6 col-md-3">
                        <Input change={e => setUser({ ...user, telephone: { number: e.target.value } })} label="Telefone" type="text" id="telefone" className="form-input col-12" placeholder="(00) 00000-0000" />
                    </div>

                    <div className="email col-12 col-md-6">
                        <Input change={e => setUser({ ...user, email: e.target.value })} label="E-mail" type="text" id="email" className="form-input col-12" placeholder="exemplo@exemplo.com" />
                    </div>

                </div>

                <div className="row custom-form">

                    <div className="senha col-12 col-sm-6 col-md-6">

                        {/* componente 'InputPassword' criado por haver uma particularidade nesse input especifico */}
                        
                        <InputPassword first // first indica que eh o primeiro campo de senha
                            name="senha" // name sera utilizado no componente para fazer as comparacoes
                            register={register} // register recebe o estado atual do que esta em register para utilizar na funcao do componente
                            required="A senha deve ter no mínimo 8 caracteres, uma letra e um número" // mensagem de erro que sera exibida caso o campo nao seja valido
                            minlength={8} // tamanho minimo da senha
                            pattern={/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/} // senha deve ter min 8 caracteres, min uma letra e min um numero
                            errors={errors} // passa o objeto errors para o componente para ser utilizado pelo componente ErrorMessage
                            type="password"
                            change={e => setUser({ ...user, password: e.target.value })}
                            label="Senha"
                            type="password"
                            id="senha"
                            className="form-input col-12 form-control"
                            placeholder="Defina uma senha" />
                    </div>

                    <div className="confirmarSenha col-12 col-sm-6 col-md-6">
                        <InputPassword confirm // confirm indica que eh o segundo campo de senha, o campo de confirmacao
                            name="confirmarSenha"
                            register={register}
                            watch={watch} // watch ira comparar o valor digitado com o valor do primeiro input de senha
                            change={e => setConfirm(e.target.value)}
                            label="Confirmar Senha"
                            type="password"
                            id="confirmarSenha"
                            className="form-input col-12 form-control"
                            placeholder="Confirme a senha" />

                        {/* componente que exibe a mensagem de erro do componente que leva o nome indicado pela prop 'name' */}
                        <ErrorMessage errors={errors} name="confirmarSenha" />
                    </div>

                </div>
            </div>

            <div className="row justify-content-around py-4">
                <Button label="Voltar" onclick={history.goBack} class="btn-retorno" />
                {/* no onclick, eh executada a funcao 'handleSubmit' do hook-form, 
                a qual ira exibir os erros de cada campo preenchido incorretamente,
                ou ira executar a funcao callback passada para ela caso o formulario esteja corretamente preenchido */}
                <Button onclick={handleSubmit(registration)} label="Cadastrar" class="btn-confirmacao" />
            </div>
        </>
    )
}

export default FormRegister
