import React, { useState} from "react";

function ProductSuccess(props) {

    const productsOrder = props.products || []
    let total = 0;

    const [PrecoTotal, setPrecoTotal] = useState(total)

    function setTotalPrice() {
        setPrecoTotal(total)
        return PrecoTotal
    }

    console.log(productsOrder)
    function listProducts() {

        return productsOrder.map((product) => {
            total += parseInt(product)
            localStorage.setItem('total', total)

            return <>

                <li class="row bloco-produto item-1">

                    <div class="atributos tipo-atributo col-3 d-none d-sm-flex">Desc.:</div>
                    <div class="atributos atributo-descricao col-12 col-sm-9">{product.totalPrice}</div>

                    <div class="atributos tipo-atributo col-3 d-none d-sm-flex">Valor:</div>
                    <div class="atributos atributo-valor col-12 col-sm-9">{product.totalDiscount}</div>

                    <div class="atributos tipo-atributo col-3 d-none d-sm-flex">Qtd.:</div>
                    <div class="atributos atributo-qtd col-12 col-sm-9">{product.quantity}</div>

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