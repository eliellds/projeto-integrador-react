import React, { useState, useEffect } from "react";
import './Sales.css';
import SelectByFilter from "../../components/micro/Forms/Select/SelectByFilter";
import ListProductsCatalogy from "../../components/macro/listProducts/ListProductsCatalogy";
import H1 from "../../components/micro/Title/H1";
import api from "../../services/api";

export default function Sales(props) {

    const [products, setProducts] = useState()
    const [filter, setFilter] = useState([
        { id: 1, subjectDescription: "Menor Valor" },
        { id: 2, subjectDescription: "Maior Valor" },
        { id: 3, subjectDescription: "Maior Desconto" },
        // { id: 4, subjectDescription: "Mais Antigo" },
        // { id: 5, subjectDescription: "Mais Novo" },
    ])
    const [renderList, setRenderList] = useState(<ListProductsCatalogy products={products} />)

    function renderProduct() {
        api
            .get("/products/offers")
            .then((response) => {
                setProducts(response.data)
                setRenderList(<ListProductsCatalogy products={response.data} />)
            })
            .catch((err) => {
                console.error("Erro ao consumir api de promoções" + err);

            });
    }

    useEffect(() => {
        renderProduct()
    }, []);

    // Preço menor para o maior
    function filterAsc() {
        var productTemp = products
        productTemp.sort(function (a, b) {
            if (a.price < b.price) {
                return 1
            }
            if (a.price > b.price) {
                return -1
            }
        })

        setProducts(productTemp)
        console.log(products)
    }

    // Preço maior para o menor
    function filterDesc() {
        var productTemp = products
        productTemp.sort(function (a, b) {
            if (a.price > b.price) {
                return 1
            }
            if (a.price < b.price) {
                return -1
            }
        })
        setProducts(productTemp)
        console.log(products)
    }

    // Promoções
    function filterSale() {
        var productTemp = products
        productTemp.sort(function (a, b) {
            if (a.salePrice < b.salePrice) {
                return 1
            }
            if (a.salePrice > b.salePrice) {
                return -1
            }
        })
        setProducts(productTemp)
        console.log(products)
    }

    function setProductBy(e) {

        if (e == 1) {
            filterDesc()
            return setRenderList(<ListProductsCatalogy products={products} />)

        } else if (e == 2) {

            filterAsc()
            return setRenderList(<ListProductsCatalogy products={products} />)
        } else if (e == 3) {

            filterSale()
            return setRenderList(<ListProductsCatalogy products={products} />)

        } else {
            renderProduct()
            return setRenderList(<ListProductsCatalogy products={products} />)
        }
        // } else if (filter.id == 4){

        // } else if (filter.id == 5){

        // }
    }

    // console.log(filter)


    return (
        <>
            <div class="container mt-2">

                <div class="row justify-content-center mb-3 p-0 mx-0">
                    {/* <!-- nome da categoria --> */}
                    <H1 h1="Promoções" />
                    <div class="col-9 linha-divisoria "></div>
                </div>

                <form action="" class="row justify-content-md-end justify-content-center mb-3">
                    <div class="col-md-3 p-0 m-0  col-8">
                        <SelectByFilter label="Ordenar por: " options={filter} change={e => setProductBy(e.target.value)} default="Ordernar:" />
                    </div>

                </form>

            </div>

            {/* <!-- Inicio lista cards produtos catalogo--> */}
            <div className="container cont ainer-cards my-4">
                {renderList}
            </div>

            {/* <div className="ver-mais row justify-content-center tamanho pb-3">
            <a href="" className="btn-ver-mais col-6 mb-3">VER MAIS</a>
        </div> */}

        </>
    )

}