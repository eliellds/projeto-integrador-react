import Button from '../../components/micro/Button/Button'
import React from 'react';
import Input from '../../components/micro/Forms/Input/Input';
import Select from '../../components/micro/Forms/Select/Select';
import { useEffect, useState } from 'react';
import api from '../../services/api'
import ModalComp from '../../components/micro/Modal/Modal';
import FormContact from '../../components/macro/Forms/FormContact/FormContact';
  

function Contact(props) {
    const [options, setOptions] = useState()

    useEffect(() =>{
        api.get("/subjects").then((response) => setOptions(response.data)).catch((err)=>{
            console.error("Erro ao consumir api de subjects"+err)
        })

    },[])

    return <>
    
        <section className="container-fluid container-form px-sm-5 my-3 py-3">
       
        <FormContact options={options}/>
        </section>
        
    </>
}
export default Contact;