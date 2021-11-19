import React, { useState } from "react";

function ProductSuccessOrder(props) {
    const products = JSON.parse(localStorage.getItem('cart')) || []
    let total = 0;
    const [PrecoTotal, setPrecoTotal] = useState(total)
    console.log(products)
    function setTotalPrice() {
        setPrecoTotal(total)
        return PrecoTotal
    }
    function imageRender(image) {
        var imgSrc = require(`../../../assets/images/products/${image}`);
        console.log(imgSrc)
        return <img className="imageSuccess" src={`${imgSrc.default}`} />
    }

    function listProducts() {
        return products.map((product) => {
            total += parseInt(product.preco)
            localStorage.setItem('total', total)
            return <>

                <li key={product.id} className="row bloco-produto justify-content-center item-1">
                    <div className="col-md-3 col-4 ">
                        {imageRender(product.image)}
                    </div>
                    <div className="col-md-9 col-9">
                        <div className="row ">
                            <div className="atributos tipo-atributo col-3  d-sm-flex">Desc.:</div>
                            <div className="atributos atributo-descricao col-9 col-sm-9">{product.product}</div>

                            <div className="atributos tipo-atributo col-3  d-sm-flex">Valor:</div>
                            <div className="atributos atributo-valor col-9 col-sm-9">{product.salePrice ? product.salePrice : product.price}</div>



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



            <div className="valor-total">Frete: R$:&nbsp;<b>{props.frete}</b></div>
            <div className="valor-total">Total: R$:&nbsp;<b> {parseInt(total + props.frete)}</b></div>
        </>
    )
}
export default ProductSuccessOrder;