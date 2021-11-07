import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './AddressForm.css'
import FormDefault from '../../components/macro/Forms/FormDefault/FormDefault'
import Input from '../../components/micro/Forms/Input/Input'
import Button from '../../components/micro/Button/Button'

function Address(props) {

    return (
        <>
            <div class="row d-flex justify-content-center col-md-9 col-12">
                <FormDefault title="Endereços" class="custom-form-box mx-3 mx-sm-1 mx-lg-4 px-5 px-sm-1 px-lg-4">

                    <div class="row forms-block ">
                        <div class="row custom-form d-flex justify-content-center">

                            <div class=" col-12 col-md-6">
                                <Input label="rua" type="text" id="rua" class="form-input col-12" placeholder="Digite a rua como número..."/>
                            </div>

                            <div class="col-12 col-md-4">
                                <Input label="Complemento" type="text" id="complemento" class="form-input col-12"
                                    placeholder="Digite o complemento..."/>

                            </div>

                        </div>

                        <div class="row custom-form d-flex justify-content-center">

                            <div class="col-12 col-md-6">

                                <label for="bairro" class="form-label">Bairro</label>
                                <input type="text" id="bairro" class="form-input col-12"
                                    placeholder="Digite sua senha..."/>

                            </div>

                            <div class="col-12 col-md-4">

                                <label for="ponto-referencia" class="form-label">Ponto de referência</label>
                                <input type="text" id="ponto-referencia" class="form-input col-12"
                                    placeholder="Digite um ponto de referência..."/>

                            </div>


                        </div>

                        <div class="row custom-form d-flex justify-content-center">
                            <div class="col-12 col-md-5">

                                <label for="cidade" class="form-label">Cidade</label>
                                <input type="text" id="cidade" class="form-input col-12"
                                    placeholder="Digite sua cidade"/>
                            </div>

                            <div class="col-12 col-md-2">

                                <label for="estado" class="form-label">Estado</label>
                                <select class="form-input col-12">
                                    <option id="estado" selected>Selecione o assunto</option>
                                    <option value="AC">Acre</option>
                                    <option value="AL">Alagoas</option>
                                    <option value="AP">Amapá</option>
                                    <option value="AM">Amazonas</option>
                                    <option value="BA">Bahia</option>
                                    <option value="ES">Espírito Santo</option>
                                    <option value="MA">Maranhão</option>
                                    <option value="MT">Mato Grosso</option>
                                    <option value="MS">Mato Grosso do Sul</option>
                                    <option value="MG">Minas Gerais</option>
                                    <option value="PA">Pará</option>
                                    <option value="PB">Paraíba</option>
                                    <option value="PR">Paraná</option>
                                    <option value="PE">Pernambuco</option>
                                    <option value="PI">Piauí</option>
                                    <option value="RJ">Rio de Janeiro</option>
                                    <option value="RN">Rio Grande do Norte</option>
                                    <option value="RS">Rio Grande do Sul</option>
                                    <option value="RO">Rondônia</option>
                                    <option value="RR">Roraima</option>
                                    <option value="SC">Santa Catarina</option>
                                    <option value="SP">São Paulo</option>
                                    <option value="SE">Sergipe</option>
                                    <option value="TO">Tocantins</option>
                                    <option value="DF">Distrito Federal</option>
                                </select>

                            </div>

                            <div class=" col-12 col-md-3">
                                <label for="cep" class="form-label">CEP</label>
                                <input type="text" id="cep" class="form-input col-12" placeholder="Digite sseu CEP..."/>
                            </div>

                        </div>

                    </div>

                    <div class="row justify-content-center">

                        <input type="submit" class="btn-confirmacao mx-5 my-2" value="ALTERAR"/>

                    </div>
                </FormDefault>

            </div>
        </>
    )
}

export default Address