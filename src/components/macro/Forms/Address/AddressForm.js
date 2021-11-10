import React, { useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import FormDefault from '../FormDefault/FormDefault';
import Input from "../../../micro/Forms/Input/Input";
import Button from "../../../micro/Button/Button";

function Address(props) {
    const [show, setShow] = useState(true);

    function disableForm() {
        setShow(true);
        changeButton()
    }

    function ableForm() {
        setShow(false);
        changeButton()
    }

    function click(e) {
        e.preventDefault();
    }

    const [buttons, setButtons] = useState(
        <>
            <Button function={ableForm} label="Alterar" class="btn-confirmacao" />
        </>
    )
    let change = false

    function changeButton() {
        if (change == false) {
            setButtons(
                <>
                    <Button function={ableForm} label="Alterar" class="btn-confirmacao" />
                </>
            )
            change=true
        } else {
            setButtons(
                <>
                    <Button function={disableForm} label="Salvar" class="btn-confirmacao" />
                </>
            )
            change=false
        }
    }
    return (
        <>
            <FormDefault click={click} title="Endereços" class="container custom-form-box mx-3 mx-sm-1 mx-lg-4 px-5 px-sm-1 px-lg-4">

                <div class="row custom-form d-flex justify-content-center">
                    <div class=" col-12 col-md-5">
                        <Input disabled={show} label="rua" type="text" id="rua" class="form-input col-12" placeholder="Digite a rua como número..." />
                    </div>
                    
                    <div class=" col-12 col-md-2">
                        <Input disabled={show} label="Número" type="text" id="rua" class="form-input col-12" placeholder="Digite a rua como número..." />
                    </div>

                    <div class="col-12 col-md-4">
                        <Input disabled={show} label="Complemento" type="text" id="complemento" class="form-input col-12" placeholder="Digite o complemento..." />
                    </div>
                </div>

                <div class="row custom-form d-flex justify-content-center">
                    <div class="col-12 col-md-6">
                        <Input disabled={show} label="bairro" type="text" id="bairro" class="form-input col-12" placeholder="Digite sua senha..." />
                    </div>

                    <div class="col-12 col-md-5">
                        <Input disabled={show} label="Ponto de referência" type="text" id="ponto-referencia" class="form-input col-12" placeholder="Digite um ponto de referência..." />
                    </div>
                </div>

                <div class="row custom-form d-flex justify-content-center">
                    <div class="col-12 col-md-5">
                        <Input disabled={show} label="Cidade" type="text" id="cidade" class="form-input col-12" placeholder="Digite sua cidade" />
                    </div>

                    <div class="col-12 col-md-2">
                        <label  for="estado" >Estado</label>
                        <select disabled={show} class="form-input col-12">
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
                        </select>
                    </div>

                    <div class=" col-12 col-md-4">
                        <Input disabled={show} label="CEP" type="text" id="cep" class="form-input col-12" placeholder="Digite sseu CEP..." />
                    </div>
                </div>

                <div class="row justify-content-center pt-5">
                   {buttons}
                </div>

            </FormDefault>
        </>
    )
}

export default Address