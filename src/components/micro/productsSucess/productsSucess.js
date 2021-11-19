import React, { useState} from "react";

function ProductSuccess(props) {

    const productsOrder = props.products || []
    let total = 0;

    const [PrecoTotal, setPrecoTotal] = useState(total)

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
        return productsOrder.map((product) => {
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
                            <div className="atributos atributo-descricao col-9 col-sm-9">{product.totalPrice}</div>

                            <div className="atributos tipo-atributo col-3  d-sm-flex">Valor:</div>
                            <div className="atributos atributo-valor col-9 col-sm-9">{product.totalDiscount}</div>



                            <div className="atributos tipo-atributo col-3  d-sm-flex">Qtd.:</div>
                            <div className="atributos atributo-qtd col-9 col-sm-9">{product.quantity}</div>
                        </div>
                    </div>


                </li>
            </>

        })

    }


    const finalPrice = parseInt(total + props.frete)

    return (
        <>
            {listProducts()}
            {console.log(total)}

            <div class="valor-total">Frete: &nbsp;<b>{props.frete}</b></div>
            <div class="valor-total">Total: &nbsp;<b>{props.finalPrice}</b></div>
        </>
    )
}

export default ProductSuccess;