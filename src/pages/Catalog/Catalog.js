import React, { useEffect, useState } from "react";
import './Catalog.css';
import ListProductsCatalogy from "../../components/macro/listProducts/ListProductsCatalogy";
import Button from "../../components/micro/Button/Button";
import H1 from "../../components/micro/Title/H1";
import api from "../../services/api";
import SelectByFilter from "../../components/micro/Forms/Select/SelectByFilter";

export default function Catalog(props) {

    const category = props.match.params.category;
    // console.log(category);
    const [products, setProducts] = useState()

    function renderProduct() {
        api
            .get("/products/category/" + category)
            .then((response) => {setProducts(response.data)
                setRenderList(<ListProductsCatalogy products={response.data} />)
            })
            .catch((err) => {
                console.error("Erro ao consumir api de products" + err);

            });
    }
    useEffect(() => {
        renderProduct()
     

    }, []);

    const [renderList,setRenderList] = useState(<ListProductsCatalogy products={products} />)

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

    const [filter, setFilter] = useState([
        { id: 1, subjectDescription: "Menor Valor" },
        { id: 2, subjectDescription: "Maior Valor" },
        { id: 3, subjectDescription: "Maior Desconto" },
        { id: 4, subjectDescription: "Mais Antigo" },
        { id: 5, subjectDescription: "Mais Novo" },
    ])

    function setProductBy(e) {

        if (e == 1) {
            filterDesc()
           return setRenderList(<ListProductsCatalogy products={products} />)

        }else if(e == 2){
     
            filterAsc()
            return setRenderList(<ListProductsCatalogy products={products} />)
        }else if (e == 3) {
            
            filterSale()
            return setRenderList(<ListProductsCatalogy products={products} />)
            
        }else{
            renderProduct()
            return setRenderList(<ListProductsCatalogy products={products} />)
        }
        // } else if (filter.id == 4){

        // } else if (filter.id == 5){

        // }
    }

    console.log(filter)
    
    return (
        <>
            <div className="row justify-content-center mb-3 p-0 mx-0">
                <H1 h1={`${category}`} />
                <div className="col-9 linha-divisoria "></div>
            </div>

            <form action="" class="row justify-content-md-end justify-content-center mb-3">
                <div className="col-md-3 col-6 mx-4" >
                    {/* <Filter></Filter> */}
                    <SelectByFilter label="Ordenar por: " options={filter} change={e => setProductBy(e.target.value)} default="Ordernar:" />
                </div>
    
            </form>

            <div className="container container-cards my-4">
                {renderList}
            </div>

            <div className="ver-mais row justify-content-center tamanho pb-3">
                {/* <Button route="" class="btn-ver-mais" label="VER MAIS" /> */}
            </div>
        </>
    )
}