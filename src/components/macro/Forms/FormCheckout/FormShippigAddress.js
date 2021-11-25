import React, { useEffect, useState } from "react"
import Input from "../../../micro/Forms/Input/Input"
import FormDefault from "../FormDefault/FormDefault"
import Button from "../../../micro/Button/Button";
import H2 from "../../../micro/Title/H2";
import SelectCard from "../../../micro/Forms/Select/SelectCard";
import api from "../../../../services/api"
import { useHistory } from "react-router";
import SelectedFlag from "../../../micro/Forms/Select/SelectedFlag";
import InputCep from "../../../micro/Forms/Input/InputCep";
import Select from "../../../micro/Forms/Select/Select";
import { MoipValidator } from "moip-sdk-js";
import { useForm } from "react-hook-form"; // lembrar de fazer npm install para instalar a biblioteca react-hook-form
import { ErrorMessage } from "@hookform/error-message"; // lembrar de fazer npm install para instalar a biblioteca error-message
import InputHook from "../../../micro/Forms/Input/InputHook"

const initial = {

    myUser: {
        id: 0,
        email: "",
    },
    payment: {
        id: 2
    },
    address: {
        cep: "",
        city: "",
        state: "",
        district: "",
        street: "",
        number: 0,
        complement: "",
        reference: ""

    },
    telephone: {
        number: ""
    },
    card: {
        cardNumber: "",
        name: "",
        cpf: "",
        birthDate: "",
        dueDate: "",
        flag:
        {
            id: 1

        }
    },
    delivery: {
        id: 1

    },
    deliveryValue: 150,

}
const crypto = require('crypto');
const alg = 'aes-256-ctr'
const pwd = 'qwertjose'

