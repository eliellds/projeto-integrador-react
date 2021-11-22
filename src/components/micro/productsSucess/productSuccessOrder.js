import React, { useState } from "react";

function ProductSuccessOrder(props) {
    const products = JSON.parse(localStorage.getItem('cart')) || []
    const [PrecoTotal, setPrecoTotal] = useState(0)
    let total = 0
    let subTotal = 0
    let discount=0
    function setTotalPrice() {
        setPrecoTotal(total)
        return PrecoTotal
    }
    function imageRender(image) {
        var imgSrc = require(`../../../assets/images/products/${image}`);
    
        return <img className="imageSuccess" src={`${imgSrc.default}`} />
    }

    function listProducts() {
        return products.map((product) => {
            total += parseFloat(product.salePrice?product.salePrice:product.price)
            subTotal += parseFloat(product.price)
            discount += product.salePrice? parseFloat(product.price - product.salePrice) : 0
            localStorage.setItem('discount',discount)
            localStorage.setItem('total', total)
            localStorage.setItem('subTotal', subTotal)
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
                            <div className="atributos atributo-valor col-9 col-sm-9">R$:{product.salePrice ? product.salePrice.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) : product.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</div>



                            <div className="atributos tipo-atributo col-3  d-sm-flex">Qtd.:</div>
                            <div className="atributos atributo-qtd col-9 col-sm-9">{1}</div>
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

            <div className="valor-total">Sub Total: R$:&nbsp;<b>{subTotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</b></div>

            <div className="valor-total">Desconto total: - R$:&nbsp;<b>{discount.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</b></div>
            <div className="valor-total">Frete: R$:&nbsp;<b>{props.frete.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</b></div>
            <div className="valor-total">Total: R$:&nbsp;<b> {(total+props.frete).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</b></div>
        </>
    )
}
export default ProductSuccessOrder;