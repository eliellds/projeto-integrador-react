import React, { useEffect, useState } from "react";
import OrderInfo from '../../micro/productsSucess/orderInfo'
import Button from "../../micro/Button/Button"
import "./OrderSummaryPage.css"
import api from "../../../services/api";
import ProductSuccessOrder from "../../micro/productsSucess/productSuccessOrder";
import Loading from "../../../assets/images/success/loading.gif"
import { Redirect } from "react-router-dom";


const cart = JSON.parse(localStorage.getItem('cart'))
const user = JSON.parse(localStorage.getItem('user'))
const crypto = require('crypto');
const alg = 'aes-256-ctr'
const pwd = 'qwertjose'

function OrderSummaryPage(props) {

    let initial = {
        ...JSON.parse(localStorage.getItem('order')),
        payment: {
            ...JSON.parse(localStorage.getItem('order')).payment,
            description: ""
        }
    } || {}


    const [success, setSuccess] = useState(false)
    const [back, setBack] = useState(false)

    function renderLoading() {
        return <img className="img-loading-btn" src={Loading} alt="Gerando pedido" />
    }

    function uncriptCard(cript) {
        var decipher = crypto.createDecipher(alg, pwd)
        var uncrypted = decipher.update(cript, 'hex', 'utf8')
        let c = ""
        for (let index = 0; index < uncrypted.length; index++) {

            if (index < uncrypted.length - 4) {
                c = c + "#"
            } else {
                c = c + uncrypted.charAt(index)
            }


        }
        return c
    }

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

    // função que calcula o valor das parcelas
    function calcInstallments() {

        let installmentsPrice = 0
        installmentsPrice = somar() / order.payment.installments
        installmentsPrice = installmentsPrice.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

        return installmentsPrice
    }

    function postItemOrder(order) {
        let i = 0
        return cart.map(function (item) {
            setTimeout(function () {
                api.post("/itemsOrder", {
                    productsDTO: { id: item.id },
                    compositeKey: { orderDTO: order, idItem: ++i },
                    quantity: item.qty,
                    unityDiscount: calcUnityDiscount(item.id),
                    totalDiscount: calcTotalDiscount(item.id),
                    totalPrice: calcTotalPrice(item.id)
                }).then(result => {
                    if (result.data.compositeKey.idItem == cart.length) {

                        setSuccess(true)
                        alert("Pedido gerado com sucesso!")
                        localStorageRemoveOrder()
                        // window.location.href = "/success"
                    }
                }).catch(err => {
                    console.log("Erro ao gravar item" + err)
                    setDisable(false)
                    setSuccess(false)
                });
            }, 20
            )
        })
    }

    function goToSucces() {
        postOrder()
    }

    useEffect(() => {
        window.scrollTo(0, 0);
        getFlagByid(getPayments)

        setOrder(initial)


    }, [])

    function getFlagByid(callback) {


        api.get(`/flags/${order.card.flag.id}`).then((result) => {

            initial = { ...initial, card: { ...initial.card, flag: result.data } }
            setOrder(initial)

        }).catch((err) => {

            console.log("Falha ao consumir api" + err)
        })

        setTimeout(() => { callback() }, 1)
    }

    function getPayments() {
        api.get(`/payments/${order.payment.id}`).then((result) => {

            initial = { ...initial, payment: result.data }
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
        let valor = 150
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

    // desabilita botão finalizar apos o click
    const [disable, setDisable] = React.useState(false);

    function postOrder() {

        setDisable(true)

        api.post(`/orders`, {
            ...order,
            address: { ...order.address, cep: order.address.cep.toString().replace(/[^0-9]/g, "") },
            amount: somar(),
            qtyTotal: calcularItens(),
            totalDiscounts: calcularDescontos(),
            card: { ...order.card, dueDate: "2021-12-10" },
            idStore: 1
        }).then(response => {

            localStorage.setItem('idOrderLastCreated', response.data.id)
            let order = response.data
            postItemOrder(order)


        }).catch(error => {
            console.log("Erro ao consumir api de post order" + error)
            setDisable(false)
        })

    }


    return (
        <>
            <h1>RESUMO DO PEDIDO</h1>


            <div className="container-fluid container-principal">

                <div className="row linha-geral justify-content-between">

                    <ul className="container col-12 col-lg-6 mx-0 d-flex flex-column">
                        <h4>Itens</h4>

                        <ProductSuccessOrder prazo={order.address.state} desconto={calcularDescontos} total={somar} sub={somarSubTotal} frete={150} />

                    </ul>

                    <div className="container col-12 col-lg-5 mx-0">

                        <OrderInfo titulo="Pagamento"
                            primeiraLinha={order.payment.description + " - " + order.card.flag.description}
                            segundaLinha={uncriptCard(order.card.cardNumber)}
                            terceiraLinha={order.payment?.installments >= 2 ? order.payment.installments + " x de" : order.payment.installments} terceiraLinha1={order.payment.installments >= 2 ? calcInstallments() : somar().toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                            quartaLinha={"Total: " + somar().toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} />

                        <OrderInfo titulo="Endereço de entrega"
                            primeiraLinha={order.address.street + ","} primeiraLinha1={order.address.number + "."} primeiraLinha2={"Comp: " + order.address.complement}
                            segundaLinha={order.address.district + " - "} segundaLinha1={order.address.city + " - "} segundaLinha2={order.address.state}
                            terceiraLinha={"CEP: " + order.address.cep} quartaLinha={"Referência: " + order.address.reference} />

                    </div>

                </div>

                <div className="d-flex justify-content-between">

                    <Button navigation route="/checkout" class="btn-retorno align-self-center" label="voltar" />
                    <Button onclick={goToSucces} disabled={disable} class="btn-comprar " label={disable ? renderLoading() : "Finalizar"} />

                </div>



            </div>
            {success
                ? <Redirect to={{ pathname: "/success", state: { ...order } }} />
                : ""
            }
        </>
    );
}

export default OrderSummaryPage