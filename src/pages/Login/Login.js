import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css'
import FormDefault from '../../components/macro/Forms/FormDefault/FormDefault'
import FormLogin from '../../components/macro/Forms/FormLogin/FormLogin';
import { useHistory } from 'react-router';

function Login(props) {

    return(
        <>
            <main className="conatiner-fluid custom-container-login py-4">
                <FormDefault title="Faça seu Login" action="/" className="custom-form-box mx-3 mx-sm-1 mx-lg-4 px-5 px-sm-1 px-lg-4">

                   <FormLogin/>

                </FormDefault>
            </main>
        </>
    )
}
export default Login