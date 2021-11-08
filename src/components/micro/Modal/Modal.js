import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap'
import Button from "../Button/Button"
import Modal from 'react-bootstrap/Modal'

function ModalComp() {
    const [show, setShow] = useState(false);

    function handleClose() {
        setShow(false);
    }

    function handleShow() {
        setShow(true);
    }

    return (
        <>
            <div className="row justify-content-center pt-3">
                <Button label="Voltar" navigation route="voltar" class="btn-retorno mx-5" />
                <Button label="Cadastrar" class="btn-confirmacao mx-5" function={handleShow} />
            </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Mensagem Enviada!</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <p>Seu pedido de recuperção de senha foi recebido.</p>
                    <p>Confira seu e-mail e cheque sua caixa de spam. Qualquer dúvida, entre em contato.</p>

                    <p>Obrigado!</p>
                </Modal.Body>

                <Modal.Footer>
                    <Button label="Fechar" class="btn-voltar" variant="secondary" function={handleClose} />
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalComp