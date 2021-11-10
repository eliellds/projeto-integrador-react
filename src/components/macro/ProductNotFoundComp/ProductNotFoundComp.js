import React from "react";
import "./ProductNotFoundComp.css"

function ProductNotFoundComp(props) {
    return (
        <>
            <div className="notfound">
                    <p>O produto "<span>{props.search}"</span> não foi encontrado,<br/> por favor tente usar palavras chaves como:</p>
                    <ul>

                        <li>Louças antigas</li>
                        <li>Cozinha</li>
                        <li>Armário real</li>

                    </ul>
            </div>
            <div className="space"> <hr/> </div>
        </>
    );
}
export default ProductNotFoundComp;