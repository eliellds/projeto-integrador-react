import React from 'react';
import Input from '../../../micro/Forms/Input/Input';
import Select from '../../../micro/Forms/Select/Select';
import ModalComp from '../../../micro/Modal/Modal';
import FormDefault from '../FormDefault/FormDefault';

function FormContact(props){
    return<>
         <FormDefault title="Contato" className="custom-form-box mx-3 mx-sm-1 mx-lg-4 px-5 px-sm-1 px-lg-4" >
                <div className="row forms-block justify-content-center">
                    <div className="row custom-form justify-content-center">
                        <div className="col-12 col-md-6">
                            <Input label="Nome" type="text" id="name" className="form-input col-12" placeholder="Maria da Gloria"/>
                        </div>
                        <div className="col-12 col-md-5">
                            <Select label="Assunto:" default="assunto" options={props.options}/>
                        </div>
                    </div>
                    <div className="row custom-form justify-content-center">
                        <div className="col-12 col-sm-6 col-md-6">
                           <Input label="Email" type="email" id="email" className="form-input col-12" placeholder="Maria@Email.com"/>
                        </div>
                        <div className="col-12 col-sm-6 col-md-5">
                            <Input label="Telefone" type="text" id="telephone" className="form-input col-12" placeholder="(00) 00000-0000"/>
                        </div>

                    </div>
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-11">
                            <label for="textarea" className="form-label col-12">Deixe sua mensagem</label>
                            <textarea className="textarea col-12" id="textarea" rows="5"
                                placeholder=" Escreva sua mensagem..."></textarea>
                        </div>
                    </div>
                </div>

                <div className="row justify-content-around">

                

                    <ModalComp
                        msg={<p>Sua mensagem foi enviada.</p>} info={<p>Responderemos o mais breve possível. O prazo máximo é de 24h para o retonno de nossa equipe.</p>} info1={ <p>Confira seu e-mail e cheque sua caixa de spam.</p>} info2={<p>Obrigado!</p>}>
                    </ModalComp>        

            
                </div>

            </FormDefault>
    </>
}
export default FormContact