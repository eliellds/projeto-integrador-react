import React, { useState, useEffect } from "react";
import './Search.css';
import Select from "../../components/micro/Forms/Select/Select";
import SearchInfo from "../../components/micro/SearchInfo/SearchInfo";
import api from "../../services/api";
import ListProductsCatalogy from "../../components/macro/listProducts/ListProductsCatalogy";
import ProductNotFoundComp from "../../components/macro/ProductNotFoundComp/ProductNotFoundComp";

export default function Search(props) {
    const text = props.match.params.text;
    console.log(props)

    const [search, setSearch] = useState()

    useEffect(() => {
        api
            .get("/search/product?description=" + text)
            .then((response) => {
                setSearch(response.data)
                // console.log(response)
            })
            .catch((err) => {
                console.error("Erro ao consumir api de search" + err);
            });
    }, []);

    // console.log(search)

    const filter = [
        {
            id: 1,
            subjectDescription: "Maior Valor"

        },
        {
            id: 2,
            subjectDescription: "Menor Valor"

        },
        {
            id: 3,
            subjectDescription: "Maior Desconto"

        },
        {
            id: 4,
            subjectDescription: "Mais Antigo"

        },
        {
            id: 5,
            subjectDescription: "Mais Novo"

        },
    ]

    function setTag() {
        if (search != 0){
            return (
                <ListProductsCatalogy products={search} />
            )

        } else {
            return (
                <ProductNotFoundComp search={text}/>
            )
        }
        
    }

    return (
        <>
            <section>
                <div class="container">
                    <div class="row">

                        <SearchInfo product={text} />
                        <div className="row row-correction form-filter">
                            <form action="" className="col-12 col-sm-4 justify-content-md-end justify-content-center mb-3">
                                <Select default="Ordenar por: " options={filter} />
                            </form>
                        </div>

                    </div>

                    <ul className="row lista-cards catalogo tamanho mb-3">

                        {setTag()}

                    </ul>

                </div>

            </section>
        </>

    )

}