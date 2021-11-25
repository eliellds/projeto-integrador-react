import React from 'react'
import { Link } from 'react-router-dom';
import Button from '../../../micro/Button/Button'
import 'bootstrap/dist/css/bootstrap.min.css';


function Emphasis(props) {
    function searchItem(product, cartList) {
        for (var i = 0; i < cartList.length; i++) {
            if (cartList[i].id == product.id) {
                if (cartList[i].storage > cartList[i].qty) {
                    cartList[i].qty = cartList[i].qty + 1
                } else {
                    window.alert("Produto sem estoque")
                }
            } else if (i == cartList.length - 1) {
                cartList.push(product)

            }
        }
    }

    const addToCart = () => {
        let cartList = localStorage.getItem("cart")
            ? JSON.parse(localStorage.getItem("cart"))
            : []
        const product = {
            id: props.id,
            price: props.price,
            salePrice: props.salePrice,
            product: props.product,
            year: props.year,
            image: props.image,
            storage: props.qty,
            qty: 1
        }
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

    const precoDe = (props) => {

        if (props.precoDe) {
            return <div className="preco-de">R$ {props.price}</div>
        }
        return
    }

    const preco = (props) => {

        return (
            <>
                {precoDe(props)}
                <div className="preco-por">R$ {props.salePrice}</div>
                <div className="parcelas">À vista, ou em <em>{10}x</em> de <em>R$ {props.salePrice ? (props.salePrice / 10).toFixed(2) : (props.price / 10).toFixed(2)}</em> no cartão</div>
            </>
        )
    }

    function image() {
        var imgSrc = require(`../../../../assets/images/products/${props.image}`);
        console.log(imgSrc)
        return <img className="image-emphasis" src={`${imgSrc.default}`} />
    }
    if (props.variable == true) {
        return <>

            <div className="col-md-5 col-12 custom-section-item">
                <Link to={"/product/" + props.id}>{image()}</Link>

            </div>

            <div className="col-md-5 col-12 custom-section-item">

                <h6>{props.product}<br />{props.year}</h6>

                <p className={"text-center " + props.salePrice ? "preco-de text-center " : "text-center  preco"}>{props.salePrice ? "De: " + props.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) : props.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
                <p className={"text-center preco"}>{props.salePrice ? "Por: " + props.salePrice.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) : ""}</p>
                <Button label={props.qty == 0 ? "Sem estoque" : "Comprar"} onclick={addToCart} class="btn-categoria py-2 px-0" />

            </div>

        </>
    } else {

        return <>


            <div className="col-md-5 col-12 custom-section-item">

                <h6>{props.product}<br />{props.year}</h6>

                <p className={"" + props.salePrice ? "text-center preco-de" : " text-center preco"}>{props.salePrice ? "De: " + props.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) : "R$" + props.price}</p>
                <p className={"text-center preco"}>{props.salePrice ? "Por: " + props.salePrice.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) : ""}</p>


                <Button label="Comprar" onclick={addToCart} class="btn-categoria py-2 px-0" />

            </div>

            <div className="col-md-5 col-12 custom-section-item">
                <Link to={"/product/" + props.id}>{image()}</Link>

            </div>

        </>
    }
}
export default Emphasis