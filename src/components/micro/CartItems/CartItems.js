import React, { useEffect, useState } from 'react'
import Remove from '../../../assets/images/cart/remover.png'
import Produto from '../../../assets/images/cart/caixaRegistradora.png'


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
        return <img src={`${imgSrc.default}`} />
    }

    function valor(product){
        if (product.salePrice > 0) {
          return <span className="numero">{product.salePrice}</span> 
        }
            else {
               return<span className="numero">{product.price}</span>
            } 
    }

    function listCartItem() {

        return productItems.map(product => {
            console.log(product)
            return <>
            
                <div className="row carrinho-card mt-1 mb-2 mx-0 align-items-center justify-content-between">
                    <div className="col-2 col-md-2  p-0">
                      <a href="#"> {imageRender(product.image)}</a>
                    </div>
                    <a href="#paginaProduto" className="col-4 col-md-4 pe-0  texto-carrinho">
                        {product.product}
                    </a>
                    
                    <div className=" col-1 numero quantidade align-content-center text-center">
                        <a href="#" className="controle positivo">+</a> 1 <a href="" className="controle negativo">-</a>
                    </div>

                    <div className="col-2 texto-carrinho  text-center">
                        R$<span className="numero">{valor(product)}</span>
                    </div>
                    
                    <div className="col-2 ">
                        <a href="#" className="removerCarrinho row justify-content-center">
                            <img className="col-7 col-md-4" src={Remove} alt="" width="20px" />
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