import React, { useEffect, useState } from "react";
import './Catalog.css';
import ListProductsCatalogy from "../../components/macro/listProducts/ListProductsCatalogy";
import Button from "../../components/micro/Button/Button";
import Select from "../../components/micro/Forms/Select/Select";
import H1 from "../../components/micro/Title/H1";
import api from "../../services/api";

export default function Catalog(props) {

    const category = props.match.params.category;
    console.log(props);

    const [products, setProducts] = useState()

    // const categoryId =

    // function setCategory() {
    //     switch (newLocation) {
    //         case "1":
    //             return (
    //             )
    //             break;
    //         case "2":
    //             return (
                    
    //             )
    //             break;
    //         case "3":
    //             return (
                    
    //             )
    //             break;
    //         case "4":
    //             return (
                    
    //             )
    //             break;
    //         default:
    //             return (
                    
    //             )
    //     }
    // }
    
    useEffect(() => {
        api
            .get("/catalog/Quarto")
            .then((response) => setProducts(response.data))
            .catch((err) => {
                console.error("Erro ao consumir api de products" + err);
            });
    }, []);

    const filter = [
        { id: 1, subjectDescription: "Menor Valor" },
        { id: 2, subjectDescription: "Maior Valor" },
        { id: 3, subjectDescription: "Maior Desconto" },
        { id: 4, subjectDescription: "Mais Antigo" },
        { id: 5, subjectDescription: "Mais Novo" },
    ]

    return (
        <>
            <div className="row justify-content-center mb-3 p-0 mx-0">
                <H1 h1={`${category}`} />
                <div className="col-9 linha-divisoria "></div>
            </div>

            <div className="row row-correction form-filter">
                <div className="col-md-3 col-6 m-4" >
                    <Select label="Ordenar por: " default="Selecione o Filtro" options={filter} />
                </div>

            </div>

            <div className="container container-cards my-4">

                <ListProductsCatalogy products={products} />


            </div>

            <div className="ver-mais row justify-content-center tamanho pb-3">
                {/* <Button route="" class="btn-ver-mais" label="VER MAIS" /> */}
            </div>
        </>
    )

}