import React from 'react'
import './Product.css'
import caixaRegistradora from '../../../src/assets/images/produto/caixaRegistradora.png'
import lupa from '../../../src/assets/images/produto/lupa.png'
import Button from '../../components/micro/Button/Button'
import Input from '../../components/micro/Forms/Input/Input'
import Select from '../../components/micro/Forms/Select/Select'

const filter = [
    { id: "boleto", subjectDescription: "2.394,00 - Boleto à vista" },
    { id: "debito", subjectDescription: "2.500,00 - Débito à vista" },
    { id: "credito", subjectDescription: "2.520,00 - Crédito à vista" },
    { id: "2x", subjectDescription: "2x sem juros - 1.260,00 (total = 2.520,00)" },
    { id: "5x", subjectDescription: "5x sem juros - 504,00 (total = 2.520,00)" },
    { id: "10x", subjectDescription: "10x sem juros - 252,00 (total = 2.520,00)" },
    { id: "12x", subjectDescription: "12x com juros - 220,50 (total = 2.646,00)" },
]

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
            <h1 className="h1-section">Caixa Registradora (1932)</h1>
            <section className="mb-4">
                <div className="container-fluid container-fluid-section">

                    <div className="container mb-4">
                        <div className="row row-correction">
                            <div className="container container-imagem mx-0 col-12 col-md-7 col-lg-8 mt-3">
                                <div className="row p-0 imagem-caixa-registradora">
                                    <img className="Caixa-Registradora p-0" src={props.imagem} alt={props.nome} />
                                    {/* src={caixaRegistradora} */}
                                </div>
                            </div>
                            <div
                                className="container Valores px-0 px-md-3 px-lg-0 mb-5 col-12 col-md-5 col-lg-4 d-flex flex-column justify-content-between">
                                <div className="row preco pt-5">
                                    {preco(props)}
                                    {/* <h4 className="valor text-center">R$2.520,00</h4> */}
                                    {/* <Select default="Consultar formas de Pagamento" options={filter} /> */}

                                </div>

                                <div className="container mb-1 d-flex flex-column">

                                    <div className="pagamento">
                                        {/* <a href={`/product/${props.id}`} className="descricao">{props.nome}<br />({props.ano})</a> */}
                                        <Button onclick={addToCart} class="btn-comprar" label="COMPRAR" />
                                    </div>

                                </div>
                                <h4 className="text-center produto-frete">Frete fixo: R$150,00</h4>

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