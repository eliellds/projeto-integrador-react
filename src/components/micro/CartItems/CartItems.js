import React, { useEffect, useState } from 'react'
import './CartItems.css'
import Remove from '../../../assets/images/cart/remover.png'
import Produto from '../../../assets/images/cart/caixaRegistradora.png'
import { Link } from 'react-router-dom'


function CartItems(props) {
    const productItems = JSON.parse(localStorage.getItem("cart")) || []
    const qtyCart = JSON.parse(localStorage.getItem('qtyCart'))

    function setQtyCart() {
        return qtyCart
    }

    // function remover(id){

    //     for(var i = )
    // }

    function imageRender(image) {
        var imgSrc = require(`../../../assets/images/products/${image}`);
        console.log(imgSrc)
        return <img className="imagem-carrinho" src={`${imgSrc.default}`} />
    }

    function listCartItem() {

        return productItems.map(product => {
            console.log(product)
            return <>
            
                <div className="row carrinho-card mt-1 mb-2 mx-0 align-items-center justify-content-between">
                    <div className=" col-2 col-md-2  p-0">
                      <a href="#" > {imageRender(product.image)}</a>
                    </div>
                    <a href="#paginaProduto" className="col-4 col-md-4 pe-0  texto-carrinho">
                        {product.product}
                    </a>
                    
                    <div className=" col-1 numero quantidade align-content-center text-center">
                        <a href="#" className="controle positivo">+</a> 1 <a href="" className="controle negativo">-</a>
                    </div>

                    <div className="col-2 texto-carrinho text-center">
                        <span className="numero">{product.salePrice?product.salePrice.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }):product.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
                    </div>
                    
                    <div className="col-2 ">
                        <a href="#" className="removerCarrinho row justify-content-center">
                            <img className="remover col-7 col-md-4" src={Remove} alt="" width="20px"/>
                        </a>
                    </div>
                </div>
            </>
        })
    }

    return (
        <>        
            {listCartItem()}
        </>
    )
}



export default CartItems