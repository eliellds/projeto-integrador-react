import React, { useEffect, useState } from "react"
import Input from "../../../micro/Forms/Input/Input"
import FormDefault from "../FormDefault/FormDefault"
import Button from "../../../micro/Button/Button";
import H2 from "../../../micro/Title/H2";
import SelectCard from "../../../micro/Forms/Select/SelectCard";
import api from "../../../../services/api"
import { useHistory } from "react-router";
import SelectedFlag from "../../../micro/Forms/Select/SelectedFlag";

const initial ={
    
        myUser : {
            id : 1
        },
        payment : {
            id : 1
        },
        address : {
            cep: "",
            city: "",
            state: "",
            district: "",
            street: "",
            number: 0,
            complement: "",
            reference: ""
            
        },
        telephone : {
            number : ""
        },
        card : {
            cardNumber :  "",
            name : "",
            cpf: "",
            birthDate: "",
            dueDate: "",
            flag :
            {
                id: 0
          
            }
        },
        delivery : {
            id : 1
           
        },
    
        qtyTotal : 0,
        deliveryValue : 150,
        totalDiscounts : 0,
        amount :0
    
}

function FormShippigAddress(props) {

    const [order,setOrder] = useState(initial)
    const [flags,setFlag] = useState([])
    console.log(order)
    function postOrder(){
        setOrder({...order, card : {...order.card, dueDate:dueDate+"-01" }})
        let orderJson = JSON.stringify(order)
        
        localStorage.setItem('order',orderJson)

        window.location.href="/order"
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
  
    function getListPayments(){
        api
        .get("/payments")
        .then((response) => setPaymentMethod(response.data))
        .catch((err) => {
            console.error("Erro ao consumir api de payments" + err)
        })

    }
    function getListFlags(){
        api
        .get("/flags")
        .then((response) => setFlag(response.data))
        .catch((err) => {
            console.error("Erro ao consumir api de flag" + err)
        })

    }
    function getOrderLocal(){
        setOrder()
    }

    useEffect(() => {
       
        getListPayments()
        getListFlags()

    }, [])

    // console.log(paymentMethod)


    return (
        <>
            <FormDefault id="address" title="Dados de entrega" action="/order">

                <div class="row  justify-content-center">

                    <div class="row ">
                        <div class=" col-6  col-sm-6 col-md-3">
                            <Input change={e => setOrder({...order, telephone:{...order.telephone, number:e.target.value}})} label="Telefone" className="form-input col-12 form-label" type="tel" name="telephone" placeholder="(99)9999-9999" />

                        </div>

                        <div class=" col-6 col-sm-6 col-md-3">
                            <Input change={e => setOrder({...order, address:{...order.address, cep:e.target.value}})} label="CEP" className="form-input col-12 form-label" type="text" name="cep" placeholder="12345-000" />
                        </div>

                        <div class=" col-6 col-sm-6 col-md-3">
                            <Input change={e => setOrder({...order, address:{...order.address, state:e.target.value}})} label="Estado" className="form-input col-12 form-label" type="text" name="state" placeholder="Ex.:São Paulo" />
                        </div>

                        <div class=" col-6 col-sm-6 col-md-3">
                            <Input change={e => setOrder({...order, address:{...order.address, city:e.target.value}})} label="Cidade" className="form-input col-12 form-label" type="text" name="city" placeholder="Ex.:São Paulo" />
                        </div>

                        <div class=" col-9 col-md-8">
                            <Input change={e => setOrder({...order, address:{...order.address, street:e.target.value}})} label="Logradouro" className="form-input col-12 form-label" type="text" name="street" placeholder="Ex.:Rua Dos Velhos Tempos" />

                        </div>

                        <div class=" col-3  col-md-4">
                            <Input change={e => setOrder({...order, address:{...order.address, number:e.target.value}})} label="Numero" className="form-input col-12 form-label" type="text" name="number" placeholder="Ex.:232" />
                        </div>

                        <div class=" col-6 col-md-4">
                            <Input change={e => setOrder({...order, address:{...order.address, district:e.target.value}})} label="Bairro" className="form-input col-12 form-label" type="text" name="district" placeholder="Ex.Butantã" />

                        </div>

                        <div class=" col-6  col-md-4">
                            <Input change={e => setOrder({...order, address:{...order.address, complement:e.target.value}})} label="Complemento" className="form-input col-12 form-label" type="text" name="complement" placeholder="Ex.: ap: 15" />
                        </div>

                        <div class=" col-6 col-md-4">
                            <Input change={e => setOrder({...order, address:{...order.address, reference:e.target.value}})} label="Referencia" className="form-input col-12 form-label" type="text" name="reference" placeholder="Ex.: Proximo ao posto..." />

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
                            <Input change={e => setOrder({...order, card:{...order.card,name:e.target.value}})} label="Nome do Titular" className="form-input col-12 form-label" type="text" name="name" placeholder="Nome como está no cartão" />
                        </div>

                        <div className=" col-6 col-md-4">
                            <Input change={e => setOrder({...order, card:{...order.card,cpf:e.target.value}})} label="CPF-Titular" className="form-input col-12 form-label" type="text" name="CPF" placeholder="999-999-999-99" />
                        </div>

                        <div className=" col-6 col-md-3">
                            <Input change={e => setOrder({...order, card:{...order.card, birthDate:e.target.value}})} label="Data Nascimento Titular" className="form-input col-12 form-label" type="date" name="birthDate" placeholder="Ex.: Dia/Mês/Ano." />
                        </div>

                        <div className=" col-12 col-md-4">
                            <Input change={e => setOrder({...order, card:{...order.card, cardNumber:e.target.value}})} label="Numero do Cartão" className="form-input col-12 form-label" type="text" name="cardNumber" placeholder="Ex.: 0000 1111 2222 3333." />
                        </div>

                        <div className=" col-6 col-md-1">
                            <Input /*change={e => validarCvv(e)}*/ label="CVV" className="form-input col-12 form-label" type="text" name="cvv" placeholder="Ex.: 000." />
                        </div>
                        <div className=" col-6 col-md-2">
                            <SelectedFlag required label="Bandeira" Flags={flags}  change={e => setOrder({...order, card:{...order.card,flag:{...order.card.flag,id:e.target.value}}})} />
                        </div>


                        <div className=" col-6 col-md-2">
               
                            <Input change={e => setDueDate(e.target.value)} label="Vencimento" className="form-input col-12 form-label" type="text" name="dia" placeholder="Mes-Ano" />
                        
                        </div>       

                        <div className=" col-6 col-md-3">
                            <SelectCard required label="Forma de Pagamento:" paymentMethod={paymentMethod} change={e => setOrder({...order, payment:{id:e.target.value}})} />
                        </div>

                        
                       

                    </div>
                </div>

                <div className="row justify-content-around py-4">
                    <Button label="Voltar" onclick={history.goBack} class="btn-retorno" />
                    <Button onclick={postOrder} label="Finalizar" class="btn-confirmacao" type="submit" />
                </div>

            </FormDefault>
        </>
    )
}
export default FormShippigAddress