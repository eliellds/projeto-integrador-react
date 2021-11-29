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
import { Redirect } from "react-router-dom";
import Loading from "../../../../assets/images/success/loading.gif"
import InputCard from "../../../micro/Forms/Input/InputCard";

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

    const [success, setSuccess] = useState(false)

    function criptCard(num) {

        var text = num
        var cipher = crypto.createCipher(alg, pwd)
        var crypted = cipher.update(text, 'utf8', 'hex')
        return crypted.toString()


    }




    const user = JSON.parse(localStorage.getItem('user'))

    const [order, setOrder] = useState(initial);
    const [flags, setFlag] = useState([]);
    const [inputBrand, setInputBrand] = useState("");
    const [inputMonth, setInputMonth] = useState("");
    const [inputYear, setInputYear] = useState("");
    // desfragmentando as funcoes e objetos da biblioteca react-hook-form
    const { register, handleSubmit, formState: { errors }, reset, clearErrors, setError, setValue } = useForm({
        mode: 'onChange',
        reValidateMode: 'onChange',
        defaultValues: {},
        resolver: undefined,
        context: undefined,
        criteriaMode: "firstError",
        shouldFocusError: true,
        shouldUnregister: false,
        shouldUseNativeValidation: false,
        delayError: undefined
    });


    const getAddress = () => {
        api.get(`/userAddress/myAddress/${user.value.id}`).then(
            res => {
                getTelephone(res.data[0].address)
                // CepRun(res.data[0].address.cep)
            })
            .catch((err) => {
                console.error("Erro ao consumir api de Address" + err)
            })
    }

    useEffect(() => {
        window.scrollTo(0, 0);
        getAddress();
        getUfs();
    }, []);

    const getTelephone = (addressRes) => {
        api.get(`/user/${user.value.id}`).then(
            res => {
                var cepTemp = addressRes.cep.substring(0, 5) + "-" + addressRes.cep.substring(5);
                setOrder({ ...order, myUser: { email: res.data.email, id: res.data.id }, telephone: { ...res.data.telephone }, address: { ...addressRes, cep: cepTemp } })
                if (res.data.telephone.number.charAt(2) == 9) {
                    var number = res.data.telephone.number.toString()

                    const parte1 = number.charAt(0) + number.charAt(1)
                    const parte2 = number.slice(2,7)
                    const parte3 = number.slice(7,11)

                    const numeroAjustado = "(" + parte1 + ") " + parte2 + "-" + parte3

                    setValue('telefone', numeroAjustado, { shouldValidate: true })
                } else {
                    var number = res.data.telephone.number.toString()
                    
                    const parte1 = number.charAt(0) + number.charAt(1)
                    const parte2 = number.slice(2,6)
                    const parte3 = number.slice(6,10)

                    const numeroAjustado = "(" + parte1 + ") " + parte2 + "-" + parte3

                    setValue('telefone', numeroAjustado, { shouldValidate: true })
                }
                // setValue('telefone', res.data.telephone.number)
                setValue('cep', cepTemp)
                setValue("E-mail", res.data.email)
                setValue('numero', addressRes.number)


            })
            .catch((err) => {
                console.error("Erro ao consumir api de telefone" + err)
            })

    }

    const getUfs = () => {
        return ufs
    }

    function postOrder() {
        if (cpfCheck == false) {
            return alert("Preencha os dados corretamente")
        }

 
        var tempOrder = { ...order }

        tempOrder = ({ ...tempOrder, 
            telephone: { ...tempOrder.telephone, number: tempOrder.telephone.number.toString().replace(/[^0-9]/g, "")}, 
            card: { ...tempOrder.card, cardNumber: criptCard(tempOrder.card.cardNumber), dueDate: inputYear + "-" + inputMonth + "-01" } })

        let orderJson = JSON.stringify(tempOrder)

        localStorage.setItem('order', orderJson)

        setDisable(true)
        changeRedirect()

    }

    function changeRedirect() {
        setTimeout(function () {
            setSuccess(true)

        }, 5000)
    }

    const [mask, setMask] = useState([/[0-9]/, /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, /\d/, /\d/])

    function authCard(e) {
        clearErrors(["CardNum"])
        var card = e



        if (MoipValidator.isValidNumber(card) == true) {


            switch (MoipValidator.cardType(card).brand) {
                case "VISA":
                    setOrder({ ...order, card: { ...order.card, flag: { id: 2 }, cardNumber: card } })
                    setInputBrand("VISA")
                    return true 
                    break;
                case "MASTERCARD":
                    setOrder({ ...order, card: { ...order.card, flag: { id: 1 }, cardNumber: card } })
                    setInputBrand("MASTERCARD");
                    return true 
                    break;
                case "AMEX":
                    setOrder({ ...order, card: { ...order.card, flag: { id: 3 }, cardNumber: card } })
                    setMask([/[0-9]/, /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, /\d/])
                    // setValue("CardNum", cardNumber)
                    clearErrors(["CardNum"])
                    setInputBrand("AMERICAN EXPRESS");
                    return true
                    break;
                case "ELO":
                    setOrder({ ...order, card: { ...order.card, flag: { id: 4 }, cardNumber: card } })
                    setInputBrand("ELO");
                    return true 
                    break;
                case "HIPERCARD":
                    setOrder({ ...order, card: { ...order.card, flag: { id: 5 }, cardNumber: card } })
                    setInputBrand("HIPERCARD");
                    return true 
                    break;
                case "DINERS":
                    setOrder({ ...order, card: { ...order.card, flag: { id: 6 }, cardNumber: card } })
                    setInputBrand("DINERS CLUB");
                    return true 
                    break;
                default:
                    return setInputBrand("Cartão não aceito!")
            }
        } 
        return false
    }

    const [cardNumber, setCardNumber] = useState("");
    const [cvv, setCvv] = useState("");

    function authDateCard(data) {
        var dataCurrente = new Date();
        var dateCurrent = (dataCurrente.getFullYear() - 10) + "-" + dataCurrente.getMonth() + "-" + dataCurrente.getDate()

        if (dateCurrent > order.card.birthDate) {

            if(MoipValidator.isValidNumber(data.CardNum) == true) {
                if (MoipValidator.isSecurityCodeValid(data.CardNum, data.cvv) == true) {
                    if (MoipValidator.isExpiryDateValid(inputMonth, inputYear) == true) {
                        postOrder()
                    } else {
                        window.alert("Preencha a validade do cartão corretamente")
                    }
                } else {
                   window.alert("Preencha o CVV corretamente")
                }
            } else {
                window.alert("Preencha o número do cartão corretamente")
            }

        } else {
            window.alert("Data de nascimento do titular do cartão invalida!")

        }
    }

    function callRedirect() {
        if (success) {
            return <Redirect to={{ pathname: "/order", state: { ...order } }} />
        }
        return
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

    function backToCart() {
        history.goBack()
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

        clearErrors(["cep"])

        const valor = e
        setValue('cep', valor)
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
        var cpf = e;          
        cpf = cpf.toString().replace(/[^0-9]/g, ""); // transforma os valores digitados para apenas numeros
        setOrder({...order, card:{...order.card, cpf: cpf }})
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
        return true;
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
        setOrder({ ...order, telephone: { ...order.telephone, id: null, number: e.target.value } })
    }

    function LimparEmail(e) {
        clearErrors(["E-mail"])
        setOrder({ ...order, myUser: { ...order.myUser, email: e.target.value } })
    }

    function LimparNumero(e) {
        clearErrors(["Número"])
        setOrder({ ...order, address: { ...order.address, id: null, number: e.target.value } })
    }

    const [cpfCheck, setCheck] = useState(true)
    const [cpfValue, setCpf] = useState("")

    // desabilita botão finalizar apos o click
    const [disable, setDisable] = React.useState(false);

    function renderLoading() {
        return <img className="img-loading-btn" src={Loading} alt="Gerando pedido" />
    }

    function LimpaCartao(e) {
        clearErrors(["CardNum"])
        var cartao = e.target.value.toString()

        setValue("CardNum", cartao)
        var validacoes = [
        {  flag: 'Amex', regex: /^3[47][0-9]{13, 14}$/}
        ,{ flag: 'Aura', regex: /^((?!504175))^((?!5067))(^50[0-9])/}
        ,{ flag: 'BaneseCard', regex: /'^636117'/}
        ,{ flag: 'Cabal', regex: /'(60420[1-9]|6042[1-9][0-9]|6043[0-9]{2}|604400)'/}
        ,{ flag: 'Diners', regex: /'(36[0-8][0-9]{3}|369[0-8][0-9]{2}|3699[0-8][0-9]|36999[0-9])/}
        ,{ flag: 'Discover', regex: /^6(?:011|5[0-9]{2})[0-9]{12}/}
        ,{ flag: 'Elo', regex: /^4011(78|79)|^43(1274|8935)|^45(1416|7393|763(1|2))|^50(4175|6699|67[0-6][0-9]|677[0-8]|9[0-8][0-9]{2}|99[0-8][0-9]|999[0-9])|^627780|^63(6297|6368|6369)|^65(0(0(3([1-3]|[5-9])|4([0-9])|5[0-1])|4(0[5-9]|[1-3][0-9]|8[5-9]|9[0-9])|5([0-2][0-9]|3[0-8]|4[1-9]|[5-8][0-9]|9[0-8])|7(0[0-9]|1[0-8]|2[0-7])|9(0[1-9]|[1-6][0-9]|7[0-8]))|16(5[2-9]|[6-7][0-9])|50(0[0-9]|1[0-9]|2[1-9]|[3-4][0-9]|5[0-8]))/}
        ,{ flag: 'FortBrasil', regex: /'^628167'/}
        ,{ flag: 'GrandCard', regex: /'^605032'/}
        ,{ flag: 'Hipercard', regex: /^ 606282 |^ 3841(?: [0 | 4 | 6]{ 1})0/}
        ,{ flag: 'JCB', regex: /^(?:2131|1800|35\d{3})\d{11}/}
        ,{ flag: 'Mastercard', regex: /^ ((5(([1 - 2] | [4 - 5])[0 - 9]{ 8} | 0((1 | 6)([0 - 9]{ 7})) | 3(0(4((0 | [2 - 9])[0 - 9]{ 5}) | ([0 - 3] | [5 - 9])[0 - 9]{ 6}) | [1 - 9][0 - 9]{ 7}))) | ((508116) \\d{ 4, 10 })| ((502121) \\d{ 4, 10 })| ((589916) \\d{ 4, 10 })| (2[0 - 9]{ 15 })| (67[0 - 9]{ 14 })| (506387) \\d{ 4, 10 })/}
        ,{ flag: 'PersonalCard', regex: /'^636085'/}
        ,{ flag: 'Sorocred', regex: /'^627892|^636414'/}
        ,{ flag: 'Valecard', regex: /'^606444|^606458|^606482'/}
        ,{ flag: 'Visa', regex: /^ 4[0 - 9]{ 15 } $/}
        ]

        validacoes.map(item => {
            if (item.regex.test(cartao)) {
                
                setInputBrand(item.flag)

            }
        })
    }

    function LimparCpf(e) {
        clearErrors(["cpf"])
    }

    return (
        <>
            <FormDefault id="address" title="Dados de entrega" action="/order">

                <div class="row  justify-content-center mb-3">

                    <div class="row ">
                        <div class=" col-6  col-sm-6 col-md-3">
                            <InputHook  // hook eh a props para input padrao com a verificacao
                                name="telefone" // name sera utilizado no componente para fazer as comparacoes
                                register={register} // register recebe o estado atual do que esta em register para utilizar na funcao do componente
                                required={<span className="text-danger">Digite um telefone válido</span>} // mensagem de erro que sera exibida caso o campo nao seja valido
                                maxlength={15} // tamanho maximo do campo
                                pattern={/^\(?[1-9]{2}\)? ?(?:[2-8]|9[1-9])[0-9]{3}\-?[0-9]{4}$/}
                                errors={errors}
                                clear={clearErrors}
                                change={LimparTelefone}
                                mask={order.telephone.number.charAt(2) == 9 ? "(99) 99999-9999" : "(99) 9999-9999"}
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
                                disabled={true}
                                label="E-mail"
                                type="mail"
                                className="form-input col-12 form-label"
                                placeholder="E-mail para contato" />

                        </div>


                        <div class=" col-6 col-sm-6 col-md-3">
                            <InputCep
                                name="cep" pattern={/^\d{5}-\d{3}$/}
                                mask={[/[0-9]/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/]}
                                required={<span className="text-danger">Campo inválido!</span>}
                                blur={buscarCep}
                                label="CEP" type="text" id="cep" className="form-input col-12"
                                placeholder="00000-000" validation={buscarCep}
                                change={e => setOrder({ ...order, address: { ...order.address, id: null, cep: e.target.value } })} register={register} errors={errors}
                                value={order.address.cep} />
                            {/* <InputCep className="form-input col-12 form-label" length="9" blur={buscarCep} value={order.address.cep} label="CEP" type="text" id="cep" className="form-input col-12" placeholder="Digite seu CEP..." change={e => setOrder({ ...order, address: { ...order.address, cep: e.target.value } })} /> */}
                        </div>

                        <div class=" col-6 col-sm-6 col-md-2">
                            <Select label="Estado" disabled={false} options={ufs} selected={order.address.state} change={e => setOrder({ ...order, address: { ...order.address, id: null, state: e.target.value } })} default="Estado:" />
                        </div>

                        <div class=" col-6 col-sm-6 col-md-4">
                            <Input value={order.address.city} disabled={false} change={e => setOrder({ ...order, address: { ...order.address, id: null, city: e.target.value } })} label="Cidade" className="form-input col-12 form-label" type="text" name="city" placeholder="Digite a cidade..." />
                        </div>

                        <div class=" col-9 col-md-6">
                            <Input value={order.address.street} disabled={false} change={e => setOrder({ ...order, address: { ...order.address, id: null, street: e.target.value } })} label="Logradouro" className="form-input col-12 form-label" type="text" name="street" placeholder="Digite o logradouro..." />
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
                                value={order.address.number}
                                label="Número"
                                type="text"
                                className="form-input col-12"
                                placeholder="Digite o número..." />
                        </div>

                        <div class=" col-6 col-md-4">
                            <Input value={order.address.district} disabled={false} change={e => setOrder({ ...order, address: { ...order.address, id: null, district: e.target.value } })} label="Bairro" className="form-input col-12 form-label" type="text" name="district" placeholder="Digite o Bairro..." />
                        </div>

                        <div class=" col-6  col-md-4">
                            <Input value={order.address.complement} change={e => setOrder({ ...order, address: { ...order.address, id: null, complement: e.target.value } })} label="Complemento" className="form-input col-12 form-label" type="text" name="complement" placeholder="Digite o complemento..." />
                        </div>

                        <div class=" col-6 col-md-4">
                            <Input value={order.address.reference} change={e => setOrder({ ...order, address: { ...order.address, id: null, reference: e.target.value } })} label="Referencia" className="form-input col-12 form-label" type="text" name="reference" placeholder="Digite um ponto de referência" />

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
                                required={cpfValue == "" ? <><span className="text-danger">Digite um CPF válido!</span><br /></> : ""} // mensagem de erro que sera exibida caso o campo nao seja valido
                                message={cpfValue == "" ? <><span className="text-danger">Digite um CPF válido!</span><br /></> : ""} // mensagem de erro que sera exibida caso o campo nao seja valido

                                maxlength={14} // tamanho maximo do campo
                                minlength={11} // tamanho minimo do campo
                                pattern={/([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})/u}
                                errors={errors}
                                change={LimparCpf}
                                validation={checarCPF}
                                mask="999.999.999-99" // mascara que sera aplicada
                                value={cpfValue}
                                label="CPF Titular"
                                type="text"
                                className="form-input col-12"
                                placeholder="000.000.000-00" />
                            {/* {cpfCheck ? "" : <span className="text-danger">Digite um CPF a válido! </span>} */}

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
                                className="form-input col-12"
                            />
                        </div>

                        <div className=" col-12 col-md-4">
                            <InputCard
                                name="CardNum" // name sera utilizado no componente para fazer as comparacoes
                                register={register} // register recebe o estado atual do que esta em register para utilizar na funcao do componente
                                required={<span className="text-danger">Insira um número de cartão válido!</span>}
                                errors={errors}
                                change={LimpaCartao}
                                validation={authCard}
                                mask={mask}
                                // value={cardNumber}
                                label="Número do cartão"
                                type="text"
                                className="form-input col-12"
                                placeholder="0000 0000 0000 0000" />
                            {/* {MoipValidator.isValidNumber(cardNumber) ? "" : <span className="text-danger">Insira um número de cartão válido!</span>} */}
                            {/* <Input change={authCard} label="Numero do Cartão" className="form-input col-12 form-label" type="text" name="cardNumber" placeholder="Ex.: 0000 1111 2222 3333." /> */}
                        </div>

                        <div className=" col-6 col-md-1">
                            <InputHook hook
                                name="cvv" // name sera utilizado no componente para fazer as comparacoes
                                register={register} // register recebe o estado atual do que esta em register para utilizar na funcao do componente
                                required // mensagem de erro que sera exibida caso o campo nao seja valido
                                errors={errors}
                                change={e => { setCvv(e.target.value) }}
                                maxlength={4}
                                label="CVV"
                                type="text"
                                value={cvv}
                                className="form-input col-12"
                                placeholder="CVV" />
                       
                        </div>

                        <div className=" col-6 col-md-2">
                            {/* <Input label="Bandeira" Flags={flags} change={e => setOrder({ ...order, card: { ...order.card, flag: { ...order.card.flag, id: e.target.value } } })} /> */}
                            <Input label="Bandeira" disabled value={inputBrand} />
                        </div>


                        <div className=" col-6 col-md-2">
                            <div className="row">
                                {/* <InputHook
                                    name="MM" // name sera utilizado no componente para fazer as comparacoes
                                    register={register} // register recebe o estado atual do que esta em register para utilizar na funcao do componente
                                    required // mensagem de erro que sera exibida caso o campo nao seja valido
                                    errors={errors}
                                    change={e => { setInputMonth(e.target.value) }}
                                    maxlength={2}
                                    mask="99"
                                    label="Mês"
                                    type="text"
                                    classCustom="col-6"
                                    placeholder="12" /> */}

                                {/* <div className="col-6"> */}

                                {/* <InputHook
                                    name="ano" // name sera utilizado no componente para fazer as comparacoes
                                    register={register} // register recebe o estado atual do que esta em register para utilizar na funcao do componente
                                    required // mensagem de erro que sera exibida caso o campo nao seja valido
                                    errors={errors}
                                    change={e => { setInputYear(e.target.value) }}
                                    maxlength={2}
                                    mask="99"
                                    label="Ano"
                                    type="text"
                                    classCustom="col-6"
                                    placeholder="12" /> */}

                                {/* {MoipValidator.isExpiryDateValid(cardNumber, cvv) ? "" : <span className="text-danger">Insira uma data válida!</span>} */}

                                <Input change={e => setInputMonth(e.target.value)} label="Mês" classCustom="col-6" type="text" placeholder="MM" maxlength={2}/>
                                <Input change={e => setInputYear(e.target.value)} label="Ano" classCustom="col-6" type="text" placeholder="AA" maxlength={2}/>
                            </div>
                        </div>


                        <div className=" col-6 col-md-3">
                            <SelectCard label="Forma de Pagamento:" paymentMethod={paymentMethod} change={e => setOrder({ ...order, payment: { id: e.target.value } })} />
                        </div>

                    </div>
                </div>

                <div className="row justify-content-around py-4">
                    <Button label="Voltar" onclick={backToCart} class="btn-retorno" />
                    <Button onclick={handleSubmit(authDateCard)} label={disable ? renderLoading() : "Finalizar"} class="btn-confirmacao" type="submit" />
                </div>

            </FormDefault>

            {callRedirect()}

        </>
    )
}
export default FormShippigAddress