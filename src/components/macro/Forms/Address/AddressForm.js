import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import FormDefault from '../FormDefault/FormDefault';
import Input from "../../../micro/Forms/Input/Input";
import Button from "../../../micro/Button/Button";
import Select from "../../../micro/Forms/Select/Select";
import api from "../../../../services/api";
import InputCep from "../../../micro/Forms/Input/InputCep";
import { useForm } from "react-hook-form"; // lembrar de fazer npm install para instalar a biblioteca react-hook-form
import { ErrorMessage } from "@hookform/error-message"; // lembrar de fazer npm install para instalar a biblioteca error-message
import InputHook from "../../../micro/Forms/Input/InputHook"

const initial = {
    id: 0,
    cep: "",
    street: "",
    number: "",
    complement: "",
    district: "",
    reference: "",
    city: "",
    state: ""
}

function Address(props) {
    let bool = true

    // desfragmentando as funcoes e objetos da biblioteca react-hook-form
    const { register, handleSubmit, watch, formState: { errors }, reset, setValue, clearErrors, setError } = useForm();

    const [address, setAddress] = useState({ ...initial });
    const [show, setShow] = useState(bool);

    const [id, setId] = useState("");
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

    useEffect(() => { })
    console.log(address)

    function putAddress(data) {
        setAddress({...address, cep : address.cep.replace(/\D/g, '')})
        api.put("/address", address)
            .then((response) => {
                console.log(response)
                alert("Seu endereço foi alterado com sucesso!")
            })
            .catch((err) => {
                console.error("Erro ao realizar atualização de endereço" + err)
                alert("Erro ao cadastrar endereço!")
            })
    }

    const user = JSON.parse(localStorage.getItem("user"));

    const getAddress = () => {
        api.get(`/userAddress/myAddress/${user.value.id}`).then(
            res => {
                setAddress(res.data[0].address)
                setId(res.data[0].address.id)
                var cep = res.data[0].address.cep
                cep = cep.substring(0, 5) + "-" + cep.substring(5, cep.length)
                setAddress({...res.data[0].address, cep : cep})
                setValue("cep", cep, { shouldValidate: true })
                setValue("cidade", res.data[0].address.city, { shouldValidate: true })
                setValue("rua", res.data[0].address.street, { shouldValidate: true })
                setValue("bairro", res.data[0].address.district, { shouldValidate: true })
                setValue("estado", res.data[0].address.state, { shouldValidate: true })
                setValue("numero", res.data[0].address.number, { shouldValidate: true })
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

   async function disableForm(data) {
        bool = true
        setShow(bool)
        putAddress(data)
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

    let change = false

    /////////////////// INICIO FUNCOES DE BUSCA E VALIDACAO DE CEP /////////////////////

    function limpa_formulário_cep() {
        //Limpa valores do formulário de cep.
        setAddress({...address,  street: "", district: "", city: "", state: "", number:"", complement: "", reference: ""});
    }

    function meu_callback(conteudo) {
        console.log(conteudo)
        if (!("erro" in conteudo)) {
            //Atualiza os campos com os valores.
            setAddress({...address, street: conteudo.logradouro, district: conteudo.bairro, city: conteudo.localidade, state: conteudo.uf})
            setValue("rua", conteudo.logradouro)
            setValue("bairro", conteudo.bairro)
            setValue("cidade", conteudo.localidade)
        } //end if.
        else {
            //CEP não Encontrado.
            limpa_formulário_cep();
            alert("CEP não encontrado.");
        }
    }

    function pesquisacep(e) {

        const valor = e.target.value
        setValue("cep", valor)

        //Nova variável "cep" somente com dígitos.
        const cep = valor.replace(/\D/g, '');

        //Verifica se campo cep possui valor informado.
        if (cep != "") {

            //Expressão regular para validar o CEP.
            var validacep = /^[0-9]{8}$/;

            //Valida o formato do CEP.
            if (validacep.test(cep)) {

                //Preenche os campos com "..." enquanto consulta webservice.
                setAddress({...address, street: "...", district: "...", city: "...", state: "...", number:"", complement: "", reference: ""});
                
                fetch(`https://viacep.com.br/ws/${cep}/json/`)
                    .then(res => res.json())
                    .then(data => meu_callback(data))

            } //end if.
            else {
                //cep é inválido.
                limpa_formulário_cep();
                alert("Formato de CEP inválido.");
            }
        } //end if.
        else {
            //cep sem valor, limpa formulário.
            limpa_formulário_cep();
        }
    };
    /////////////////// FIM FUNCOES DE BUSCA E VALIDACAO DE CEP /////////////////////

    function setInputCep(e) {
        clearErrors(["cep"])
        const valor = e.target.value

        //Nova variável "cep" somente com dígitos.
        const cep = valor.replace(/\D/g, '');

        setAddress({ ...address, cep: cep})
    }

    function LimparNumero(e) {
        clearErrors(["numero"])
        setAddress({ ...address, number: e.target.value })
    }

    function LimparRua(e){
        clearErrors(["rua"])
        setAddress({ ...address, street: e.target.value })
    }

    function LimparBairro(e){
        clearErrors(["bairro"])
        setAddress({...address, district: e.target.value})
    }

    function LimparCidade(e){
        clearErrors(["cidade"])
        setAddress({...address, city: e.target.value})
    }

    return (
        <>
            <FormDefault title="Endereços" className="container custom-form-box mx-3 mx-sm-1 mx-lg-4 px-5 px-sm-1 px-lg-4">

                <div className="row custom-form d-flex justify-content-center">
                    <div className=" col-12 col-md-3" value={address.id}>
                        {/* INPUT PARA BUSCA DE CEP AO CLICAR FORA DO FORMULARIO. 
                        LENGTH == LIMITE DE CARACTERES NO INPUT 
                        (POR ENQUANTO 9 PENSANDO NA MÁSCARA QUE INSERE "-") */}
                        <InputCep
                            name="cep" pattern={/^\d{5}-\d{3}$/}
                            mask={[/[0-9]/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/]}
                            required={<span className="text-danger">Campo inválido!</span>}
                            blur={pesquisacep}
                            label="CEP" type="text" id="cep" className="form-input col-12"
                            placeholder="00000-000" value={address.cep} disabled={show}
                            change={setInputCep} register={register} errors={errors} />
                        {/* <InputCep length="9" blur={pesquisacep} value={address.cep} disabled={show} label="CEP" type="text" id="cep" className="form-input col-12" placeholder="Digite seu CEP..." change={e => setAddress({ ...address, cep: e.target.value})} /> */}
                    </div>

                    <div className=" col-12 col-md-6">
                    <InputHook hook // hook eh a props para input padrao com a verificacao
                            name="rua" // name sera utilizado no componente para fazer as comparacoes
                            register={register} // register recebe o estado atual do que esta em register para utilizar na funcao do componente
                            required={<span className="text-danger">Campo inválido!</span>} // mensagem de erro que sera exibida caso o campo nao seja valido
                            errors={errors}
                            change={LimparRua}
                            label="Logradouro"
                            type="text"
                            placeholder="Digite o logradouro..." disabled={show}
                            value={address.street}
                        />
                        {/* <Input input value={address.street} disabled={show} name="rua" label="Logradouro" type="text" id="rua" className="form-input col-12" placeholder="Digite o logradouro..." change={e => setAddress({ ...address, street: e.target.value })} /> */}
                    </div>

                    <div className=" col-12 col-md-2">
                    <InputHook hook // hook eh a props para input padrao com a verificacao
                                name="numero" // name sera utilizado no componente para fazer as comparacoes
                                register={register} // register recebe o estado atual do que esta em register para utilizar na funcao do componente
                                required={<span className="text-danger">Digite um número válido</span>} // mensagem de erro que sera exibida caso o campo nao seja valido
                                pattern={/(\d)/}
                                errors={errors}
                                clear={clearErrors}
                                change={LimparNumero}
                                value={address.number}
                                label="Número"
                                type="text"
                                className="form-input col-12"
                                placeholder="Digite o número..." disabled={show}/>
                        </div>

                </div>

                <div className="row custom-form d-flex justify-content-center">

                    <div className="col-12 col-md-5">
                        <Input input value={address.complement} disabled={show} label="Complemento" type="text" id="complemento" className="form-input col-12" placeholder="Digite o complemento..." change={e => setAddress({...address, complement: e.target.value})} />
                    </div>

                    <div className="col-12 col-md-6">
                            <InputHook hook // hook eh a props para input padrao com a verificacao
                            name="bairro" // name sera utilizado no componente para fazer as comparacoes
                            register={register} // register recebe o estado atual do que esta em register para utilizar na funcao do componente
                            required={<span className="text-danger">Campo inválido!</span>} // mensagem de erro que sera exibida caso o campo nao seja valido
                            errors={errors}
                            change={LimparBairro}
                            label="Bairro"
                            type="text"
                            placeholder="Digite o bairro..." disabled={show}
                            value={address.district}/>
                        {/* <Input input value={address.street} disabled={show} name="rua" label="Logradouro" type="text" id="rua" className="form-input col-12" placeholder="Digite o logradouro..." change={e => setAddress({ ...address, street: e.target.value })} /> */}
                     </div>
                </div>
                <div className="row custom-form d-flex justify-content-center">
                    <div className="col-12 col-md-4">
                        <Input input value={address.reference} disabled={show} label="Ponto de referência" type="text" id="ponto-referencia" className="form-input col-12" placeholder="Digite um ponto de referência..." change={e => setAddress({...address, reference: e.target.value})} />
                    </div>

                    <div className="col-12 col-md-5">
                    <InputHook hook // hook eh a props para input padrao com a verificacao
                            name="cidade" // name sera utilizado no componente para fazer as comparacoes
                            register={register} // register recebe o estado atual do que esta em register para utilizar na funcao do componente
                            required={<span className="text-danger">Campo inválido!</span>} // mensagem de erro que sera exibida caso o campo nao seja valido
                            errors={errors}
                            change={LimparCidade}
                            label="Cidade"
                            type="text"
                            placeholder="Digite sua cidade..." disabled={show}
                            value={address.city}/>
                        {/* <Input input value={address.street} disabled={show} name="rua" label="Logradouro" type="text" id="rua" className="form-input col-12" placeholder="Digite o logradouro..." change={e => setAddress({ ...address, street: e.target.value })} /> */}
                     </div>

                    <div className="col-12 col-md-2">
                        <Select disabled={show} label="Estado:" options={ufs} selected={address.state} change={e => setAddress({...address, state: e.target.value})} default="Estado" />
                    </div>

                </div>
                <div className="row justify-content-center pt-5">
                    <Button onclick={ableForm} label="Alterar" class={`btn-confirmacao ${stateB.alterar}`} />
                    <Button onclick={handleSubmit(disableForm)} label="Salvar" class={`btn-confirmacao ${stateB.salvar}`} />
                </div>

            </FormDefault>

        </>
    )
}

export default Address