import React from 'react'
import './Checkout.css'
import Input from '../../components/micro/Forms/Input/Input'
import Button from '../../components/micro/Button/Button'

function Checkout(props) {

    return (
        <>
            <main class="container-fluid mb-4">
                <div class="row separador mb-4">
                    <h2 class="col-12 mx-0 px-0 ">Dados Pessoais</h2>

                </div>

                <form action="" class="row dados-pessoais">

                    <div class="row  justify-content-center">

                        <div class="row custom-form ">

                            <div class=" col-12 col-md-4">
                                <Input label="Primeiro nome" className="form-input col-12 form-label" type="text" name="firstName" placeholder="Ex. Maria" />
                            </div>
                            <div class=" col-12 col-md-4">
                                <Input label="Sobrenome" className="form-input col-12 form-label" type="text" name="lastName" placeholder="Ex. da Gloria" />
                            </div>
                            <div class=" col-12 col-md-4">
                            <Input label="Email" className="form-input col-12 form-label" type="email" name="email" placeholder="Ex. Maria@email.com" />
                                
                            </div>

                        </div>

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




                </form>


                <div class="row align-center separador  mt-4 mb-4">
                    <h2 class="col-12 mx-0 px-0 mt-2  ">Pagamento</h2>


                </div>
                <div class="escolha row justify-content-around mb-4 ">
                    <a href="#" class=" col-4 cartao forma-pagamento"><h2>Cartão</h2></a>
                    <a href="#" class="col-4 forma-pagamento boleto"><h2>Boleto</h2></a>

                </div>  
                <div className=" row pagamento justify-content-center d-none">
                    <div className="col-8 justify-content-center text-center ">
                        Numero do boleto: 00000000000000000000000000000000000000000000000000000000000000000
                    </div>

                </div>
                <form action="./resumo-pedido.html" class="row pagamento">

                    <div class="row  justify-content-center">

                        <div class="row custom-form ">

                            <div class=" col-12 col-md-6">
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
                            <div class="row justify-content-between mt-3 mb-3">

                                <Button label="Voltar" onclick="null" class="btn-retorno" navigation route="./cadastro"/>   

                                <Button label="Finalizar" onclick="null" class="btn-comprar" type="submit"/>
                                

                            </div>
                        </div>
                    </div>

                </form>

            </main>
        </>
    )
}

export default Checkout