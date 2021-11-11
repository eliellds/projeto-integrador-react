import React, { useState } from "react";
import "./CardProduct.css"
import Button from '../../../micro/Button/Button'
export default function CardProduct(props) {
    const addToCart = () => {
        const product = {
            id:props.id,
            precoDe:props.precoDe,
            preco:props.precoPor,
            nome:props.nome,
            ano:props.ano
        }
        let cartList = localStorage.getItem("cart") 
            ? JSON.parse(localStorage.getItem("cart")) 
            : []
        cartList.push(product)
        let cartString = JSON.stringify(cartList)
        localStorage.setItem("cart", cartString)
        // localStorage.setItem('qtyCart', JSON.stringify(cartList.length))
        // props.setQtyCart(cartList.length)
        window.location.href = "/cart";

       
    }
    function redirect(){

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
                <div class="parcelas">À vista, ou em <em>{props.vezes}x</em> de <em>R$ {props.parcelas}</em> no cartão</div>
            </>
        )

    }

    return (
        <>
            <li className="card-product col-11 col-sm-8 col-md-3 col-lg-2 mb-4 ">


                <div className="caixa-imagem">
                    <a href={`/product/${props.id}`}>
                        <img src={props.imagem} alt={props.nome}/>
                    </a>
                </div>


                <div className="corpo-card">

                    <a href={`/product/${props.id}`} className="descricao">{props.nome}<br />({props.ano})</a>

                    <div className="pagamento">
                        <div className="preco">
                            {preco(props)}
                        </div>

                        <Button onclick={addToCart} class="btn-comprar btn-expand" label="COMPRAR"/>

                    </div>

                </div>

            </li>
        </>
    )

}