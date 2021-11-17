import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import FormDefault from '../FormDefault/FormDefault';
import Input from "../../../micro/Forms/Input/Input";
import Button from "../../../micro/Button/Button";
import Select from "../../../micro/Forms/Select/Select";
import api from "../../../../services/api";

function Address(props) {
    let bool = true
    const [show, setShow] = useState(bool);

    const [cep, setCep] = useState("");
    const [logradouro, setLogradouro] = useState("");
    const [numero, setNumero] = useState("");
    const [complemento, setComplemento] = useState("");
    const [bairro, setBairro] = useState("");
    const [referencia, setReferencia] = useState("");
    const [cidade, setCidade] = useState("");
    const [estado, setEstado] = useState("");
    const [ufs, setUfs] = useState([
        { id: 1, subjectDescription: "AC" }, { id: 2, subjectDescription: "AL" }, { id: 3, subjectDescription: "AP" },
        { id: 4, subjectDescription: "AM" }, { id: 5, subjectDescription: "BA" }, { id: 6, subjectDescription: "CE" },
        { id: 7, subjectDescription: "DF" }, { id: 8, subjectDescription: "ES" }, { id: 9, subjectDescription: "GO" },
        { id: 10, subjectDescription: "MA" }, { id: 11, subjectDescription: "MS" }, { id: 12, subjectDescription: "MT" },
        { id: 13, subjectDescription: "MG" }, { id: 14, subjectDescription: "PA" }, { id: 15, subjectDescription: "PB" },
        { id: 16, subjectDescription: "PR" }, { id: 17, subjectDescription: "PE" }, { id: 18, subjectDescription: "PI" },
        { id: 19, subjectDescription: "RJ" }, { id: 20, subjectDescription: "RN" }, { id: 21, subjectDescription: "RS" },
        { id: 22, subjectDescription: "RO" }, { id: 23, subjectDescription: "RR" }, { id: 24, subjectDescription: "SC" },
        { id: 25, subjectDescription: "SP" }, { id: 26, subjectDescription: "SE" }, { id: 27, subjectDescription: "TO" }
    ]);

    function sendAddress() {
        api.post("/address",{
            cep: cep,
            street:logradouro,
            number: parseInt(numero),
            complement: complemento,
            district: bairro,
            reference: referencia,
            city: cidade,
            state: estado       
        })
        .then((response) => {
                console.log(response)
                alert("Seu endereço foi alterado com sucesso!")
            })
            .catch((err) => {
                console.error("Erro ao realizar Post de endereço" + err)
            })
    }

    function postAddress() {
        // const address = ({
        //     cep: cep,
        //     street:logradouro,
        //     number: parseInt(numero),
        //     complement: complemento,
        //     district: bairro,
        //     reference: referencia,
        //     city: cidade,
        //     state: estado       
        // })

        sendAddress()
    }

    const user = JSON.parse(localStorage.getItem("user"));

    const getAddress = () => {
        api.get(`/userAddress/myAddress/${user.id}`).then(
            res => {
                setCep(res.data[0].address.cep)
                setLogradouro(res.data[0].address.street)
                setNumero(res.data[0].address.number)
                setComplemento(res.data[0].address.complement)
                setBairro(res.data[0].address.district)
                setReferencia(res.data[0].address.reference)
                setCidade(res.data[0].address.city)
                setEstado(res.data[0].address.state)
                console.log(res.data[0].address)
            })
            .catch((err) => {
                console.error("Erro ao consumir api de Address" + err)
            })
    }

    const getUfs = () => {
        return ufs
    }

    useEffect(() => {

        getAddress();
        getUfs();

    }, []);

    const [options, setOptions] = useState()

    function disableForm() {
        bool = true
        setShow(bool);
        changeButton(bool)
        postAddress()
    }

    function ableForm() {
        bool = false
        setShow(bool);
        changeButton(bool)
    }
    // function click(e) {
    //     e.preventDefault();
    // }

    const [buttons, setButtons] = useState(
        <>
            <Button onclick={ableForm} label="Alterar" class="btn-confirmacao" />
        </>
    )
    let change = false

    function changeButton(change) {
        if (change) {
            setButtons(
                <>
                    <Button onclick={ableForm} label="Alterar" class="btn-confirmacao" />
                </>
            )


        } else {
            setButtons(
                <>
                    <Button onclick={disableForm} label="Salvar" class="btn-confirmacao" />
                </>
            )

        }
    }

    return (
        <>
            <FormDefault title="Endereços" className="container custom-form-box mx-3 mx-sm-1 mx-lg-4 px-5 px-sm-1 px-lg-4">

                <div className="row custom-form d-flex justify-content-center">
                    <div className=" col-12 col-md-3">
                        <Input input value={cep} disabled={show} label="CEP" type="text" id="cep" className="form-input col-12" placeholder="Digite seu CEP..." change={e => setCep(e.target.value)}/>
                    </div>

                    <div className=" col-12 col-md-6">
                        <Input input value={logradouro} disabled={show} label="Logradouro" type="text" id="rua" className="form-input col-12" placeholder="Digite o logradouro..." change={e => setLogradouro(e.target.value)}/>
                    </div>

                    <div className=" col-12 col-md-2">
                        <Input input value={numero} disabled={show} label="Número" type="text" id="rua" className="form-input col-12" placeholder="Digite o número..." change={e => setNumero(e.target.value)} />
                    </div>

                </div>

                <div className="row custom-form d-flex justify-content-center">

                    <div className="col-12 col-md-5">
                        <Input input value={complemento} disabled={show} label="Complemento" type="text" id="complemento" className="form-input col-12" placeholder="Digite o complemento..." change={e => setComplemento(e.target.value)}/>
                    </div>
                    <div className="col-12 col-md-6">
                        <Input input value={bairro} disabled={show} label="Bairro" type="text" id="bairro" className="form-input col-12" placeholder="Digite seu bairro..." change={e => setBairro(e.target.value)} />
                    </div>

                </div>

                <div className="row custom-form d-flex justify-content-center">
                    <div className="col-12 col-md-4">
                        <Input input value={referencia} disabled={show} label="Ponto de referência" type="text" id="ponto-referencia" className="form-input col-12" placeholder="Digite um ponto de referência..." change={e => setReferencia(e.target.value)} />
                    </div>
                    <div className="col-12 col-md-5">
                        <Input input value={cidade} disabled={show} label="Cidade" type="text" id="cidade" className="form-input col-12" placeholder="Digite sua cidade..." change={e => setCidade(e.target.value)} />
                    </div>

                    <div className="col-12 col-md-2">
                        <Select disabled={show} label="Estado:" options={ufs} selected={estado} change={e => e.target.value} default="Estado"/>
                        {/* <label  for="estado" >Estado</label>
                        <select disabled={show} className="form-input col-12">
                            <option id="estado" selected>Estado</option>
                            <option value="AC" disabled="disabled">Acre</option>
                            <option value="AL" disabled="disabled">Alagoas</option>
                            <option value="AP" disabled="disabled">Amapá</option>
                            <option value="AM" disabled="disabled">Amazonas</option>
                            <option value="BA" disabled="disabled">Bahia</option>
                            <option value="ES">Espírito Santo</option>
                            <option value="MA" disabled="disabled">Maranhão</option>
                            <option value="MT" disabled="disabled">Mato Grosso</option>
                            <option value="MS" disabled="disabled">Mato Grosso do Sul</option>
                            <option value="MG">Minas Gerais</option>
                            <option value="PA" disabled="disabled">Pará</option>
                            <option value="PB" disabled="disabled">Paraíba</option>
                            <option value="PR">Paraná</option>
                            <option value="PE" disabled="disabled">Pernambuco</option>
                            <option value="PI" disabled="disabled">Piauí</option>
                            <option value="RJ">Rio de Janeiro</option>
                            <option value="RN" disabled="disabled">Rio Grande do Norte</option>
                            <option value="RS">Rio Grande do Sul</option>
                            <option value="RO" disabled="disabled">Rondônia</option>
                            <option value="RR" disabled="disabled">Roraima</option>
                            <option value="SC">Santa Catarina</option>
                            <option value="SP">São Paulo</option>
                            <option value="SE" disabled="disabled">Sergipe</option>
                            <option value="TO" disabled="disabled">Tocantins</option>
                            <option value="DF" disabled="disabled">Distrito Federal</option>
                        </select> */}
                    </div>

                </div>
                <div className="row justify-content-center pt-5">
                    {buttons}
                </div>

            </FormDefault>

        </>
    )
}

export default Address