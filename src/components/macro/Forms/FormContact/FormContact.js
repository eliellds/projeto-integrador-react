import React from 'react';
import {useState } from 'react';
import api from '../../../../services/api';
import Input from '../../../micro/Forms/Input/Input';
import SelectOptions from '../../../micro/Forms/Select/SelectOption';
import ModalComp from '../../../micro/Modal/Modal';
import FormDefault from '../FormDefault/FormDefault';
import Button from "../../../micro/Button/Button"
import {useHistory } from 'react-router';

function FormContact(props) {

    const history = useHistory()
    const [show, setShow] = useState(false);
    const [name, setName] = useState("");
    const [content, setContent] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [subject, setSubject] = useState("");

    function handleShow() {
        return show
    }

    function sendContact(contact) {
        api.post("/contacts", contact)
            .then((response) => {
                console.log(response)
                setShow(true)
                alert("Sua mensagem foi enviada com sucesso! Responderemos o mais breve possível. O prazo máximo é de 24h para o retorno de nossa equipe. Confira seu e-mail e cheque sua caixa de spam. Obrigado!")
                window.location.href = "/home";
            })
            .catch((err) => {
                console.error("Erro ao realizar Post de contato" + err)
                alert("Você deve preencher todos os campos do formulário.")
            });
    }

    function postContact() {
        const contact = ({
            subject: {
                id: subject
            },
            name: name,
            phoneNumber: phoneNumber,
            email: email,
            content: content
        })

        sendContact(contact)
    }


    return <>
        <FormDefault title="Contato" className="custom-form-box mx-3 mx-sm-1 mx-lg-4 px-5 px-sm-1 px-lg-4" >
            <div className="row forms-block justify-content-center">
                <div className="row custom-form justify-content-center">
                    <div className="col-12 col-md-6">
                        <Input change={e => setName(e.target.value)} label="Nome" type="text" id="name" className="form-input col-12" placeholder="Digite seu nome" />
                    </div>
                    <div className="col-12 col-md-5">
                        <SelectOptions required label="Assunto:"  options={props.options} change={e => setSubject(e.target.value)} />
                    </div>
                </div>
                <div className="row custom-form justify-content-center">
                    <div className="col-12 col-sm-6 col-md-6">
                        <Input label="E-mail" type="email" id="email" className="form-input col-12" placeholder="Maria@Email.com" change={e => setEmail(e.target.value)} />
                    </div>
                    <div className="col-12 col-sm-6 col-md-5">
                        <Input label="Telefone" type="text" id="telephone" className="form-input col-12" placeholder="(00) 00000-0000" change={e => setPhoneNumber(e.target.value)} />
                    </div>

                </div>
                <div className="row justify-content-center">
                    <div className="col-12 col-md-11">
                        <label for="textarea" className="form-label col-12">Deixe sua mensagem</label>
                        <textarea required className="textarea col-12" id="textarea" rows="5"
                            placeholder=" Escreva sua mensagem..." onKeyDown={e => setContent(e.target.value)}></textarea>
                    </div>
                </div>
            </div>

            <div className="row justify-content-center pt-3">
                <Button label="Voltar" onclick={history.goBack} class="btn-retorno mx-5" />
                <Button label="Enviar" class="btn-confirmacao mx-5" onclick={postContact}  />
            </div>

            <div className="row justify-content-around">

                <ModalComp show={show}
                    msg={<p className="modal-text">Sua mensagem foi enviada.</p>}
                    info={<p className="modal-text">Responderemos o mais breve possível. O prazo máximo é de 24h para o retorno de nossa equipe.</p>}
                    info1={<p className="modal-text">Confira seu e-mail e cheque sua caixa de spam.</p>}
                    info2={<p className="modal-text">Obrigado!</p>}>
                </ModalComp>

            </div>

        </FormDefault>
    </>
}
export default FormContact