import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Dashboard.css'
// import Address from '../../components/macro/Forms/Address/AddressForm';
// import FormUser from '../../components/macro/Forms/FormUser/FormUser';


function Dashboard(props) {

    return (
        <>
            <main class="conatiner-fluid custom-container py-5">

                <div class="row row-correction">

                    <div class="d-flex flex-column flex-shrink-0 p-3 bg-light col-md-3 col-12">
                        <ul class="nav nav-pills flex-column mb-auto">
                            <li class="nav-item">
                                <a href="./meus-dados.html" class="nav-link">Meus Dados</a>
                            </li>

                            <li>
                                <a href="./enderecos.html" class="nav-link active">Meus Endereços</a>
                            </li>

                            <li>
                                <a href="./meus-pedidos.html" class="nav-link"> Meus Pedidos</a>
                            </li>

                            <li>
                                <a href="./contato.html" class="nav-link">Ajuda</a>
                            </li>
                        </ul>
                    </div>

                    <div class="row d-flex justify-content-center col-md-9 col-12">

                        {/* <Address/> */}
                        {/* <FormUser/> */}

                    </div>
                </div>
            </main>
        </>
    )
}

export default Dashboard