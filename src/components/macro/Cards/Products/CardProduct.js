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
            id: props.id,
            price: props.price,
            salePrice: props.salePrice,
            product: props.product,
            year: props.year,
            image: props.image,
            storage:props.qty,
            qty:1
        }
        let cartList = localStorage.getItem("cart")
            ? JSON.parse(localStorage.getItem("cart"))
            : []
        
        console.log(cartList)
        if (cartList.length >0) {
            for (var i = 0; i <= cartList.length; ++i) {
                if (cartList[i].id == product.id) {
                    if (cartList[i].storage > cartList[i].qty) {
                        cartList[i].qty = cartList[i].qty + 1
                        break 
                    } else {
                         window.alert("Produto sem estoque")
                         break
                    }
                } else if (i == cartList.length - 1) {
                    cartList.push(product)
                    break

                }
            }
        } else {


            cartList.push(product)
           
        }
        let cartString = JSON.stringify(cartList)
        localStorage.setItem("cart", cartString)
        localStorage.setItem('qtyCart', JSON.stringify(cartList.length))
        window.location.href = "/cart";

    }


    const preco = () => {

        if (props.salePrice) {

            const saleFormated = props.salePrice.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
            const priceFormated = props.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
            const parcelas = (props.salePrice / 10).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

            return (
                <>
                    <div className="preco-de">{priceFormated}</div>
                    <div className="preco-por">{saleFormated}</div>
                    <div className="parcelas">À vista, ou em até <em>{10}x</em> de <em>{parcelas}</em> no cartão</div>
                </>
            )
        } else {
            
            const priceFormated = props.price?.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
            const parcelas = (props.price / 10).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

            return (
                <>
                    <div className="preco-por">{priceFormated}</div>
                    <div className="parcelas">À vista, ou em até <em>{10}x</em> de <em>{parcelas}</em> no cartão</div>
                </>
            )
        }

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
