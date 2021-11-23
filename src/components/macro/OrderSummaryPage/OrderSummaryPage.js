import React, { useEffect, useState } from "react";
import OrderInfo from '../../micro/productsSucess/orderInfo'
import Button from "../../micro/Button/Button"
import "./OrderSummaryPage.css"
import api from "../../../services/api";
import ProductSuccessOrder from "../../micro/productsSucess/productSuccessOrder";

let initial = JSON.parse(localStorage.getItem('order'))
const cart = JSON.parse(localStorage.getItem('cart'))
const user = JSON.parse(localStorage.getItem('user'))

function OrderSummaryPage(props) {

    const [order, setOrder] = useState(initial)

    // funcao para setar a quantidade de cada item no itemOrder, retorna o valor
    function setQtyItem(id) {
        let qty = 0
        cart.map(item => {
            if (item.id == id) {
                qty = item.qty
            }
        })
        return qty
    }

    // funcao para setar o desconto unitario de cada item no itemOrder, retorna o valor
    function calcUnityDiscount(id) {
        let unityDiscount = 0
        cart.map(item => {
            if (item.id == id) {
                {
                    item.salePrice
                    ? unityDiscount = (item.price - item.salePrice)
                    : unityDiscount = unityDiscount
                }
            }
        })
        return unityDiscount
    }

    // funcao para setar o desconto total de cada item multiplicando a quantidade dele, retorna o valor
    function calcTotalDiscount(id) {
        let totalDiscount = 0
        cart.map(item => {
            if (item.id == id) {
                {
                    item.salePrice
                    ? totalDiscount = (item.price - item.salePrice) * item.qty
                    : totalDiscount = totalDiscount
                }
            }
        })
        return totalDiscount
    }

    // funcao para setar o valor total de cada item multiplicando a quantidade dele, retorna o valor
    function calcTotalPrice(id) {
        let totalPrice = 0
        cart.map(item => {
            if (item.id == id) {
                {
                    item.salePrice
                    ? totalPrice = totalPrice + (item.salePrice * item.qty)
                    : totalPrice = totalPrice + (item.price * item.qty)
                }
            }
        })
        return totalPrice
    }


    function postItemOrder(order) {
        let i = 0
        localStorageRemoveOrder()
        return cart.map(function (item) {
            setTimeout(function () {
                api.post("/itemsOrder", {
                    productsDTO: { id: item.id },
                    compositeKey: { orderDTO: order, idItem: ++i },
                    quantity: setQtyItem(item.id),
                    unityDiscount: calcUnityDiscount(item.id),
                    totalDiscount: calcTotalDiscount(item.id),
                    totalPrice: calcTotalPrice(item.id)
                }).then(result => {
                    if (i == cart.length) {
                        window.location.href = "/success"
                    }
                    console.log(result)
                }).catch(err => { console.log("Erro ao gravar item" + err) });
            }, 1
            )
        })
    }
    function goToSucces() {
        postOrder()
        alert("Pedido criado com sucesso!!")
    }

    useEffect(() => {
        getFlagByid(getPayments)

        setOrder(initial)


    }, [])

    function getFlagByid(callback) {


        api.get(`/flags/${order.card.flag.id}`).then((result) => {
            console.log(order)

            initial = { ...initial, card: { ...initial.card, flag: result.data } }
            console.log(order)
            setOrder(initial)

        }).catch((err) => {

            console.log("Falha ao consumir api" + err)
        })

        setTimeout(() => { callback() }, 1)
    }
    function getPayments() {
        api.get(`/payments/${order.payment.id}`).then((result) => {

            console.log(order)
            initial = { ...initial, payment: result.data }
            console.log(order)
            setOrder(initial)



        }).catch((err) => { console.log("Falha ao consumir api" + err) })

    }
    function localStorageRemoveOrder() {
        localStorage.removeItem('order')
        localStorage.removeItem('total')
        localStorage.removeItem('qtyCart')
        localStorage.removeItem('cart')
        localStorage.removeItem('discount')
        localStorage.removeItem('subTotal')
    }


    // funcao que soma o valor total do pedido e retorna valor
    function somar() {
        let valor = 0
        if (cart) {
            cart.map(product => {
                {
                    product.salePrice
                        ? valor = valor + (product.salePrice * product.qty)
                        : valor = valor + (product.price * product.qty)
                }
            })
        }
        return valor
    }

    // funcao que conta a quantidade de itens e retorna o numero total
    function calcularItens() {
        let qty = 0
        if (cart) {
            cart.map(product => {
                qty = qty + product.qty
            })
        }
        return qty
    }

    // funcao que soma a quantidade de desconto total da compra e 
    function calcularDescontos() {
        let discount = 0
        if (cart) {
            cart.map(product => {
                {
                    product.salePrice
                    ? discount = discount + ((product.price - product.salePrice) * product.qty)
                    : discount = discount
                }
            })
        }
        return discount
    }

    function somarSubTotal() {
        let sub = 0
        if (cart) {
            cart.map(product => {
                
                 sub = sub + (product.price * product.qty)
                
            })
        }
        return sub
    }


    console.log(order)
    function postOrder() {

        api.post(`/orders`, {
            ...order,
            amount: somar(),
            qtyTotal: calcularItens(),
            totalDiscounts: calcularDescontos(),
            card: { ...order.card, dueDate: "2021-12-10" }
        }).then(response => {

            localStorage.setItem('idOrderLastCreated', response.data.id)
            let order = response.data
            postItemOrder(order)


        }).catch(error => { console.log("Erro ao consumir api de post order" + error) })

    }

    console.log(order)

    return (
        <>
            <h1>RESUMO DO PEDIDO</h1>


            <div className="container-fluid container-principal">

                <div className="row linha-geral justify-content-between">

                    <ul className="container col-12 col-lg-6 mx-0 d-flex flex-column">
                        <h4>Itens</h4>

                        <ProductSuccessOrder desconto={calcularDescontos} total={somar} sub={somarSubTotal} frete={150} />


                    </ul>

                    <div className="container col-12 col-lg-5 mx-0">
                        <OrderInfo titulo="Pagamento" primeiraLinha={order.card.flag.description + " " + order.payment.description} segundaLinha="" terceiraLinha={order.payment.installments} />
                        <OrderInfo titulo="Endereço de entrega" primeiraLinha={order.address.street + ", " + order.address.number + "-" + order.address.district + ", " + order.address.city} segundaLinha={order.address.complement} terceiraLinha={order.address.reference} />
                    </div>

                </div>

                <div className="d-flex justify-content-between">
                    <Button navigation route="/checkout" class="btn-retorno align-self-center" label="voltar" />
                    <Button onclick={goToSucces} class="btn-comprar " label="Finalizar" />
                </div>



            </div>
        </>
    );
}

export default OrderSummaryPage