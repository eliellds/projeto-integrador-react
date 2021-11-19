import React from "react";

function orderInfo(props) {
    return (
        <>
            <div class="row">
                <ul class="lista-pagamento col-12 mx-0 d-flex flex-column">

                    <h4>{props.titulo}</h4>

                    <li class="row pagamento-lista">
                        <div class="atributos tipo-pagamento">{props.primeiraLinha} {props.primeiraLinha1} {props.primeiraLinha2}</div>
                        <div class="atributos numero-cartao">{props.segundaLinha} {props.segundaLinha1} {props.segundaLinha2}</div>
                        <div class="atributos tipo-pagamento">{props.terceiraLinha} {props.terceiraLinha1}</div>
                        <div class="atributos tipo-pagamento">{props.quartaLinha}</div>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default orderInfo;