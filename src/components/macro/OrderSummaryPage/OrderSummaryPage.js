import React, { useEffect, useState } from "react";
import OrderInfo from '../../micro/productsSucess/orderInfo'
import Button from "../../micro/Button/Button"
import "./OrderSummaryPage.css"
import api from "../../../services/api";
import ProductSuccessOrder from "../../micro/productsSucess/productSuccessOrder";

let initial = JSON.parse(localStorage.getItem('order'))
function OrderSummaryPage(props) {

    const[order, setOrder] = useState(initial)
    
    

    useEffect(() =>{
        getFlagByid( getPayments)
       
        setOrder(initial)
        
    },[])

    function getFlagByid(callback){
        

        api.get(`/flags/${order.card.flag.id}`).then((result) => {
            console.log(order)

            initial = {...initial,card:{...initial.card, flag:result.data }}
            console.log(order) 
            setOrder(initial)
            
        }).catch((err) => {console.log("Falha ao consumir api"+err)})
        
        setTimeout( ()=>{callback()},1 )
    }
    function getPayments(){
        api.get(`/payments/${order.payment.id}`).then((result) => {
            console.log(order)
            initial = {...initial, payment:result.data }
            console.log(order)
            setOrder(initial)
        }).catch((err) => {console.log("Falha ao consumir api"+err)})

    }

    console.log(order)



    return (
        <>
            <h1>RESUMO DO PEDIDO</h1>

          
            <div className="container-fluid container-principal">
                
                <div className="row linha-geral justify-content-between">
                
                    <ul className="container col-12 col-lg-6 mx-0 d-flex flex-column">
                    <h4>Itens</h4>
                        
                        <ProductSuccessOrder frete={150}/>
                   

                    </ul>

                    <div className="container col-12 col-lg-5 mx-0">
                        <OrderInfo titulo="Pagamento" primeiraLinha={order.card.flag.description +" "+ order.payment.description} segundaLinha={order.card.cardNumber} terceiraLinha={order.payment.installments}/>
                        <OrderInfo titulo="Endereço de entrega" primeiraLinha="Casa" segundaLinha="Travessa Sinhá Moça, 120- Jardim da Conquista, São Paulo - SP" terceiraLinha="Próximo ao AMA"/>
                    </div>

                </div>

            <div className="d-flex justify-content-between">
                <Button navigation route="/checkout" class="btn-retorno align-self-center" label="voltar"/>
                <Button navigation route="/success" class="btn-comprar" label="Finalizar"/>
            </div>



            </div>
        </>
    );
}

export default OrderSummaryPage;