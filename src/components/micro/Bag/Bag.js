import React from "react";
import Sacola from "../../../assets/images/headers/sacola.png"

function Bag(props) {
    return (
        <>
            <div className="login-button-header sacola col-2 col-sm-1">
                <a href="/cart" className="perfil-bloco">
                    <img className="login-imagem sacola-imagem" src={Sacola} />
                    <div className="perfil-nome">Sacola</div>
                </a>
            </div>
        </>
    )

}

export default Bag