import React, { useState, useEffect } from "react";
import api from "../../../services/api";
const initial = {
    compositeKey: {
        idItem: 0,
        orderDTO: {
            id: 0,
            myUser: {
                id: 0,
                firstName: "",
                lastName: "",
                cpf: "",
                email: "",
                telephone: {
                    id: 0,
                    number: ""
                },
                born: "",
            },
            payment: {
                id: 0,
                description: "",
                installments: ""
            },
            address: {
                id: 0,
                cep: "",
                city: "",
                state: "",
                district: "",
                street: "",
                number: 0,
                complement: "",
                reference: ""
            },
            telephone: {
                id: 0,
                number: ""
            },
            card: {
                cardNumber: "",
                name: "",
                cpf: "",
                birthDate: "",
                dueDate: "",
                flag: {
                    id: 0,
                    description: ""
                }
            },
            delivery: {
                id: 0,
                descricao: ""
            },
            dateOrder: "",
            deliveryDate: "",
            qtyTotal: 0,
            deliveryValue: 0.0,
            totalDiscounts: 0.0,
            amount: 0.0,
            bankSlip: ""
        }
    },
    productsDTO: {
        id: 0,
        product: "",
        conservationState: {
            id: 0,
            description: ""
        },
        description: "",
        feature: "",
        year: "",
        categoryDTO: {
            id: 0,
            category: "",
            description: ""
        },
        quantity: 0,
        image: ""
    },
    quantity: 0,
    unityDiscount: 0.0,
    totalDiscount: 0.0,
    totalPrice: 0.0
}

function ProductSuccess(props) {

    // const products = JSON.parse(localStorage.getItem('cart')) || []
    let total = 0;
    const [orderProduct, setOrderProducts] = useState(initial);
    const [PrecoTotal, setPrecoTotal] = useState(total)

    console.log(orderProduct)

    useEffect(() => {
        api
            .get(`/itemsOrder/`)
            .then((response) => setOrderProducts(response.data))
            .catch((err) => {
                console.error("ops! ocorreu um erro" + err);
            });
    }, []);

    function setTotalPrice() {
        setPrecoTotal(total)
        return PrecoTotal
    }

    function listProducts() {

        // return orderProduct.productsDTO.map((orderProduct) => {
        //     total += parseInt(orderProduct.unityDiscount)
        //     localStorage.setItem('total', total)

        //     return <>

        //         <li class="row bloco-produto item-1">

        //             <div class="atributos tipo-atributo col-3 d-none d-sm-flex">Desc.:</div>
        //             <div class="atributos atributo-descricao col-12 col-sm-9">{orderProduct.productsDTO.product}</div>

        //             <div class="atributos tipo-atributo col-3 d-none d-sm-flex">Valor:</div>
        //             <div class="atributos atributo-valor col-12 col-sm-9">{orderProduct.productsDTO.product}</div>

        //             <div class="atributos tipo-atributo col-3 d-none d-sm-flex">Qtd.:</div>
        //             <div class="atributos atributo-qtd col-12 col-sm-9">{orderProduct.productsDTO.product}</div>

        //         </li>
        //     </>

        // })

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