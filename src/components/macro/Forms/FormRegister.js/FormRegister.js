import React, { useEffect, useState } from "react"
import Input from "../../../micro/Forms/Input/Input"
import Button from "../../../micro/Button/Button"
import { useHistory } from "react-router"
import api from "../../../../services/api"
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
    const[user,setUser]= useState(initial)
    const[passwordConfirm, setConfirm]=useState("")
    useEffect(() => {})
    console.log(user)
    const history = useHistory()
    console.log()
    function goBackTo(){
        history.goBack()

    }
    function register(){
        api.post('/sign-up', user).then((response) => {
            console.log(response)
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
                        
                     
                        <Input change={e => setUser({...user, firstName: e.target.value})} label="Nome" type="text"  className="form-input col-12" placeholder="Ex.: Francisca" />

                    </div>
                    <div className="sobrenome col-12 col-md-5">
                        <Input change={e => setUser({...user, lastName: e.target.value})} label="Sobrenome" type="text"  className="form-input col-12" placeholder="Ex.: dos Santos" />
                    </div>
                    <div className="nascimento col-12 col-md-3">
                        <Input change={e => setUser({...user, born: e.target.value})} label="Data de Nascimento" type="date"  className="form-input col-12"  />

                    </div>
                </div>

                <div className="row custom-form">

                    <div className="cpf col-12 col-sm-6 col-md-3">
                    <Input change={e => setUser({...user, cpf: e.target.value})} label="CPF" type="text" className="form-input col-12" placeholder="000.000.000-00" />

                    </div>

                    <div className="telefone col-12 col-sm-6 col-md-3">
                        <Input  change={e => setUser({...user,telephone: {number: e.target.value}})} label="Telefone" type="text" id="telefone" className="form-input col-12" placeholder="(00) 00000-0000" />
                    </div>

                    <div className="email col-12 col-md-6">
                        <Input  change={e => setUser({...user, email: e.target.value})} label="E-mail" type="text" id="email" className="form-input col-12" placeholder="exemplo@exemplo.com" />
                    </div>

                </div>

                <div className="row custom-form">

                    <div className="senha col-12 col-sm-6 col-md-6">
                        <Input change={e => setUser({...user, password: e.target.value})} label="Senha" type="password" id="senha" className="form-input col-12" placeholder="Defina uma senha" />
                    </div>

                    <div className="confirmarSenha col-12 col-sm-6 col-md-6">
                        <Input change={e => setConfirm(e.target.value)} label="Confirmar Senha" type="password" id="confirmarSenha" className="form-input col-12" placeholder="Confirme a senha" />
                    </div>

                </div>
            </div>

            <div className="row justify-content-around py-4">
                <Button label="Voltar" onclick={history.goBack} class="btn-retorno" />
                <Button onclick={register} label="Cadastrar"  class="btn-confirmacao" />
            </div>
        </>
    )
}

export default FormRegister
