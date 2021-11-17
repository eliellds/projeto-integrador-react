import React, { useEffect, useState } from 'react'
import './Product.css'
import caixaRegistradora from '../../../src/assets/images/product/caixaRegistradora.png'
import Button from '../../components/micro/Button/Button'
import H1 from '../../components/micro/Title/H1'
import H2 from '../../components/micro/Title/H2'
import api from '../../services/api'



function Product(props) {

    const id = props.match.params.id;
    console.log(props);

    const [products, setProducts] = useState();

    useEffect(() => {
        api.get("/products/" + id).then((response) => {setProducts(response.data)
        console.log(response.data)}) ;
    
    }, []);

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

    const precoDe = () => {

        if (products.salePrice != null) {
            return <div className="preco-de">R$ {products.price}</div>
        }
        return
    }

    const preco = (props) => {

        return (
            <>
                {precoDe()}
                <div className="preco-por">R$ {products.salePrice}</div>
                <div className="parcelas">À vista, ou em <em>10x</em> de <em>R$ {props.parcelas}</em> no cartão</div>
            </>
        )
    }

    return (
        <>
            <H1 ></H1>
            <section className="mb-4">
                <div className="container-fluid container-fluid-section">
                    <div className="container mb-4">
                        <div className="row row-correction">
                            <div className="container container-imagem mx-0 col-12 col-md-7 col-lg-8 mt-3">
                                <div className="row p-0 imagem-caixa-registradora">
                                    <img className="caixa-Registradora p-0" src={props.imagem} alt={props.nome} />
                                    {/* <img className="Caixa-Registradora p-0" src={caixaRegistradora} alt={props.nome} /> */}
                                </div>
                            </div>
                            <div className="container Valores px-0 px-md-3 px-lg-0 mb-5 col-12 col-md-5 col-lg-4 d-flex flex-column justify-content-center">
                                <h4 className="valor text-center">{preco(props)}</h4>

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
                              4549 </p>
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
                               165165 </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Product