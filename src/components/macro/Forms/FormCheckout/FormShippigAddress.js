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

    const [order, setOrder] = useState(initial)
    const [flags, setFlag] = useState([])

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
        
        var tempOrder = {...order}
        
        tempOrder =({...tempOrder, card: { ...tempOrder.card, cardNumber: criptCard(tempOrder.card.cardNumber).toString(),dueDate: dueDate + "-01" }})
        let orderJson = JSON.stringify(tempOrder)

        localStorage.setItem('order', orderJson)
        window.location.href = "/order"
    }

    const [displayNoneB, setDisplayNoneB] = useState("d-none")
    const [displayNoneC, setDisplayNoneC] = useState("")
    const [dueDate, setDueDate] = useState("")
    const [buttons, setButtons] = useState(
        <>
            <Button class="col-4 cartao forma-pagamento selected-button" label={<H2 h2="Cartão" />}></Button>
            <Button onclick={changeComponent} class="col-4 forma-pagamento boleto disabled-button" label={<H2 h2="Boleto" />}></Button>
        </>
    )
    let change = false
    const history = useHistory()

    function changeComponent() {
        if (change) {
            setButtons(
                <>
                    <Button class="col-4 cartao forma-pagamento selected-button" label={<H2 h2="Cartão" />}></Button>
                    <Button onclick={changeComponent} class="col-4 forma-pagamento boleto disabled-button" label={<H2 h2="Boleto" />}></Button>
                </>
            )
            change = false
            setDisplayNoneB("d-none")
            setDisplayNoneC("")
            console.log("noneC")
            console.log(change)
        } else {
            setButtons(
                <>
                    <Button onclick={changeComponent} class="col-4 cartao forma-pagamento disabled-button" label={<H2 h2="Cartão" />}></Button>
                    <Button class="col-4 forma-pagamento boleto selected-button" label={<H2 h2="Boleto" />}></Button>
                </>
            )
            change = true
            setDisplayNoneB("")
            setDisplayNoneC("d-none")
            console.log("noneB")
            console.log(change)
        }
    }

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

    return (
        <>
            <FormDefault id="address" title="Dados de entrega" action="/order">

                <div class="row  justify-content-center mb-3">

                    <div class="row ">
                        <div class=" col-6  col-sm-6 col-md-3">
                            <Input value={order.telephone.number} change={e => setOrder({ ...order, telephone: { ...order.telephone, number: e.target.value } })} label="Telefone" className="form-input col-12 form-label" type="tel" name="telephone" placeholder="Telefone com DDD" />
                        </div>

                        <div class=" col-6  col-sm-6 col-md-4">
                            <Input value={order.myUser.email} change={e => setOrder({ ...order, myUser: { ...order.myUser, email: e.target.value } })} label="E-mail:" className="form-input col-12 form-label" type="mail" name="email" placeholder="E-mail para contato" />
                        </div>

                        <div class=" col-6 col-sm-6 col-md-3">
                            <InputCep className="form-input col-12 form-label" length="9" blur={buscarCep} value={order.address.cep} label="CEP" type="text" id="cep" className="form-input col-12" placeholder="Digite seu CEP..." change={e => setOrder({ ...order, address: { ...order.address, cep: e.target.value } })} />
                        </div>

                        <div class=" col-6 col-sm-6 col-md-2">
                            <Select label="Estado" options={ufs} selected={order.address.state} change={e => setOrder({ ...order, address: { ...order.address, state: e.target.value } })} default="Estado:" />
                        </div>

                        <div class=" col-6 col-sm-6 col-md-4">
                            <Input value={order.address.city} change={e => setOrder({ ...order, address: { ...order.address, city: e.target.value } })} label="Cidade" className="form-input col-12 form-label" type="text" name="city" placeholder="Digite a cidade..." />
                        </div>


                        <div class=" col-9 col-md-6">
                            <Input value={order.address.street} change={e => setOrder({ ...order, address: { ...order.address, street: e.target.value } })} label="Logradouro" className="form-input col-12 form-label" type="text" name="street" placeholder="Digite o logradouro..." />
                        </div>

                        <div class=" col-3  col-md-2">
                            <Input value={order.address.number} change={e => setOrder({ ...order, address: { ...order.address, number: e.target.value } })} label="Numero" className="form-input col-12 form-label" type="text" name="number" placeholder="Digite o número..." />
                        </div>

                        <div class=" col-6 col-md-4">
                            <Input value={order.address.district} change={e => setOrder({ ...order, address: { ...order.address, district: e.target.value } })} label="Bairro" className="form-input col-12 form-label" type="text" name="district" placeholder="Digite o Bairro..." />
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


                <div className={`row pagamento justify-content-center ${displayNoneB}`}>
                    <div className="col-8 justify-content-center text-center ">
                        <input type="text" readonly className="form-control-plaintext justifi-content-center text-center" id="staticEmail"
                            value="Número do boleto: 000000 000000 000000 000000 000000" />
                    </div>
                </div>

                <div className={"row justify-content-center"}>
                    <div className={`row custom-form ${displayNoneC}`}>

                        <div className=" col-12 col-md-5">
                            <Input change={e => setOrder({ ...order, card: { ...order.card, name: e.target.value } })} label="Nome do Titular" className="form-input col-12 form-label" type="text" name="name" placeholder="Nome como está no cartão" />
                        </div>

                        <div className=" col-6 col-md-4">
                            <Input change={e => setOrder({ ...order, card: { ...order.card, cpf: e.target.value } })} label="CPF-Titular" className="form-input col-12 form-label" type="text" name="CPF" placeholder="999-999-999-99" />
                        </div>

                        <div className=" col-6 col-md-3">
                            <Input change={e => setOrder({ ...order, card: { ...order.card, birthDate: e.target.value } })} label="Data Nascimento Titular" className="form-input col-12 form-label" type="date" name="birthDate" placeholder="Ex.: Dia/Mês/Ano." />
                        </div>

                        <div className=" col-12 col-md-4">
                            <Input change={e => setOrder({ ...order, card: { ...order.card, cardNumber: e.target.value } })} label="Numero do Cartão" className="form-input col-12 form-label" type="text" name="cardNumber" placeholder="Ex.: 0000 1111 2222 3333." />
                        </div>

                        <div className=" col-6 col-md-1">
                            <Input /*change={e => validarCvv(e)}*/ label="CVV" className="form-input col-12 form-label" type="text" name="cvv" placeholder="Ex.: 000." />
                        </div>
                        <div className=" col-6 col-md-2">
                            <SelectedFlag required label="Bandeira" Flags={flags} change={e => setOrder({ ...order, card: { ...order.card, flag: { ...order.card.flag, id: e.target.value } } })} />
                        </div>


                        <div className=" col-6 col-md-2">

                            <Input change={e => setDueDate(e.target.value)} label="Vencimento" className="form-input col-12 form-label" type="text" name="dia" placeholder="Mes-Ano" />

                        </div>

                        <div className=" col-6 col-md-3">
                            <SelectCard required label="Forma de Pagamento:" paymentMethod={paymentMethod} change={e => setOrder({ ...order, payment: { id: e.target.value } })} />
                        </div>

                    </div>
                </div>

                <div className="row justify-content-around py-4">
                    <Button label="Voltar" onclick={backToCart} class="btn-retorno" />
                    <Button onclick={postOrder} label="Finalizar" class="btn-confirmacao" type="submit" />
                </div>

            </FormDefault>
        </>
    )
}
export default FormShippigAddress