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
                            <Accordion.Header className="cabecalho-pedido"><strong>Número do Pedido: 1010</strong></Accordion.Header>
                            <Accordion.Body>
                                <ul className="row cabecalho-meu-pedido-item text-center">
                                    <li className="col-7 "><strong>Detalhes do Pedido</strong></li>
                                    <li className="col-2 data"><strong>Data</strong></li>
                                    <li className="col-2"><strong>Status</strong></li>
                                </ul>
                                <ul className="row">
                                    <li className="col-7 meu-pedido-item">Relógio de bolso (1889)</li>
                                    <li className="col-2 meu-pedido-item data">05/06/2021</li>
                                    <li className="col-2 meu-pedido-item">Entregue</li>
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header className="cabecalho-pedido"><strong>Número do Pedido: {props.nrPedido} </strong></Accordion.Header>
                            <Accordion.Body>
                                <ul className="row cabecalho-meu-pedido-item text-center">
                                    <li className="col-7 meu-meu-pedido-item"><strong>Detalhes do Pedido</strong></li>
                                    <li className="col-2 meu-meu-pedido-item data"><strong>Data</strong></li>
                                    <li className="col-2 meu-meu-pedido-item"><strong>Status</strong></li>
                                </ul>
                                <ul className="row">
                                    <li className="col-7 meu-pedido-item">{props.itemPedido}</li>
                                    <li className="col-2 meu-pedido-item data">{props.dataPedido }</li>
                                    <li className="col-2 meu-pedido-item">{props.statusPedido }</li>
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                        <Accordion.Header className="cabecalho-pedido"><strong>Número do Pedido: {props.nrPedido} </strong></Accordion.Header>
                            <Accordion.Body>
                                <ul className="row cabecalho-meu-pedido-item text-center">
                                    <li className="col-7 meu-meu-pedido-item"><strong>Detalhes do Pedido</strong></li>
                                    <li className="col-2 meu-meu-pedido-item data"><strong>Data</strong></li>
                                    <li className="col-2 meu-meu-pedido-item"><strong>Status</strong></li>
                                </ul>
                                <ul className="row">
                                    <li className="col-7 meu-pedido-item">{props.itemPedido}</li>
                                    <li className="col-2 meu-pedido-item data">{props.dataPedido }</li>
                                    <li className="col-2 meu-pedido-item">{props.statusPedido }</li>
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                        <Accordion.Header className="cabecalho-pedido"><strong>Número do Pedido: {props.nrPedido} </strong></Accordion.Header>
                            <Accordion.Body>
                                <ul className="row cabecalho-meu-pedido-item text-center">
                                    <li className="col-7 meu-meu-pedido-item"><strong>Detalhes do Pedido</strong></li>
                                    <li className="col-2 meu-meu-pedido-item data"><strong>Data</strong></li>
                                    <li className="col-2 meu-meu-pedido-item"><strong>Status</strong></li>
                                </ul>
                                <ul className="row">
                                    <li className="col-7 meu-pedido-item">{props.itemPedido}</li>
                                    <li className="col-2 meu-pedido-item data">{props.dataPedido }</li>
                                    <li className="col-2 meu-pedido-item">{props.statusPedido }</li>
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