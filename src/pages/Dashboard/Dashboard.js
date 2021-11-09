import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Dashboard.css'
import AsideMenu from '../../components/macro/AsideMenu/AsideMenu';

// import Address from '../../components/macro/Forms/Address/AddressForm';
// import FormUser from '../../components/macro/Forms/FormUser/FormUser';
// import MeusPedidos from '../../components/macro/MeusPedidos/MeusPedidos';


function Dashboard(props) {

    return (
        <>
            <main class="conatiner-fluid custom-container py-5">

                <div class="row row-correction">
                    <AsideMenu/>
                   
                    <div class="row d-flex justify-content-center col-md-9 col-12">

                        {/* <MeusPedidos/>*/}
                        {/* <Address/> */}
                        {/* <FormUser/> */}

                    </div>
                </div>
            </main>
        </>
    )
}

export default Dashboard