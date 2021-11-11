import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap'
import Button from "../Button/Button"
import Modal from 'react-bootstrap/Modal'
import { useHistory } from "react-router"
function ModalComp(props) {
    const [show, setShow] = useState(false);
    const history = useHistory()
    function handleClose() {
        setShow(false);
    }

    function handleShow() {
        setShow(true);
    }

    function handleClick(e) {
        e.preventDefault();
    }

    return (
        <>
            <form onClick={handleClick}>

                <div className="row justify-content-center pt-3">
                    <Button label="Voltar" onclick={history.goBack} class="btn-retorno mx-5" />
                    <Button label="Enviar" class="btn-confirmacao mx-5" onclick={handleShow} />
                </div>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>{props.msg}</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        {props.info}
                        {props.info1}
                        {props.info2}
                    </Modal.Body>

                    <Modal.Footer>
                        <Button label="Fechar" class="btn-voltar" variant="secondary" onclick={handleClose} />
                    </Modal.Footer>
                </Modal>

            </form>
        </>
    );
}

export default ModalComp