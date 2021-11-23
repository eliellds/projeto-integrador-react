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
function updateCart(cartItem){
    localStorage.setItem('cart',JSON.stringify(cartItem));
    localStorage.setItem('qtyCart',cartItem.length)
}

    function remove(id){
        var cartTemp = JSON.parse(localStorage.getItem('cart'))
        console.log(cartTemp)
        for (var i = 0; i < cartTemp.length; i++){
            if(cartTemp[i].id == id){
                cartTemp.splice(i, 1);
                updateCart(cartTemp);
                window.location.reload()
                
            }
        }
    }

    function renderQty() {
        productItems.map((product) => {
            
        })
    }

    function imageRender(image) {
        var imgSrc = require(`../../../assets/images/products/${image}`);
        console.log(imgSrc)
        return <img className="imagem-carrinho" src={`${imgSrc.default}`} />
    }

    function listCartItem() {

        return productItems.map(product => {
            console.log(product)
            let qtd = 0
            return <>
            
                <div className="row carrinho-card mt-1 mb-2 mx-0 align-items-center justify-content-between">
                    <div className=" col-2 col-md-2  p-0">
                      <a href={`/product/${product.id}`} > {imageRender(product.image)}</a>
                    </div>
                    <a href={`/product/${product.id}`} className="col-4 col-md-4 pe-0  texto-carrinho">
                        {product.product}
                    </a>
                    
                    <div className=" col-1 numero quantidade align-content-center text-center">
                        <button onClick={props.increase()} className="controle positivo increase-btn">+</button> 1 <button href="" className="controle negativo decrease-btn">-</button>
                    </div>

                    <div className="col-2 texto-carrinho text-center">
                         <span className="numero">{product.salePrice?product.salePrice.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }):product.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
                    </div>
                    
                    <div className="col-2 ">
                        <a onClick={e =>{e.preventDefault() 
                           remove(product.id)                   
                        
                        
                        }}  href="#" className="removerCarrinho row justify-content-center">
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