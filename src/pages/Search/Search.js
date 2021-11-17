import React, { useState, useEffect } from "react";
import './Search.css';
import Select from "../../components/micro/Forms/Select/Select";
import CardProduct from "../../components/macro/Cards/Products/CardProduct";
import SearchInfo from "../../components/micro/SearchInfo/SearchInfo";
import api from "../../services/api";
import ListProductsCatalogy from "../../components/macro/listProducts/ListProductsCatalogy";

export default function Search(props) {
    const text = props.match.params.text;
    console.log(props)

    const [search, setSearch] = useState()

    useEffect(() => {
        api
            .get("/search?description=" + text)
            .then((response) => {
                setSearch(response.data)
                console.log(response)
            })
            .catch((err) => {
                console.error("Erro ao consumir api de search" + err);
            });
    }, []);

    console.log(search)

    // const products = [{
    //     id: "1",
    //     salePrice: "300",
    //     price: "200",
    //     product: "teste",
    //     year: "2021",
    // }]

    // const products = props.products || []

    // function image(image) {

    //     var imgSrc = require(`../../assets/images/products/${image}`);

    //     return imgSrc.default
    // }

    // function listProducts() {
    //     return products.map(product => {
    //         console.log(products)
    //         return <>
    //             <CardProduct
    //                 id={product.id}
    //                 image={product.image}
    //                 product={product.product}
    //                 year={product.year}
    //                 price={product.price}
    //                 salePrice={product.salePrice}

    //             />
    //         </>
    //     })
    // }

    // const posts = [
    //     { id: "1", price: 1258.86, salePrice: null, sales: null },
    //     { id: '2', name: 'This next post is about Preact' },
    //     { id: '3', name: 'We have yet another React post!' },
    //     { id: '4', name: 'This is the fourth and final post' },
    // ];

    // function teste() {
    //     return posts.map((props) => (
    //         <li key={props.id}>{props.name}{props.price}</li>
    //     ))
    // }


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
                        {/* {teste()} */}
                        {/* {listProducts()} */}
                        {/* <ListProductsCatalogy products={search} /> */}

                    </ul>

                </div>

            </section>
        </>

    )

}