function FormShippigAddress(props) {

    function criptCard(num) {

        var text = num
        var cipher = crypto.createCipher(alg, pwd)
        var crypted = cipher.update(text, 'utf8', 'hex')
        return crypted.toString()


    }

    function uncriptCard(cript) {
        var text = "1234789001234"
        var cipher = crypto.createCipher(alg, pwd)
        var crypted = cipher.update(text, 'utf8', 'hex')
        var decipher = crypto.createDecipher(alg,pwd)
        var uncrypted = decipher.update(crypted, 'hex', 'utf8')
        return console.log(uncrypted)



    }
    uncriptCard()

    const user = JSON.parse(localStorage.getItem('user'))

    const [order, setOrder] = useState(initial);
    const [flags, setFlag] = useState([]);
    const [inputBrand, setInputBrand] = useState("");
    const [inputMonth, setInputMonth] = useState("");
    const [inputYear, setInputYear] = useState("");
    // desfragmentando as funcoes e objetos da biblioteca react-hook-form
    const { register, handleSubmit, formState: { errors }, reset, clearErrors, setError, setValue } = useForm();


    const getAddress = () => {
        api.get(`/userAddress/myAddress/${user.value.id}`).then(
            res => {
                getTelephone(res.data[0].address)
            })
            .catch((err) => {
                console.error("Erro ao consumir api de Address" + err)
            })
    }

    useEffect(() => {
        getAddress();
        getUfs();
    }, []);

    const getTelephone = (addressRes) => {
        api.get(`/user/${user.value.id}`).then(
            res => {

                setOrder({ ...order, myUser: { email: res.data.email, id: res.data.id }, telephone: { ...res.data.telephone }, address: { ...addressRes } })

            })
            .catch((err) => {
                console.error("Erro ao consumir api de telefone" + err)
            })

    }

    const getUfs = () => {
        return ufs
    }

    console.log(order)

    function postOrder() {
        if (cpfCheck == false) {
            return alert("Preencha os dados corretamente")
        }
        var tempOrder = {...order}
        
        tempOrder =({...tempOrder, card: { ...tempOrder.card, cardNumber: criptCard(tempOrder.card.cardNumber).toString(), dueDate: inputYear + "-" + inputMonth + "-01" }})
        
        let orderJson = JSON.stringify(tempOrder)

        localStorage.setItem('order', orderJson)
        window.location.href = "/order"
    }

    function authCard(e) {
        var cardNumber = e.target.value

        if (MoipValidator.isValidNumber(cardNumber) == true) {

            console.log(MoipValidator.cardType(cardNumber))

            switch (MoipValidator.cardType(cardNumber).brand) {
                case "VISA":
                    setOrder({ ...order, card: { ...order.card, flag: { id: 2 }, cardNumber: cardNumber } })
                    return setInputBrand("VISA")
                    break;
                case "MASTERCARD":
                    setOrder({ ...order, card: { ...order.card, flag: { id: 1 }, cardNumber: cardNumber  } })
                    return setInputBrand("MASTERCARD");
                    break;
                case "AMEX":
                    setOrder({ ...order, card: { ...order.card, flag: { id: 3 }, cardNumber: cardNumber  } })
                    return setInputBrand("AMERICAN EXPRESS");
                    break;
                case "ELO":
                    setOrder({ ...order, card: { ...order.card, flag: { id: 4 }, cardNumber: cardNumber  } })
                    return setInputBrand("ELO");
                    break;
                case "HIPERCARD":
                    setOrder({ ...order, card: { ...order.card, flag: { id: 5 }, cardNumber: cardNumber  } })
                    return setInputBrand("HIPERCARD");
                    break;
                case "DINERS":
                    setOrder({ ...order, card: { ...order.card, flag: { id: 6 }, cardNumber: cardNumber  } })
                    return setInputBrand("DINERS CLUB");
                    break;
                default:
                    return setInputBrand("Cartão não aceito!")
            }
        }
    }

    function authDateCard() {
        var dataCurrente = new Date();
        console.log(order.card.birthDate)
        var dateCurrent = (dataCurrente.getFullYear()-10)+"-"+dataCurrente.getMonth()+"-"+dataCurrente.getDate()

        if(dateCurrent>order.card.birthDate) {

            if (MoipValidator.isExpiryDateValid(inputMonth, inputYear) == true) {
                postOrder()
            } else {
                console.log("data inválida");
            }
        }else{
            window.alert("Data de nascimento do titular do cartão invalida!"  )
            
        }
    }

    function authCodeCard() {

        if (MoipValidator.isSecurityCodeValid() == true) {
            
        }
    }


    const [displayNoneB, setDisplayNoneB] = useState("d-none")
    const [displayNoneC, setDisplayNoneC] = useState("")
    const [dueDate, setDueDate] = useState("")
    const [buttons, setButtons] = useState(
        <>
            <Button class="col-4 cartao forma-pagamento selected-button" label={<H2 h2="Cartão" />}></Button>
            {/* <Button onclick={changeComponent} class="col-4 forma-pagamento boleto disabled-button" label={<H2 h2="Boleto" />}></Button> */}
        </>
    )
    let change = false
    const history = useHistory()

    // function changeComponent() {
    //     if (change) {
    //         setButtons(
    //             <>
    //                 <Button class="col-4 cartao forma-pagamento selected-button" label={<H2 h2="Cartão" />}></Button>
    //                 <Button onclick={changeComponent} class="col-4 forma-pagamento boleto disabled-button" label={<H2 h2="Boleto" />}></Button>
    //             </>
    //         )
    //         change = false
    //         setDisplayNoneB("d-none")
    //         setDisplayNoneC("")
    //         console.log("noneC")
    //         console.log(change)
    //     } else {
    //         setButtons(
    //             <>
    //                 <Button onclick={changeComponent} class="col-4 cartao forma-pagamento disabled-button" label={<H2 h2="Cartão" />}></Button>
    //                 <Button class="col-4 forma-pagamento boleto selected-button" label={<H2 h2="Boleto" />}></Button>
    //             </>
    //         )
    //         change = true
    //         setDisplayNoneB("")
    //         setDisplayNoneC("d-none")
    //         console.log("noneB")
    //         console.log(change)
    //     }
    // }

    const [paymentMethod, setPaymentMethod] = useState("")

    function getListPayments() {
        api
            .get("/payments")
            .then((response) => setPaymentMethod(response.data))
            .catch((err) => {
                console.error("Erro ao consumir api de payments" + err)
            })

    }
    function getListFlags() {
        api
            .get("/flags")
            .then((response) => setFlag(response.data))
            .catch((err) => {
                console.error("Erro ao consumir api de flag" + err)
            })

    }
    function getOrderLocal() {
        setOrder()
    }

    useEffect(() => {
        getListPayments()
        getListFlags()

    }, [])

    // console.log(paymentMethod)
    function backToCart() {
        window.location.href = "/cart"
    }

    const [ufs, setUfs] = useState([
        { id: 1, subjectDescription: "AC" }, { id: 2, subjectDescription: "AL" }, { id: 3, subjectDescription: "AP" },
        { id: 4, subjectDescription: "AM" }, { id: 5, subjectDescription: "BA" }, { id: 6, subjectDescription: "CE" },
        { id: 7, subjectDescription: "DF" }, { id: 8, subjectDescription: "ES" }, { id: 9, subjectDescription: "GO" },
        { id: 10, subjectDescription: "MA" }, { id: 11, subjectDescription: "MS" }, { id: 12, subjectDescription: "MT" },
        { id: 13, subjectDescription: "MG" }, { id: 14, subjectDescription: "PA" }, { id: 15, subjectDescription: "PB" },
        { id: 16, subjectDescription: "PR" }, { id: 17, subjectDescription: "PE" }, { id: 18, subjectDescription: "PI" },
        { id: 19, subjectDescription: "RJ" }, { id: 20, subjectDescription: "RN" }, { id: 21, subjectDescription: "RS" },
        { id: 22, subjectDescription: "RO" }, { id: 23, subjectDescription: "RR" }, { id: 24, subjectDescription: "SC" },
        { id: 25, subjectDescription: "SP" }, { id: 26, subjectDescription: "SE" }, { id: 27, subjectDescription: "TO" }
    ]);


    /////////////////// INICIO FUNCOES DE BUSCA E VALIDACAO DE CEP /////////////////////

    function limpa_formulário_cep() {
        //Limpa valores do formulário de cep.
        setOrder({ ...order, address: { ...order.address, street: "", district: "", city: "", state: "", number: "", complement: "", reference: "" } });
    }

    function meu_callback(conteudo) {
        console.log(conteudo)
        if (!("erro" in conteudo)) {
            //Atualiza os campos com os valores.
            setOrder({ ...order, address: { ...order.address, street: conteudo.logradouro, district: conteudo.bairro, city: conteudo.localidade, state: conteudo.uf } })
        } //end if.
        else {
            //CEP não Encontrado.
            limpa_formulário_cep();
            alert("CEP não encontrado.");
        }
    }

    function buscarCep(e) {

        const valor = e.target.value

        //Nova variável "cep" somente com dígitos.
        const cep = valor.replace(/\D/g, '');

        //Verifica se campo cep possui valor informado.
        if (cep != "") {

            //Expressão regular para validar o CEP.
            var validacep = /^[0-9]{8}$/;

            //Valida o formato do CEP.
            if (validacep.test(cep)) {

                //Preenche os campos com "..." enquanto consulta webservice.
                setOrder({ ...order, address: { ...order.address, street: "...", district: "...", city: "...", state: "...", number: "", complement: "", reference: "" } });

                fetch(`https://viacep.com.br/ws/${cep}/json/`)
                    .then(res => res.json())
                    .then(data => meu_callback(data))

            } //end if.
            else {
                //cep é inválido.
                limpa_formulário_cep();
                alert("Formato de CEP inválido.");
            }
        } //end if.
        else {
            //cep sem valor, limpa formulário.
            limpa_formulário_cep();
        }
    };
    /////////////////// FIM FUNCOES DE BUSCA E VALIDACAO DE CEP /////////////////////

    /////////////////// INICIO FUNCAO DE VALIDAÇÃO DE CPF /////////////////////

    // @see https://incom.in.gov.br/js/util.js
    function checarCPF(e) {
        setCheck(true)
        setCpf(true)
        clearErrors(["cpf"]) // limpa o erro ao clicar no campo CPF quando este exibe erro
        var cpf = e.target.value;
        cpf = cpf.toString().replace(/[^0-9]/g, ""); // transforma os valores digitados para apenas numeros

        let booleano = true
        if (cpf == "") {
            // setCheck(false)
            setCpf("")
            return false
        }

        if (cpf.length !== 11 || ['00000000000', '11111111111', '22222222222',
            '33333333333', '44444444444', '55555555555', '66666666666',
            '77777777777', '88888888888', '99999999999'].includes(cpf)) {
            setCheck(false)
            setCpf("")
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
            setCheck(false)
            setCpf("")
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
            setCheck(false)
            setCpf("")
            return false;
        }
        clearErrors(["cpf"]) // limpa o erro ao clicar no campo CPF quando este exibe erro
        setCheck(true)
        setCpf(cpf)
        return cpf;
    }

    /////////////////// FIM FUNCAO DE VALIDAÇÃO DE CPF /////////////////////

    // limpam o vaor do input ao alterar o campo quando o mesmo tem erro

    function LimparNome(e) {
        clearErrors(["nome"])
        setOrder({ ...order, card: { ...order.card, name: e.target.value } })
    }

    function LimparData(e) {
        clearErrors(["data"])
        setOrder({ ...order, card: { ...order.card, birthDate: e.target.value } })
    }

    function LimparTelefone(e) {
        clearErrors(["telefone"])
        setOrder({ ...order, telephone: { ...order.telephone, number: e.target.value } })
    }

    function LimparEmail(e) {
        clearErrors(["E-mail"])
        setOrder({ ...order, myUser: { ...order.myUser, email: e.target.value } })
    }

    function LimparNumero(e) {
        clearErrors(["Número"])
        setOrder({ ...order, address: { ...order.address, number: e.target.value } })
    }

    const [cpfCheck, setCheck] = useState(true)
    const [cpfValue, setCpf] = useState("")
    return (
        <>
            <FormDefault id="address" title="Dados de entrega" action="/order">

                <div class="row  justify-content-center mb-3">

                    <div class="row ">
                        <div class=" col-6  col-sm-6 col-md-3">
                        <InputHook hook // hook eh a props para input padrao com a verificacao
                                name="telefone" // name sera utilizado no componente para fazer as comparacoes
                                register={register} // register recebe o estado atual do que esta em register para utilizar na funcao do componente
                                required={<span className="text-danger">Digite um telefone válido</span>} // mensagem de erro que sera exibida caso o campo nao seja valido
                                maxlength={15} // tamanho maximo do campo
                                pattern={/^\(?[1-9]{2}\)? ?(?:[2-8]|9[1-9])[0-9]{3}\-?[0-9]{4}$/}
                                errors={errors}
                                clear={clearErrors}
                                change={LimparTelefone}
                                label="Telefone"
                                type="tel"
                                className="form-input col-12"
                                placeholder="Telefone para contato com DDD" />
                            
                        </div>

                        <div class=" col-6  col-sm-6 col-md-4">
                        <InputHook hook // hook eh a props para input padrao com a verificacao
                                name="E-mail" // name sera utilizado no componente para fazer as comparacoes
                                register={register} // register recebe o estado atual do que esta em register para utilizar na funcao do componente
                                required={<span className="text-danger">Digite um email válido</span>} // mensagem de erro que sera exibida caso o campo nao seja valido
                                maxlength={30} // tamanho maximo do campo
                                pattern={/^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i}
                                errors={errors}
                                clear={clearErrors}
                                change={LimparEmail}
                                label="E-mail"
                                type="mail"
                                className="form-input col-12 form-label"
                                placeholder="E-mail para contato"/>
                            
                        </div>


                        <div class=" col-6 col-sm-6 col-md-3">
                        <InputHook hook // hook eh a props para input padrao com a verificacao
                                name="Cep" // name sera utilizado no componente para fazer as comparacoes
                                register={register} // register recebe o estado atual do que esta em register para utilizar na funcao do componente
                                required={<span className="text-danger">Digite um CEP válido</span>} // mensagem de erro que sera exibida caso o campo nao seja valido
                                maxlength={9} // tamanho maximo do campo
                                pattern={/[0-9]{5}-[0-9]{3}/}
                                errors={errors}
                                clear={clearErrors}
                                change={buscarCep}
                                label="CEP"
                                type="text"
                                className="form-input col-12"
                                placeholder="Digite seu CEP..."/>
                    
                        </div>

                        <div class=" col-6 col-sm-6 col-md-2">
                            <Select label="Estado" disabled={true} options={ufs} selected={order.address.state} change={e => setOrder({ ...order, address: { ...order.address, state: e.target.value } })} default="Estado:" />
                        </div>

                        <div class=" col-6 col-sm-6 col-md-4">
                            <Input value={order.address.city} disabled={true} change={e => setOrder({ ...order, address: { ...order.address, city: e.target.value } })} label="Cidade" className="form-input col-12 form-label" type="text" name="city" placeholder="Digite a cidade..." />
                        </div>

                        <div class=" col-9 col-md-6">
                            <Input value={order.address.street} disabled={true} change={e => setOrder({ ...order, address: { ...order.address, street: e.target.value } })} label="Logradouro" className="form-input col-12 form-label" type="text" name="street" placeholder="Digite o logradouro..." />
                        </div>

                        <div class=" col-3  col-md-2">
                        <InputHook hook // hook eh a props para input padrao com a verificacao
                                name="Número" // name sera utilizado no componente para fazer as comparacoes
                                register={register} // register recebe o estado atual do que esta em register para utilizar na funcao do componente
                                required={<span className="text-danger">Digite um número válido</span>} // mensagem de erro que sera exibida caso o campo nao seja valido
                                maxlength={5} // tamanho maximo do campo
                                pattern={/(\d)/}
                                errors={errors}
                                clear={clearErrors}
                                change={LimparNumero}
                                label="Número"
                                type="text"
                                className="form-input col-12"
                                placeholder="Digite o número..."/>
                        </div>

                        <div class=" col-6 col-md-4">
                            <Input value={order.address.district} disabled={true} change={e => setOrder({ ...order, address: { ...order.address, district: e.target.value } })} label="Bairro" className="form-input col-12 form-label" type="text" name="district" placeholder="Digite o Bairro..." />
                        </div>

                        <div class=" col-6  col-md-4">
                            <Input value={order.address.complement} change={e => setOrder({ ...order, address: { ...order.address, complement: e.target.value } })} label="Complemento" className="form-input col-12 form-label" type="text" name="complement" placeholder="Digite o complemento..." />
                        </div>

                        <div class=" col-6 col-md-4">
                            <Input value={order.address.reference} change={e => setOrder({ ...order, address: { ...order.address, reference: e.target.value } })} label="Referencia" className="form-input col-12 form-label" type="text" name="reference" placeholder="Digite um ponto de referência" />

                        </div>

                    </div>

                </div>

            </FormDefault>

            <FormDefault id="card" title="Dados de Pagamento" className="mt-5" action="/order">
                <div className="escolha row justify-content-around mt-4 ">

                    {buttons}

                </div>


                {/* <div className={`row pagamento justify-content-center ${displayNoneB}`}>
                    <div className="col-8 justify-content-center text-center ">
                        <input type="text" readonly className="form-control-plaintext justifi-content-center text-center" id="staticEmail"
                            value="Número do boleto: 000000 000000 000000 000000 000000" />
                    </div>
                </div> */}

                <div className={"row justify-content-center"}>
                    <div className={`row custom-form ${displayNoneC}`}>

                        <div className=" col-12 col-md-5">
                            <InputHook hook // hook eh a props para input padrao com a verificacao
                                name="nome" // name sera utilizado no componente para fazer as comparacoes
                                register={register} // register recebe o estado atual do que esta em register para utilizar na funcao do componente
                                required={<span className="text-danger">Digite um nome válido e sem números!</span>} // mensagem de erro que sera exibida caso o campo nao seja valido
                                maxlength={50} // tamanho maximo do campo
                                pattern={/^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u}
                                errors={errors}
                                clear={clearErrors}
                                change={LimparNome}
                                label="Nome Titular"
                                type="text"
                                className="form-input col-12"
                                placeholder="Nome como está no cartão" />
                        </div>

                        <div className=" col-6 col-md-4">
                            <InputHook // hook eh a props para input padrao com a verificacao
                                name="cpf" // name sera utilizado no componente para fazer as comparacoes
                                register={register} // register recebe o estado atual do que esta em register para utilizar na funcao do componente
                                required={cpfValue == "" ? <><span className="text-danger">Campo inválido!</span><br/></> : ""} // mensagem de erro que sera exibida caso o campo nao seja valido
                                maxlength={14} // tamanho maximo do campo
                                minlength={11} // tamanho minimo do campo
                                pattern={/([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})/u}
                                errors={errors}
                                change={checarCPF}
                                mask="999.999.999-99" // mascara que sera aplicada
                                value={cpfValue}
                                label="CPF Titular"
                                type="text"
                                className="form-input col-12"
                                placeholder="000.000.000-00" />
                            {cpfCheck ? "" : <span className="text-danger">Digite um CPF a válido! </span>}

                        </div>

                        <div className=" col-6 col-md-3">
                        <InputHook hook // hook eh a props para input padrao com a verificacao
                            name="data" // name sera utilizado no componente para fazer as comparacoes
                            register={register} // register recebe o estado atual do que esta em register para utilizar na funcao do componente
                            required={<span className="text-danger">Digite uma data válida!</span>} // mensagem de erro que sera exibida caso o campo nao seja valido
                            pattern={/^(19|20)\d\d[- /.](0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])$/}
                            errors={errors}
                            change={LimparData}
                            label="Data de Nascimento Titular"
                            type="date"
                            className="form-input col-12" />
                        </div>

                        <div className=" col-12 col-md-4">
                            <Input change={authCard} label="Numero do Cartão" className="form-input col-12 form-label" type="text" name="cardNumber" placeholder="Ex.: 0000 1111 2222 3333." />
                        </div>

                        <div className=" col-6 col-md-1">
                            <Input /*change={e => validarCvv(e)}*/ label="CVV" className="form-input col-12 form-label" type="text" name="cvv" placeholder="Ex.: 000." />
                        </div>

                        <div className=" col-6 col-md-2">
                            {/* <Input label="Bandeira" Flags={flags} change={e => setOrder({ ...order, card: { ...order.card, flag: { ...order.card.flag, id: e.target.value } } })} /> */}
                            <Input label="Bandeira" disabled value={inputBrand} />
                        </div>


                        <div className=" col-6 col-md-2">
                            <div className="row">
                                <Input change={e => setInputMonth(e.target.value)} label="Mês" classCustom="col-6" type="text" placeholder="MM" />
                                <Input change={e => setInputYear(e.target.value)} label="Ano" classCustom="col-6" type="text" placeholder="AA" />
                            </div>
                        </div>


                        <div className=" col-6 col-md-3">
                            <SelectCard label="Forma de Pagamento:" paymentMethod={paymentMethod} change={e => setOrder({ ...order, payment: { id: e.target.value }})} />
                        </div>

                    </div>
                </div>

                <div className="row justify-content-around py-4">
                    <Button label="Voltar" onclick={backToCart} class="btn-retorno" />
                    <Button onclick={handleSubmit(authDateCard)} label="Finalizar" class="btn-confirmacao" type="submit" />
                </div>

            </FormDefault>
        </>
    )
}
export default FormShippigAddress