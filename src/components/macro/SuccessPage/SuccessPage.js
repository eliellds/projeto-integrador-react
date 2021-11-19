import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./SuccessPage.css"
import ProductSuccess from "../../micro/productsSucess/productsSucess";
import OrderInfo from '../../micro/productsSucess/orderInfo'
import Button from "../../micro/Button/Button"
import api from "../../../services/api";

const initial = {
    myUser: {
        id: 1
    },
    payment: {
        id: 1,
        description: "",
        installments: "",
    },
    address: {
        id: 0,
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
        id: 0,
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
            id: 0,
            description: ""
        }
    },
    delivery: {
        id: 1,
        descricao: ""
    },
    dateOrder: "",
    deliveryDate: "",
    qtyTotal: 0,
    deliveryValue: 0.0,
    totalDiscounts: 0,
    amount: 0.0,
    bankSlip: ""
}

function SuccessPage(props) {

    const user = JSON.parse(localStorage.getItem("user"));
    const [order, setOrder] = useState(initial);

    const dateInput = order.deliveryDate
    const data = new Date(dateInput);
    const dataFormatada = data.toLocaleDateString('pt-BR', { timeZone: 'UTC' });

    const amountFormated = order.amount.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

    useEffect(() => {
        api
            .get(`/orders/${user.value.id}`)
            .then((response) => setOrder(response.data))
            .catch((err) => {
                console.error("ops! ocorreu um erro" + err);
            });
    }, []);

    console.log(order)

    return (
        <>
            <h1>OBRIGADO!</h1>

            <p class="msg-compra">
                Seu pedido foi <em>concluído com sucesso</em> e os dados da compra foram enviados para seu e-mail.
            </p>

            <div class="container-fluid container-principal">
                <h2 class="numero-pedido col-12">NÚMERO DO PEDIDO:<b>&nbsp;{props.numPedido}12345</b></h2>

                <div class="row linha-geral justify-content-between">

                    <ul class="container col-12 col-lg-6 mx-0 d-flex flex-column">
                        <h4>Itens</h4>
                        <ProductSuccess
                            frete={dataFormatada} />

                    </ul>

                    <div class="container col-12 col-lg-5 mx-0">

                        <OrderInfo titulo="Pagamento"
                            primeiraLinha={order.payment.description}
                            segundaLinha={order.card.flag.description} segundaLinha1={order.payment.installments}
                            terceiraLinha={amountFormated} />

                        <OrderInfo titulo="Entrega"
                            primeiraLinha={order.delivery.descricao}
                            segundaLinha="Prazo estimado para entrega: " segundaLinha1={dataFormatada}
                            terceiraLinha={amountFormated} />

                        <OrderInfo titulo="Endereço de entrega"
                            primeiraLinha={order.address.street + ","} primeiraLinha1={order.address.number} primeiraLinha2={"Comp: " + order.address.complement}
                            segundaLinha={order.address.district + " - "} segundaLinha1={order.address.city + " - "} segundaLinha2={order.address.state}
                            terceiraLinha={"CEP: " +order.address.cep} quartaLinha={"Referência: " + order.address.reference} />
                        
                    </div>

                </div>
                <div class="texto-prazo">Prazo estimado para entrega: <b>{dataFormatada}</b></div>
                <Button navigation route="/dashboard/myorder" class="btn-retorno" label="Pedidos" />

            </div>
        </>
    );
}

export default SuccessPage;