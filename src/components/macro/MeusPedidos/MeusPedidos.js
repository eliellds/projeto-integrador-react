import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap'
import Accordion from 'react-bootstrap/Accordion'
import "./MeusPedidos.css"
import FormDefault from "../Forms/FormDefault/FormDefault";
import api from "../../../services/api";
import { Next } from "react-bootstrap/esm/PageItem";
import OrderProducts from "../../micro/OrderProducts/OrderProducts";
import "./MeusPedidos.css";

const initial = [{
    orderNumber: 0,
    price: 0,
    date: "0000-00-00",
    productList: []
}]

function MeusPedidos(props) {

    const user = JSON.parse(localStorage.getItem("user"))

    const [pedido, setPedido] = useState([...initial])

    function getOrder() {
        api.get(`/itemsOrder/user/${user.value.id}`).then(res => {
            setPedido(res.data)
        })
    }

    useEffect(() => {

        getOrder();

    }, []);

    function accordions(orderNumber) {

        return pedido.map(
            function (item) {
                console.log(item)

                const data = new Date(item.date)
                const dataFormatada = data.toLocaleDateString('pt-BR', { timeZone: 'UTC' });
                const amountFormated = item.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

                if (orderNumber == item.orderNumber) {
                    return (
                        <>
                            <Accordion.Body >
                                <ul className="row cabecalho-meu-pedido-item text-center">
                                    <li className="col-7 "><strong>Detalhes do Pedido</strong></li>
                                    <li className="col-2 data justify-self-start"><strong>Data</strong></li>
                                    <li className="col-2 text-end me-3"><strong>Status</strong></li>
                                </ul>
                                <ul className="row ps-1">
                                    <div className="container col-7 align-self-start d-flex flex-column m-0">
                                        <OrderProducts options={item.productList} />
                                    </div>

                                    <div className="container m-0 col-5 d-flex">
                                        <div className="row row-correction">
                                            <div className="container d-flex m-0 p-0">
                                                <li className="col-5 meu-pedido-item data me-3">{dataFormatada}</li>
                                                <li className="col-7 meu-pedido-item">{item.status}</li>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="container justify-content-end containerValues align-items-end d-flex m-0 mt-3 p-0">
                                        
                                        <div className="row  mx-2 mb-1 ">
                                            <div className="col-6">Total: {amountFormated}</div>
                                        </div>
                                        <div className="row  mx-2 mb-1 ">
                                        
                                        </div>

                                    </div>
                                </ul>
                            </Accordion.Body>
                        </>
                    )
                }
            }
        )
    }

    function modelAccordions() {

        let show = "1"

        return pedido.map(
            function (item) {
                console.log(item)

                if (show == "1") {
                    show = "0"
                    return (
                        <>
                            <Accordion className="acordeon" defaultActiveKey="0">
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header className="cabecalho-pedido"><strong>Número do Pedido: {item.orderNumber}</strong></Accordion.Header>

                                    {accordions(item.orderNumber)}

                                </Accordion.Item>
                            </Accordion>
                        </>
                    )
                } else {
                    return (
                        <>
                            <Accordion className="acordeon" defaultActiveKey="1">
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header className="cabecalho-pedido"><strong>Número do Pedido: {item.orderNumber}</strong></Accordion.Header>

                                    {accordions(item.orderNumber)}

                                </Accordion.Item>
                            </Accordion>
                        </>
                    )
                }

            }
        )
    }

    return (


        <>
            <FormDefault title="Meus Pedidos">
                <div className="container px-0 px-sm-3">

                    {modelAccordions()}

                </div>
            </FormDefault>

        </>
    )
}

export default MeusPedidos