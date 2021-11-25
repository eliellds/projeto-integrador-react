import React, { useState } from "react";

function ProductSuccessOrder(props) {
    const products = JSON.parse(localStorage.getItem('cart')) || []

    let total = props.total()
    let subTotal = props.sub()
    let discount = props.desconto()
    
    function imageRender(image) {
        var imgSrc = require(`../../../assets/images/products/${image}`);
    
        return <img className="imageSuccess" src={`${imgSrc.default}`} />
    }

    function listProducts() {
        return products.map((product) => {
            return <>

                <li key={product.id} className="row bloco-produto justify-content-center item-1">
                    <div className="col-md-3 col-4 ">
                        {imageRender(product.image)}
                    </div>
                    <div className="col-md-9 col-9">
                        <div className="row ">
                            <div className="atributos tipo-atributo col-3  d-sm-flex">Produto:</div>
                            <div className="atributos atributo-descricao col-9 col-sm-9">{product.product}</div>

                            <div className="atributos tipo-atributo col-3  d-sm-flex">Valor:</div>
                            <div className="atributos atributo-valor col-9 col-sm-9">{product.salePrice ? product.salePrice.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) : product.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</div>



                            <div className="atributos tipo-atributo col-3  d-sm-flex">Qtd.:</div>
                            <div className="atributos atributo-qtd col-9 col-sm-9">{product.qty}</div>
                        </div>
                    </div>


                </li>
            </>

        })

    }



    return (
        <>
            {listProducts()}
            {/* {console.log(total)} */}

            <div className="valor-total">Sub Total: &nbsp;<b>{subTotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</b></div>

            <div className="valor-total">Desconto total: -&nbsp;<b>{discount.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</b></div>
            <div className="valor-total">Frete: &nbsp;<b>{props.frete.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</b></div>
            <div className="valor-total">Total: &nbsp;<b> {(total).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</b></div>
        </>
    )
}
export default ProductSuccessOrder;