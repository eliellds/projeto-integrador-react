import React, {useState} from "react";
import Sacola from "../../../assets/images/headers/sacola.png"
import "./Bag.css"

function Bag(props) {
    const[qtyCart, setQty]  = useState(JSON.parse(localStorage.getItem('qtyCart')))

    function setQtyCart() {
        return qtyCart
    }

    return (
        <>
            <div className="login-button-header sacola col-2 col-sm-1">
                <a href="/cart" className="perfil-bloco">
                    <div className="bag-item">{qtyCart}</div>
                    <img className="login-imagem sacola-imagem" src={Sacola} />
                    <div className="perfil-nome">Sacola</div>
                </a>
            </div>
        </>
    )

}

export default Bag