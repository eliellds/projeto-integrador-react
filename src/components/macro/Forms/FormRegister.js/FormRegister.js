import React, { useEffect, useState } from "react"
import Input from "../../../micro/Forms/Input/Input"
import Button from "../../../micro/Button/Button"
import { useHistory } from "react-router"
import api from "../../../../services/api"
import InputHook from "../../../micro/Forms/Input/InputHook"
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
    const { register, handleSubmit, watch, formState: { errors }, reset, clearErrors, setError } = useForm();

    const [user, setUser] = useState(initial)
    const [passwordConfirm, setConfirm] = useState("")
    useEffect(() => {
    }, [])
    const history = useHistory()
    function goBackTo() {
        history.goBack()

    }

    useEffect(() => {
        document.addEventListener("keydown", function (event) {
            if (event.keyCode === 13 && event.target.nodeName === "INPUT") {
                var form = event.target.form;
                var index = Array.prototype.indexOf.call(form, event.target);
                form.elements[index + 1].focus();
                event.preventDefault();
            }
        });
    }, []);

    // buscar email na base para saber se já foi cadastrado
    const checkMail = (email) => {
        api.get('/user/email/' + email).then((response) => {
            if (response.data) {
                setValid({ ...isValid, email: false })
                console.log("Email já cadastrado!")
            } else {
                setValid({ ...isValid, email: true })
            }
        }).catch((error) => {
            console.log("Erro ao buscar")
            setValid({ ...isValid, email: true })
        })
    }

    // buscar cpf na base para saber se já foi cadastrado
    const checkCPF = (cpf) => {
        api.get('/user/cpf/' + cpf).then((response) => {
            if (response.data) {
                setValid({ ...isValid, cpf: true, cpfCheck: false })
                console.log("CPF já cadastrado!")
            }
        }).catch((error) => {
            console.log("Erro ao buscar")
            // setValid({ ...isValid, cpfCheck: true })
        })
    }

    // funcao async executada recebendo o parametro data do register do react-hook-form
    const registration = async data => {

        if (isValid.cpf == false) {
            return alert("CPF inválido!")
        } else if (isValid.email == false) {
            return alert("E-mail já cadastrado!")
        } else if (isValid.cpfCheck == false) {
            return alert("CPF já cadastrado!")
        }

        // objeto newUser recebendo os valores de register 
        // (register guarda os valores dos inputs atraves do props name)
        const newUser = ({
            firstName: data.nome,
            lastName: data.sobrenome,
            cpf: user.cpf.toString().replace(/[^0-9]/g, ""), // formatando para apenas numeros
            email: data.email,
            telephone: {

                number: data.telefone.toString().replace(/[^0-9]/g, "") // formatando para apenas numeros
            },
            born: data.data,
            password: data.senha
        })


        api.post('/sign-up', newUser).then((response) => {
            console.log(response)
            window.alert("Cadastrado com successo!")
            goBackTo()
        }).catch((error) => {
            window.alert("Erro ao cadastrar")
            console.log(error)
        })

    }

    const [isValid, setValid] = useState({
        cpf: true,
        email: true,
        cpfCheck: true
    })

    // @see https://incom.in.gov.br/js/util.js
    function checarCPF(e) {
        setValid({ ...isValid, cpfCheck: true, cpf: true })
        var cpf = e.target.value;
        cpf = cpf.toString().replace(/[^0-9]/g, ""); // transforma os valores digitados para apenas numeros

        let booleano = true
        if (cpf == "") {
            setUser({ ...user, cpf: "" })
            setError("cpf", {
                type: "focus",
                message: "",
            })
        }
        if (cpf.length !== 11 || ['00000000000', '11111111111', '22222222222',
            '33333333333', '44444444444', '55555555555', '66666666666',
            '77777777777', '88888888888', '99999999999'].includes(cpf)) {
            setUser({ ...user, cpf: "" })
            if (cpf != "") {
                setValid({ ...isValid, cpfCheck: true, cpf: false })
            }
            setError("cpf", {
                type: "focus",
                message: "",
            })
            return false;
        }
        var soma = 0;
        for (let i = 0; i < 9; i++) {
            soma += parseInt(cpf.charAt(i)) * (10 - i);
        }
        var resto = 11 - (soma % 11);
        if (resto == 10 || resto == 11) {
            resto = 0;
        }
        if (resto != parseInt(cpf.charAt(9))) {
            clearErrors(["cpf"]) // limpa o erro ao clicar no campo CPF quando este exibe erro
            setUser({ ...user, cpf: "" })
            if (cpf != "") {
                setValid({ ...isValid, cpfCheck: true, cpf: false })
            }
            setError("cpf", {
                type: "focus",
                message: "",
            })
            return false;
        }
        var soma = 0;
        for (let i = 0; i < 10; i++) {
            soma += parseInt(cpf.charAt(i)) * (11 - i);
        }
        var resto = 11 - (soma % 11);
        if (resto == 10 || resto == 11) {
            resto = 0;
        }
        if (resto != parseInt(cpf.charAt(10))) {
            clearErrors(["cpf"]) // limpa o erro ao clicar no campo CPF quando este exibe erro
            setUser({ ...user, cpf: "" })
            if (cpf != "") {
                setValid({ ...isValid, cpfCheck: true, cpf: false })
            }
            setError("cpf", {
                type: "focus",
                message: "",
            })
            return false;
        }
        setValid({ ...isValid, cpf: true })
        checkCPF(cpf)
        setUser({ ...user, cpf: cpf })
        clearErrors(["cpf"]) // limpa o erro ao clicar no campo CPF quando este exibe erro
        return cpf;
    }

    function ValidarTel(e) {
        var tel = e.target.value;
        tel = tel.toString().replace(/[^0-9]/g, ""); // transforma o valor digitado para apenas numeros
        setUser({ ...user, telephone: { ...user.telephone, number: tel } })
        clearErrors(["telefone"])
        return tel
    }

    // limpam o vaor do input ao alterar o campo quando o mesmo tem erro
    function LimparNome(e) {
        clearErrors(["nome"])
    }
    function LimparSobrenome(e) {
        clearErrors(["sobrenome"])
    }
    function LimparData(e) {
        clearErrors(["data"])
    }
    function LimparEmail(e) {
        setValid({ ...isValid, email: true })
        var email = e.target.value
        setUser({ ...user, email: email })
        clearErrors(["email"])
        checkMail(email)
        return email
    }
    function LimparSenha(e) {
        clearErrors(["senha"])
    }
    function LimparConfirmacao(e) {
        return
    }


    return (
        <>
            <div className="row justify-content-center">
                <div className="row custom-form">
                    <div className="nome col-12 col-md-4">


                        <InputHook hook // hook eh a props para input padrao com a verificacao
                            name="nome" // name sera utilizado no componente para fazer as comparacoes
                            register={register} // register recebe o estado atual do que esta em register para utilizar na funcao do componente
                            required={<span className="text-danger">Digite um nome válido e sem números!</span>} // mensagem de erro que sera exibida caso o campo nao seja valido
                            maxlength={50} // tamanho maximo do campo
                            pattern={/^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u}
                            errors={errors}
                            clear={clearErrors}
                            change={LimparNome}
                            label="Nome"
                            type="text"
                            className="form-input col-12"
                            placeholder="Ex.: Francisca" />

                    </div>
                    <div className="sobrenome col-12 col-md-5">
                        <InputHook hook // hook eh a props para input padrao com a verificacao
                            name="sobrenome" // name sera utilizado no componente para fazer as comparacoes
                            register={register} // register recebe o estado atual do que esta em register para utilizar na funcao do componente
                            required={<span className="text-danger">Digite um sobrenome válido e sem números!</span>} // mensagem de erro que sera exibida caso o campo nao seja valido
                            maxlength={150} // tamanho maximo do campo
                            pattern={/^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u}
                            errors={errors}
                            change={LimparSobrenome}
                            label="Sobrenome"
                            type="text"
                            className="form-input col-12"
                            placeholder="Ex.: dos Santos" />
                    </div>
                    <div className="nascimento col-12 col-md-3">
                        <InputHook hook // hook eh a props para input padrao com a verificacao
                            name="data" // name sera utilizado no componente para fazer as comparacoes
                            register={register} // register recebe o estado atual do que esta em register para utilizar na funcao do componente
                            required={<span className="text-danger">Digite uma data válida!</span>} // mensagem de erro que sera exibida caso o campo nao seja valido
                            pattern={/^(19|20)\d\d[- /.](0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])$/}
                            errors={errors}
                            change={LimparData}
                            label="Data de Nascimento"
                            type="date"
                            className="form-input col-12" />

                    </div>
                </div>

                <div className="row custom-form">

                    <div className="cpf col-12 col-sm-6 col-md-3">
                        <InputHook // hook eh a props para input padrao com a verificacao
                            name="cpf" // name sera utilizado no componente para fazer as comparacoes
                            register={register} // register recebe o estado atual do que esta em register para utilizar na funcao do componente
                            required={user.cpf == "" ? <span className="text-danger">Digite um CPF válido!</span> : ""} // mensagem de erro que sera exibida caso o campo nao seja valido
                            maxlength={14} // tamanho maximo do campo
                            minlength={11} // tamanho minimo do campo
                            pattern={/([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})/u}
                            errors={errors}
                            change={checarCPF}
                            mask="999.999.999-99" // mascara que sera aplicada
                            value={user.cpf}
                            label="CPF"
                            type="text"
                            className="form-input col-12"
                            placeholder="000.000.000-00" />
                        {isValid.cpf ? "" : <span className="text-danger">Digite um CPF válido! </span>}
                        {isValid.cpfCheck ? "" : <span className="text-danger">CPF já cadastrado!</span>}

                    </div>

                    <div className="telefone col-12 col-sm-6 col-md-3">
                        <InputHook // hook eh a props para input padrao com a verificacao
                            name="telefone" // name sera utilizado no componente para fazer as comparacoes
                            register={register} // register recebe o estado atual do que esta em register para utilizar na funcao do componente
                            required={<span className="text-danger">Digite o campo com DDD e telefone!</span>} // mensagem de erro que sera exibida caso o campo nao seja valido
                            maxlength={15} // tamanho maximo do campo
                            minlength={11} // tamanho minimo do campo
                            pattern={/\([1-9]\d\)\s9?\d{4}-\d{4}/}
                            errors={errors}
                            mask={user.telephone.number.charAt(2) == 9 ? "(99) 99999-9999" : "(99) 9999-9999"} // mascara que sera aplicada
                            value={user.telephone.number}
                            change={ValidarTel}
                            label="Telefone"
                            type="text"
                            id="telefone"
                            className="form-input col-12"
                            placeholder="(00) 00000-0000" />
                    </div>

                    <div className="email col-12 col-md-6">
                        <InputHook hook // hook eh a props para input padrao com a verificacao
                            name="email" // name sera utilizado no componente para fazer as comparacoes
                            register={register} // register recebe o estado atual do que esta em register para utilizar na funcao do componente
                            required={<span className="text-danger">Digite o email corretamente!</span>} // mensagem de erro que sera exibida caso o campo nao seja valido
                            maxlength={255} // tamanho maximo do campo
                            pattern={/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/}
                            errors={errors}
                            change={LimparEmail}
                            label="E-mail"
                            type="text"
                            id="email"
                            className="form-input col-12"
                            placeholder="exemplo@exemplo.com" />
                        {isValid.email ? "" : <span className="text-danger">E-mail já cadastrado!</span>}
                    </div>

                </div>

                <div className="row custom-form">

                    <div className="senha col-12 col-sm-6 col-md-6">

                        {/* componente 'InputPassword' criado por haver uma particularidade nesse input especifico */}

                        <InputHook hook // hook eh a props para input padrao com a verificacao
                            name="senha" // name sera utilizado no componente para fazer as comparacoes
                            register={register} // register recebe o estado atual do que esta em register para utilizar na funcao do componente
                            required={<span className="text-danger">A senha deve ter no mínimo 8 caracteres, uma letra e um número</span>} // mensagem de erro que sera exibida caso o campo nao seja valido
                            pattern={/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/} // senha deve ter min 8 caracteres, min uma letra e min um numero
                            errors={errors} // passa o objeto errors para o componente para ser utilizado pelo componente ErrorMessage
                            type="password"
                            change={LimparSenha}
                            label="Senha"
                            type="password"
                            id="senha"
                            className="form-input col-12 form-control"
                            placeholder="Defina uma senha" />
                    </div>

                    <div className="confirmarSenha col-12 col-sm-6 col-md-6">
                        <InputHook confirm // confirm eh a props que indica que eh o segundo campo de senha, o campo de confirmacao
                            name="confirmarSenha"
                            register={register}
                            watch={watch} // watch ira comparar o valor digitado com o valor do primeiro input de senha
                            blur={LimparConfirmacao}
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
