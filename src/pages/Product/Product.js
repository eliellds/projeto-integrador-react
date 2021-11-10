import React from 'react'
import './Product.css'
import caixaRegistradora from '../../../src/assets/images/produto/caixaRegistradora.png'
import lupa from '../../../src/assets/images/produto/lupa.png'
import Button from '../../components/micro/Button/Button'
import Input from '../../components/micro/Forms/Input/Input'
import Select from '../../components/micro/Forms/Select/Select'

const filter = [
    { id:"boleto", subjectDescription: "2.394,00 - Boleto à vista" },
    { id:"debito", subjectDescription: "2.500,00 - Débito à vista" },
    { id:"credito", subjectDescription: "2.520,00 - Crédito à vista" },
    { id:"2x", subjectDescription: "2x sem juros - 1.260,00 (total = 2.520,00)" },
    { id:"5x", subjectDescription: "5x sem juros - 504,00 (total = 2.520,00)" },
    { id:"10x", subjectDescription: "10x sem juros - 252,00 (total = 2.520,00)" },
    { id:"12x", subjectDescription: "12x com juros - 220,50 (total = 2.646,00)" },
]

function Product(props) {
  
    return(
        <>
        <h1 className="h1-section">Caixa Registradora (1932)</h1>
<section className="mb-4">
    <div className="container-fluid container-fluid-section">

        <div className="container mb-4">
            <div className="row row-correction">
                <div className="container container-imagem mx-0 col-12 col-md-7 col-lg-8 mt-3">
                    <div className="row p-0 imagem-caixa-registradora">
                        <img className="Caixa-Registradora p-0" src={caixaRegistradora}/>
                    </div>
                </div>
                <div
                    className="container Valores px-0 px-md-3 px-lg-0 mb-5 col-12 col-md-5 col-lg-4 d-flex flex-column justify-content-between">
                    <div className="row ">
                        <div className="container">
                            <h4 className="valor text-center">R$2.520,00</h4>
                        </div>
                    </div>
                    <div className="row formas-pagamento justify-content-center">
                        <Select default="Consultar formas de Pagamento" options={filter} />
                    </div>
                    <div className="row my-1">
                        <div className="container mb-1 d-flex flex-column">
                            <form className="form-cep align-self-end col-12">
                                <div className="pesquisa-btn mx-0 mt-1 col-7 col-sm-12 col-md-12">
                                <Input label = "Consultar prazo e valor do frete" className="cep" placeholder="Digite o seu CEP" type="text"/>
                                    <div className="cep-btn mx-0 col-1 mt-4">
                                    <button className="button-submit-cep" type="submit">
                                        <img className="lupa" src={lupa}/>
                                    </button>
                                </div>
                                </div>  
                            </form>

                            <form className="form-cep d-flex col-12 flex-column justify-content-space-around">
                                <div className="pesquisa-btn mx-3 col-3 col-sm-7 col-md-7">
                             <Button label="Comprar" onclick="null" class="btn-comprar" navigation route="/cart"/>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="container-fluid container-fluid-caracteristicas">
            <div className="row">
                <h2 className="h1-informações col-12">Informações do Produto</h2>
            </div>
        </div>

        <div className="container container-fluid-informações-texto p-5">
            <div className="row">
                <p className="h1-informações-texto">
                    Caixa Registradora (1932) criada por James Ritty, responsável por inventar a primeira delas no
                    ano de 1879, sua inspiração para a criação da peça surgiu ao observar uma ferramenta que contava
                    as rotações da hélice deum navio a vapor. Com a ajuda de John Ritty, seu irmão o primeiro modelo
                    foi patenteado no ano de 1883.</p>
            </div>
        </div>
        <div className="container-fluid container-fluid-caracteristicas">
            <div className="row">
                <h1 className="h1-caracteristicas">Características</h1>
            </div>
        </div>
        <div className="container container-fluid-caracteristicas-texto p-5">
            <div className="row">
                <p className="h1-caracteristicas-texto">
                    Produzida em aço inoxidável , a Caixa Registradora possui alta resistência a quedas e
                    deformações, além de possuir partes de madeira de carvalho que resiste muito bem a umidade. Suas
                    dimensões são de 30 x 30 x 30 cm</p>
            </div>
        </div>
    </div>
</section>
        </>
    )
}

export default Product