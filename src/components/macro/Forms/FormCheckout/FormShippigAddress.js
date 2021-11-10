import React from "react"
import Input from "../../../micro/Forms/Input/Input"
import FormDefault from "../FormDefault/FormDefault"
import Button from "../../../micro/Button/Button";

function FormShippigAddress(props) {

    return (
        <>
            <FormDefault id="address" title="Dados de entrega" action="/order">

                <div class="row  justify-content-center">

                    <div class="row ">
                        <div class=" col-6  col-sm-6 col-md-3">
                            <Input label="Telefone" className="form-input col-12 form-label" type="tel" name="telephone" placeholder="(99)9999-9999" />

                        </div>

                        <div class=" col-6 col-sm-6 col-md-3">
                            <Input label="CEP" className="form-input col-12 form-label" type="text" name="cep" placeholder="12345-000" />
                        </div>

                        <div class=" col-6 col-sm-6 col-md-3">
                            <Input label="Estado" className="form-input col-12 form-label" type="text" name="state" placeholder="Ex.:São Paulo" />
                        </div>

                        <div class=" col-6 col-sm-6 col-md-3">
                            <Input label="Cidade" className="form-input col-12 form-label" type="text" name="city" placeholder="Ex.:São Paulo" />
                        </div>

                        <div class=" col-9 col-md-8">
                            <Input label="Logradouro" className="form-input col-12 form-label" type="text" name="street" placeholder="Ex.:Rua Dos Velhos Tempos" />

                        </div>

                        <div class=" col-3  col-md-4">
                            <Input label="Numero" className="form-input col-12 form-label" type="text" name="number" placeholder="Ex.:232" />
                        </div>

                        <div class=" col-6 col-md-4">
                            <Input label="Bairro" className="form-input col-12 form-label" type="text" name="district" placeholder="Ex.Butantã" />

                        </div>

                        <div class=" col-6  col-md-4">
                            <Input label="Complemento" className="form-input col-12 form-label" type="text" name="complement" placeholder="Ex.: ap: 15" />
                        </div>

                        <div class=" col-6 col-md-4">
                            <Input label="Referencia" className="form-input col-12 form-label" type="text" name="reference" placeholder="Ex.: Proximo ao posto..." />

                        </div>

                    </div>

                </div>

            </FormDefault>
        </>
    )
}
export default FormShippigAddress