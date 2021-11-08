import Button from '../../components/micro/Button/Button'
import React from 'react';
import Input from '../../components/micro/Forms/Input/Input';
import Select from '../../components/micro/Forms/Select/Select';
import { useEffect, useState } from 'react';
import api from '../../services/api'
  

function Contact(props) {
    const [options, setOptions] = useState()

    useEffect(() =>{
        api.get("/subjects").then((response) => setOptions(response.data)).catch((err)=>{
            console.error("Erro ao consumir api de subjects"+err)
        })

    },[])

    return <>
        <h1>Contato</h1>

        <section className="container-fluid container-form px-sm-5 py-3">

            <form action="home" className="custom-form-box mx-3 mx-sm-1 mx-lg-4 px-5 px-sm-1 px-lg-4">

                <div className="row forms-block justify-content-center">

                    <div className="row custom-form justify-content-center">

                        <div className="col-12 col-md-5">
                            <Input label="Nome" type="text" id="name" className="form-input col-12" placeholder="Maria da Gloria"/>

                        </div>

                        <div className="col-12 col-md-5">
                            <Select label="Assunto:" default="assunto" options={options}/>
                            {/* <label for="assunto" className="form-label">Assunto</label>
                            <select className="form-input col-12">
                                <option id="assunto" selected>Selecione o assunto</option>
                                <option value="duvidas">Dúvidas</option>
                                <option value="informacoes">Informações</option>
                                <option value="sugestoes">Sugestões</option>
                                <option value="vender">Vender</option>
                                <option value="ajuda">Ajuda</option>
                                <option value="outros">Outros</option>
                            </select> */}
                            

                        </div>

                    </div>

                    <div className="row custom-form justify-content-center">

                        <div className="col-12 col-sm-6 col-md-5">
                           <Input label="Email" type="email" id="email" className="form-input col-12" placeholder="Maria@Email.com"/>
                        </div>

                        <div className="col-12 col-sm-6 col-md-4">
                            <Input label="Telefone" type="text" id="telephone" className="form-input col-12" placeholder="(00) 00000-0000"/>
                        </div>

                    </div>


                    <div className="row justify-content-center">

                        <div className="col-12 col-md-9">
                            <label for="textarea" className="form-label col-12">Deixe sua mensagem</label>
                            <textarea className="textarea col-12" id="textarea" rows="5"
                                placeholder=" Escreva sua mensagem..."></textarea>

                        </div>
                    </div>

                </div>

                <div className="row justify-content-around">

                    <Button label="Voltar"  navigation route="/Home" class="btn-retorno"/>

                    <Button label="Enviar" onclick="null" class="btn-confirmacao"/>
                

                    {/* <!-- Modal --> */}
                    {/* <div className="modal fade" id="enviar" tabindex="-1" aria-hidden="true">

                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="enviar-modal">Mensagem Enviada!</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <p>Sua mensagem foi enviada.</p>
                                    <p>Responderemos o mais breve possível. O prazo máximo é de 24h para o retonno de nossa equipe.</p>

                                    <p>Obrigado!</p>

                                </div>
                                <div className="modal-footer">
                                 
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                                </div>
                            </div>
                        </div>

                    </div> */}
                </div>

            </form>

        </section>
        {/* <!-- Fim container cadastro -->  */}
    </>
}
export default Contact;