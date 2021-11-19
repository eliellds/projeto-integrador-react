import React, { useState } from "react";
import "./CardProduct.css"
import Button from '../../../micro/Button/Button'

function CardProduct(props) {
    function imageRender() {
        var imgSrc = require(`../../../../assets/images/products/${props.image}`);
        console.log(imgSrc)
        return <img src={`${imgSrc.default}`} />
    }

    
    const addToCart = () => {
        const product = {
            id: props.product.id,
            price: props.price,
            salePrice: props.salePrice,
            product: props.product,
            year: props.year,
            image: props.image
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

        if (props.price) {
            return <div className="preco-de">R$ {(props.price).toFixed(2)}</div>
        }
        return

    }

    const preco = () => {

        return (
            <>
                {precoDe()}
                <div className="preco-por">R$ {props.salePrice?(props.salePrice).toFixed(2):null}</div>
                <div className="parcelas">À vista, ou em <em>{10}x</em> de <em>R$ {props.salePrice?(props.salePrice/10).toFixed(2):(props.price/10).toFixed(2)}</em> no cartão</div>
            </>
        )

    }

    return (
        <>
            <li className="card-product col-11 col-sm-8 col-md-3 col-lg-2 mb-4 ">


                <div className="caixa-imagem">
                    <a href={`/product/${props.id}`}>
                    {imageRender()}
                    </a>
                </div>


                <div className="corpo-card">

                    <a href={`/product/${props.id}`} className="descricao">{props.product}<br />({props.year})</a>

                    <div className="pagamento">
                        <div className="preco">
                            {preco()}
                        </div>

                        <Button onclick={addToCart} class="btn-comprar btn-expand" label="COMPRAR" />

                    </div>

                </div>

            </li>
        </>
    )
}


export default CardProduct
