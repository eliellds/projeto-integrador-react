import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react'
import '../../../pages/Cart/Cart.css'
import CartItems from '../../micro/CartItems/CartItems';
import Button from "../../micro/Button/Button"
import { useHistory } from "react-router"
import { Link } from 'react-router-dom';
import CardProduct from '../Cards/Products/CardProduct';
import { Redirect } from "react-router-dom";

const initialCart = 0


function CartItemsComp(props) {
    const history = useHistory()
    const [qtyCart, setQty] = useState(initialCart)
    const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem('cart')
    ))
    const [total, setTotal] = useState(0)

    function setQtyCart() {
        var qty = 0
        if (cartItems) {
            cartItems.map(item => {
                qty = qty + item.qty
            })
        }
        localStorage.setItem('qtyCart', qty)
        setQty(qty)
        return qty
    }

    // const [success, setSuccess] = useState(false)
    

    useEffect(() => {
        setQtyCart()
        setCartItems(JSON.parse(localStorage.getItem('cart')))
        somar()
    }, [])

    function somar() {
        let valor = 0
        if (cartItems) {
            cartItems.map(product => {
                {
                    product.salePrice
                    ? valor = valor + (product.salePrice * product.qty)
                    : valor = valor + (product.price * product.qty)
                }
            })
        }
        setTotal(valor)
    }

    function preventDefault(e) {
        e.preventDefault()
        props.click()
        window.location.href = props.logged ? "/login" : "/checkout";

    }
    return (

        <>
            <div className="container mt-5">

                <div className="row justify-content-center mt-2 mb-2">
                    <h2 className="titulo col-12 mb-3">Sacola</h2>
                    <div className="col-9 linha-divisoria mb-3"></div>
                </div>
            </div>

            <div className=" container personalizado-carrinho-desc p-0 pl-md-1 pr-md-1  ">

                <div className="row container-descricao justify-content-between align-items-center">
                    <div className="col-2"></div>
                    <h2 className=" texto-desc col-4 text-start  col-md-4">DESCRIÇÃO PRODUTOS</h2>
                    <h2 className="texto-desc col-1  "><abbr title="Quantidade unitaria">QTD UN.</abbr></h2>
                    <h2 className="texto-desc col-2 ">PREÇO </h2>
                    <h2 className="texto-desc col-2"><abbr title="Remover do carrinho">REM</abbr></h2>

                </div>
            </div>

            <div className=" container personalizado-carrinho p-0 pl-md-1 pr-md-1  ">

                {qtyCart >= 1 ? <CartItems /> :
                    <div className="m-5 justify-content-center">
                        <p className="text-center">Está meio vazio aqui, não? Confira nossas promoções e outros itens da loja!</p>
                    </div>}


                {qtyCart >= 1 ? <div className="row tamanho  ">
                    <div className="col-5 mb-3 mt-3 text-start">
                        <h4 className="texto-total">Frete: R$<span className="numero total">150,00</span></h4>
                    </div>
                    <div className="col-5 mb-3 mt-3">
                        <h4 className="texto-total">Quantidade: <span className="numero total">{qtyCart} </span> - Total:R$ <span className="numero total">{(total + 150).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span></h4>
                    </div>

                </div> : ""}

                <div className="row justify-content-center tamanho mb-4">
                    <div className="col-9 linha-divisoria-apoio justify-self-center "></div>
                </div>

                <div className="d-flex justify-content-between mb-5">
                    <Button onclick={history.goBack} class="btn-retorno" label="Continuar Compra" />
                    {qtyCart >= 1 ? <Link onClick={(e) => preventDefault(e)} class="btn-custom-default btn-comprar align-self-center" label="">
                        FINALIZAR
                    </Link> : ""}
                </div>

            </div> 
        </>
    )
}

export default CartItemsComp;