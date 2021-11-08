import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import FormDefault from "../FormDefault/FormDefault";
import Input from "../../../micro/Forms/Input/Input";

function FormDataCard(props) {
    return (
        <>
            <FormDefault title="Dados de Pagamento" class="mt-5" action="./resumo-pedido.html">
                <div class="escolha row justify-content-around mb-4 ">

                    <a href="#" class=" col-4 cartao forma-pagamento"><h2>Cartão</h2></a>
                    <a href="#" class="col-4 forma-pagamento boleto"><h2>Boleto</h2></a>

                </div>

                <div className=" row pagamento justify-content-center d-none">
                    <div className="col-8 justify-content-center text-center ">
                        Numero do boleto: 00000000000000000000000000000000000000000000000000000000000000000
                    </div>
                </div>

                <div class="row  justify-content-center">
                    <div class="row custom-form ">

                        <div class=" col-12 col-md-5">
                            <Input label="Nome do Titular" className="form-input col-12 form-label" type="text" name="name" placeholder="Nome como está no cartão" />
                        </div>

                        <div class=" col-12 col-md-5">
                            <Input label="Numero do Cartão" className="form-input col-12 form-label" type="text" name="cardNumber" placeholder="Ex.: 0000 1111 2222 3333." />
                        </div>

                        <div class=" col-6 col-md-2">
                            <Input label="CVV" className="form-input col-12 form-label" type="text" name="cvv" placeholder="Ex.: 000." />
                        </div>

                        <div class=" col-6 col-md-4">
                            <Input label="Data de Vencimento" className="form-input col-12 form-label" type="date" name="date" placeholder="Ex.: Dia/Mês/Ano." />
                        </div>

                        <div class=" col-6 col-md-4">
                            <Input label="Data Nascimento Titular" className="form-input col-12 form-label" type="date" name="birthDate" placeholder="Ex.: Dia/Mês/Ano." />
                        </div>

                        <div class=" col-6 col-md-4">
                            <Input label="CPF-Titular" className="form-input col-12 form-label" type="text" name="CPF" placeholder="999-999-999-99" />
                        </div>
                    </div>
                </div>

            </FormDefault>

        </>
    )
}

export default FormDataCard