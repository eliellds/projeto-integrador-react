import React from 'react'
import './Product.css'
import caixaRegistradora from '../../../src/assets/images/product/caixaRegistradora.png'
import Button from '../../components/micro/Button/Button'
import H1 from '../../components/micro/Title/H1'
import H2 from '../../components/micro/Title/H2'


function Product(props) {

    const addToCart = () => {
        const product = {
            id: props.id,
            precoDe: props.precoDe,
            preco: props.precoPor,
            nome: props.nome,
            ano: props.ano
        }
        let cartList = localStorage.getItem("cart")
            ? JSON.parse(localStorage.getItem("cart"))
            : []
        cartList.push(product)
        let cartString = JSON.stringify(cartList)
        localStorage.setItem("cart", cartString)
        localStorage.setItem('qtyCart', JSON.stringify(cartList.length))

        window.location.href = "/cart";
    }

    const precoDe = (props) => {

        if (props.precoDe) {
            return <div className="preco-de">R$ {props.precoDe}</div>
        }
        return
    }

    const preco = (props) => {

        return (
            <>
                {precoDe(props)}
                <div className="preco-por">R$ {props.precoPor}</div>
                <div className="parcelas">À vista, ou em <em>{props.vezes}x</em> de <em>R$ {props.parcelas}</em> no cartão</div>
            </>
        )
    }

    return (
        <>
            <H1 h1="Caixa Registradora (1932)"></H1>
            <section className="mb-4">
                <div className="container-fluid container-fluid-section">
                    <div className="container mb-4">
                        <div className="row row-correction">
                            <div className="container container-imagem mx-0 col-12 col-md-7 col-lg-8 mt-3">
                                <div className="row p-0 imagem-caixa-registradora">
                                    {/* <img className="Caixa-Registradora p-0" src={props.imagem} alt={props.nome} /> */}
                                    <img className="Caixa-Registradora p-0" src={caixaRegistradora} alt={props.nome} />
                                </div>
                            </div>
                            <div className="container Valores px-0 px-md-3 px-lg-0 mb-5 col-12 col-md-5 col-lg-4 d-flex flex-column justify-content-center">
                                {/* <h4 className="valor text-center">{preco(props)}</h4> */}
                                <h4 className="valor text-center">De: <del>R$3.520,00</del><br />Por: R$2.520,00</h4>

                                <select className="form-input col-11 align-self-center  ">
                                    <option id="forma-pagamento" selected>Consultar formas de pagamento</option>
                                    <option value="boleto">2.394,00 - Boleto à vista</option>
                                    <option value="debito">2.500,00 - Débito à vista</option>
                                    <option value="credito">2.520,00 - Crédito à vista</option>
                                    <option value="12x">12x com juros - 220,50 (total = 2.646,00) </option>
                                    <option value="10x">10x sem juros - 252,00 (total = 2.520,00) </option>
                                    <option value="5x">5x sem juros - 504,00 (total = 2.520,00) </option>
                                    <option value="2x">2x sem juros - 1.260,00 (total = 2.520,00)</option>
                                </select>

                                <Button onclick={addToCart} class="btn-comprar align-self-center " label="comprar" />
                                <h4 className="frete-fixo-produto text-center pt-4">Frete fixo R$150,00</h4>
                            </div>
                        </div>
                    </div>

                    <div className="container-fluid container-fluid-caracteristicas">
                        <div className="row">
                            <H2 h2="Informações do Produto"></H2>
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
                            <H2 h2="Características"></H2>
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