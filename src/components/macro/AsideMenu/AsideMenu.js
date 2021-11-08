import React from "react";

function AsideMenu(props) {
    return (
        <>
            <div class="d-flex flex-column flex-shrink-0 p-3 bg-light col-md-3 col-12">
                <ul class="nav nav-pills flex-column mb-auto">
                    <li class="nav-item">
                        <a href="./meus-dados.html" class="nav-link">Meus Dados</a>
                    </li>

                    <li>
                        <a href="./enderecos.html" class="nav-link">Meus Endereços</a>
                    </li>

                    <li>
                        <a href="./meus-pedidos.html" class="nav-link"> Meus Pedidos</a>
                    </li>

                    <li>
                        <a href="./contato.html" class="nav-link">Ajuda</a>
                    </li>
                </ul>
            </div>

        </>
    )
}

export default AsideMenu