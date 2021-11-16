import React, { useState, useEffect } from "react";
import './Sales.css';
import Chas from '../../assets/images/cards/chas-schumacher-glamour.jpg'
import Select from "../../components/micro/Forms/Select/Select";
import ListProductsCatalogy from "../../components/macro/listProducts/ListProductsCatalogy";
import H1 from "../../components/micro/Title/H1";
import api from "../../services/api";

export default function Sales(props) {
    const filter = [
        {
            id:1 ,
            subjectDescription:"Maior Valor"

        },
        {
            id:2 ,
            subjectDescription:"Menor Valor"

        },
        {
            id:3 ,
            subjectDescription:"Maior Desconto"

        },
        {
            id:4 ,
            subjectDescription:"Mais Antigo"

        },
        {
            id:5 ,
            subjectDescription:"Mais Novo"

        },
    ]

    const [products, setProducts] = useState()

    useEffect(() => {
        api.get("/sales").then((response) => setProducts(response.data)).catch((err) => {
            console.error("Erro ao consumir api de subjects" + err)
        })
    }, [])

    console.log(products)

    return (
        <>

        {/* 10 por cento */}

        <div class="container mt-2">

            <div class="row justify-content-center mb-3 p-0 mx-0">
                {/* <!-- nome da categoria --> */}
                <H1 h1="Promoções"/> 
                <div class="col-9 linha-divisoria "></div>
            </div>

            <form action="" class="row justify-content-md-end justify-content-center mb-3">
                <div  class="col-md-3 p-0 m-0  col-8">
                <Select  label="Filtro :" default="filtro" options={filter} />
                </div>
               
            </form>

        </div>

        {/* <!-- Inicio lista cards produtos catalogo--> */}
        <div className="container cont ainer-cards my-4">

            <ListProductsCatalogy products={products}/>
           
        </div>

        <div className="ver-mais row justify-content-center tamanho pb-3">
            <a href="" className="btn-ver-mais col-6 mb-3">VER MAIS</a>
        </div>



        </>
    )

}