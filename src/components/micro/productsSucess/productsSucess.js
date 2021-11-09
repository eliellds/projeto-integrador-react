import React from "react";

function productSuccess(props) {
    return (
        <>
        
            <li class="row bloco-produto item-1">

                <div class="atributos tipo-atributo col-3 d-none d-sm-flex">Desc.:</div>
                <div class="atributos atributo-descricao col-12 col-sm-9">{props.produto}</div>

                <div class="atributos tipo-atributo col-3 d-none d-sm-flex">Valor:</div>
                <div class="atributos atributo-valor col-12 col-sm-9">{props.valorUni}</div>

                <div class="atributos tipo-atributo col-3 d-none d-sm-flex">Qtd.:</div>
                <div class="atributos atributo-qtd col-12 col-sm-9">{props.qtd}</div>
            </li>
        </>
    );
}

export default productSuccess;