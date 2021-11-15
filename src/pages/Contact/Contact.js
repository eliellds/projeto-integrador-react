import React from 'react';
import { useEffect, useState } from 'react';
import api from '../../services/api'
import FormContact from '../../components/macro/Forms/FormContact/FormContact';

function Contact(props) {
    const [options, setOptions] = useState()
    const [contact, setContact] = useState();

    useEffect(() => {
        api.get("/subjects").then((response) => setOptions(response.data)).catch((err) => {
            console.error("Erro ao consumir api de subjects" + err)
        })
    }, [])

    useEffect(() => {
        api.post("/contact", {
            name:props.name,
            subject: props.subject,
            phoneNumber: props.phoneNumber,
            email: props.email,
            content: props.content,
        })
            .then((response) => setContact(response.data))
            .catch((err) => {
                console.error("Erro ao realizar Post de contato" + err)
            });
    }, []);

    return <>

        <section className="container-fluid container-form px-sm-5 my-3 py-3">

            <FormContact options={options} contact={contact} />
        </section>

    </>
}
export default Contact;