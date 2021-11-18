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
    productList: []
}]

function MeusPedidos(props) {

    const user = JSON.parse(localStorage.getItem("user"))

    const [pedido, setPedido] = useState([...initial])

    function getOrder() {
        api.get(`/itemsOrder/user/${user.id}`).then(res => {
            setPedido(res.data)
        })
    }

    useEffect(() => {

        getOrder();

    }, []);

    function dataAtualFormatada(data){
        var data = new Date(data),
            dia  = data.getDate().toString(),
            diaF = (dia.length == 1) ? '0'+dia : dia,
            mes  = (data.getMonth()+1).toString(), //+1 pois no getMonth Janeiro começa com zero.
            mesF = (mes.length == 1) ? '0'+mes : mes,
            anoF = data.getFullYear();
        return diaF+"/"+mesF+"/"+anoF;
    }

    function accordions(orderNumber) {

        return pedido.map(
            function (item) {
                console.log(item.date)

                const dateD = dataAtualFormatada(`${item.date}`)

                if (orderNumber == item.orderNumber) {
                    return (
                        <>
                            <Accordion.Body>
                                <ul className="row cabecalho-meu-pedido-item text-center">
                                    <li className="col-7 "><strong>Detalhes do Pedido</strong></li>
                                    <li className="col-2 data"><strong>Data</strong></li>
                                    <li className="col-2 me-3"><strong>Status</strong></li>
                                </ul>
                                <ul className="row">
                                    <OrderProducts options={item.productList} />
                                    <li className="col-2 meu-pedido-item data me-3">{dateD}</li>
                                    <li className="col-2 meu-pedido-item">{item.status}</li>
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
                <div className="container">

                    {modelAccordions()}

                </div>
            </FormDefault>

        </>
    )
}

export default MeusPedidos