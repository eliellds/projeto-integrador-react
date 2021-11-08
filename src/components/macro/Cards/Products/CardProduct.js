import React, { useState } from "react";
import "./CardProduct.css"
import Button from "../../../micro/Button/Button"

export default function CardProduct(props) {

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
            <li className="card col-11 col-sm-8 col-md-5 col-lg-2 mb-4">


                <div className="caixa-imagem">
                    {props.children}
                </div>


                <div className="corpo-card">

                    <a href="./produto.html" className="descricao">{props.nome}<br />({props.ano})</a>

                    <div className="pagamento">
                        <div className="preco">
                            {preco(props)}
                        </div>

                        <Button navigation route={`/product/${props.id}`} class="btn-comprar btn-expand" label="COMPRAR"/>

                    </div>

                </div>

            </li>
        </>
    )

}