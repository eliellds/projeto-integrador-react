import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap'
import Accordion from 'react-bootstrap/Accordion'
import "./MeusPedidos.css"
import FormDefault from "../Forms/FormDefault/FormDefault";

function MeusPedidos(props) {

    return (
        <>
            <FormDefault title="Meus Pedidos">
                <div className="container">
                    <Accordion className="acordeon" defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header className="cabecalho-pedido"><strong>Número do Pedido: </strong><li className="col-3 numero-pedido"><a href=""> 12585</a></li> </Accordion.Header>
                            <Accordion.Body>
                                <ul className="row cabecalho-pedido-item text-center">
                                    <li className="col-5 "><strong>Detalhes do Pedido</strong></li>
                                    <li className="col-3 data"><strong>Data</strong></li>
                                    <li className="col-3"><strong>Status</strong></li>
                                </ul>
                                <ul className="row pedido-item">
                                    <li className="col-6">Relógio de bolso (1889)</li>
                                    <li className="col-3 data">05/06/2021</li>
                                    <li className="col-3">Entregue</li>
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header className="cabecalho-pedido"><strong>Número do Pedido: </strong><li className="col-3 numero-pedido"><a href=""> 96554</a></li></Accordion.Header>
                            <Accordion.Body>
                                <ul className="row cabecalho-pedido-item text-center">
                                    <li className="col-5"><strong>Detalhes do Pedido</strong></li>
                                    <li className="col-3 data"><strong>Data</strong></li>
                                    <li className="col-3"><strong>Status</strong></li>
                                </ul>
                                <ul className="row pedido-item">
                                    <li className="col-6">Penteadeira em Madeira (1955)</li>
                                    <li className="col-3 data">10/08/2021</li>
                                    <li className="col-3">Em separação</li>
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header className="cabecalho-pedido"><strong>Número do Pedido: </strong><li className="col-3 numero-pedido"><a href=""> 11542</a></li></Accordion.Header>
                            <Accordion.Body>
                                <ul className="row cabecalho-pedido-item text-center">
                                    <li className="col-5"><strong>Detalhes do Pedido</strong></li>
                                    <li className="col-3 data"><strong>Data</strong></li>
                                    <li className="col-3"><strong>Status</strong></li>
                                </ul>
                                <ul className="row pedido-item">
                                    <li className="col-6">Relógio de parede em madeira (1912)</li>
                                    <li className="col-3 data">30/07/2021</li>
                                    <li className="col-3">Entregue</li>
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header className="cabecalho-pedido"><strong>Número do Pedido: </strong><li className="col-3 numero-pedido"><a href=""> 96485</a></li></Accordion.Header>
                            <Accordion.Body>
                                <ul className="row cabecalho-pedido-item text-center">
                                    <li className="col-5"><strong>Detalhes do Pedido</strong></li>
                                    <li className="col-3 data"><strong>Data</strong></li>
                                    <li className="col-3"><strong>Status</strong></li>
                                </ul>
                                <ul className="row">

                                    <li className="col-6">Caixa em Madeira de lei (1932)</li>
                                    <li className="col-3 data">02/06/2021</li>
                                    <li className="col-3">Entregue</li>
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
            </FormDefault>

        </>
    )
}

export default MeusPedidos