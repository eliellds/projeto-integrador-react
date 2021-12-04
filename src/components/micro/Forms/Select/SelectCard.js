
import React, { useEffect, useState } from 'react';
import api from '../../../../services/api';

function SelectCard(props) {
    const paymentMethod = props.paymentMethod || []
    const cart = JSON.parse(localStorage.getItem('cart'))


    const [freight, setFreight] = useState(0);

    function setRegion(state) {
        api.get("/deliveryDate/" + state)
            .then(res => {
                setFreight(res.data.deliveryPrice)
            })
            .catch(err => {
                console.error("Erro ao buscar endereço", err)
            })
    }

    function getAddress() {
        api.get(`/address/find/${props.id}`)
            .then(response => {
                setRegion(response.data.state)
            })
            .catch((err) => {
                console.log("Erro ao consumir api de endereços" + err)
            })
    }

    useEffect(() => {
        getAddress()
    }, [])

    function somar(initial) {

        let valor = initial
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

    function calcInstallments(installments) {
        var installmentsPrice = 0
        installmentsPrice = somar(freight) / installments

        return installmentsPrice
    }

    function getPaymentMethod() {
        return paymentMethod.map(
            option => {
                if (option.id == 3) {
                    return <option key={option.id} value={option.id}>{option.description} {option.installmentsPrice} {somar(freight).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</option>
                }

                if (option.id >= 4 && option.id < 13) {
                    return <option key={option.id} value={option.id}>{option.description} {option.installments + " x de "}{calcInstallments(option.installments).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</option>
                }
            })
    }


    return (
        <div className="input-container">
            <label>{props.label}</label>
            <select onChange={e => props.change(e)} className="form-input col-12">
                {getPaymentMethod()}
            </select>
        </div>
    )
}

export default SelectCard