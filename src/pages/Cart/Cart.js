import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react'
import './Cart.css'
import CartItemsComp from '../../components/macro/CartItemsComp/CartItemsComp';



function Cart(props) {

    const [login, setLogin] = useState(!localStorage.getItem("user"));

    const changeState = () => {
        if (login) {
            if (localStorage.getItem("user")) {
                setLogin(false);
            }
        }
    }

    return (
        <>
            <CartItemsComp click={changeState} logged={login} />
        </>
    )
}

export default Cart