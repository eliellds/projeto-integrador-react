import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import FormDefault from '../FormDefault/FormDefault';
import Input from "../../../micro/Forms/Input/Input";
import Button from "../../../micro/Button/Button"
import api from '../../../../services/api';

function FormUser(props) {
    let bool = true

    const [show, setShow] = useState(bool);

    const user = JSON.parse(localStorage.getItem("user"));

    const [name, setName] = useState("")
    const [lastname, setLastname] = useState("")
    const [tel, setTel] = useState("")
    const [cpf, setCpf] = useState("")
    const [email, setEmail] = useState("")

    useEffect(() => {

        getUser();

    }, []);

    const getUser = () => {
        api.get(`/user/${user.value.id}`).then(
            res => {
                setName(res.data.firstName);
                setLastname(res.data.lastName);
                setTel(res.data.telephone.number);
                setCpf(res.data.cpf);
                setEmail(res.data.email);
            });
    }
    
    const handleSubmit = () => {

        const dados = ({
            id: user.value.id,
            firstName: name,
            lastName: lastname,
            telephone: {
                number: tel
            }
        })

        updateApi(dados)
    }

    const updateApi = (data) => {

        api.put("/user", data)
            .then(res => {
                getUser()
                disableForm()
            })
            .catch(err => {
                console.log(err)
            })
    }

    function disableForm() {
        bool = true
        setShow(bool)
        changeButton(bool)
    }

    function ableForm() {
        bool = false
        setShow(bool);
        changeButton(bool)
    }

    const changeButton = (change) => {
        if (change) {
            setB({
                alterar: "",
                salvar: "d-none"
            })
        } else {
            setB({
                alterar: "d-none",
                salvar: ""
            })
        }
    }

    const [stateB, setB] = useState({
        alterar: "",
        salvar: "d-none"
    })

    function handleName(e) {
        var newName = e.target.value
        setName(newName)
    }
    function handleLastname(e) {
        var newLastname = e.target.value
        setLastname(newLastname)
    }
    function handleTel(e) {
        var newTel = e.target.value
        setTel(newTel)
    }

    return (
        <>
            <FormDefault title="Meus Dados">

                <div className="row forms-block">

                    <div className="row custom-form d-flex justify-content-center">
                        <div className=" col-12 col-md-5">
                            <Input change={handleName} value={name} disabled={show} label="Nome" type="text" id="nome" className="form-input col-12" placeholder="Nome" />
                        </div>

                        <div className="col-12 col-md-6">
                            <Input change={handleLastname} value={lastname} disabled={show} label="Sobrenome" type="text" id="sobrenome" className="form-input col-12"
                                placeholder="Sobrenome" />
                        </div>
                    </div>

                    <div className="row custom-form d-flex justify-content-center">
                        <div className="col-12 col-md-3">
                            <Input change value={cpf} disabled={true} label="CPF" type="text" id="cpf" className="form-input col-12"
                                placeholder="CPF" />
                        </div>

                        <div className="col-12 col-md-4">
                            <Input change value={email} disabled={true} label="E-mail" type="email" id="email" className="form-input col-12"
                                placeholder="e-mail" />
                        </div>

                        <div className="col-12 col-md-4">
                            <Input change={handleTel} value={tel} disabled={show} label="Telefone" type="text" id="telefone" className="form-input col-12"
                                placeholder="Telefone" />
                        </div>

                    </div>
                </div>
                <div className="row justify-content-center">
                    <Button onclick={ableForm} label="Alterar" class={`btn-confirmacao ${stateB.alterar}`} />
                    <Button onclick={handleSubmit} label="Salvar" class={`btn-confirmacao ${stateB.salvar}`} />
                </div>


            </FormDefault>

        </>
    )
}

export default FormUser