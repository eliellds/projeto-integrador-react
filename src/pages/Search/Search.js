import React, {useState, useEffect} from "react";
import './Search.css';
import Chas from '../../assets/images/cards/chas-schumacher-glamour.jpg'
import Select from "../../components/micro/Forms/Select/Select";
import CardProduct from "../../components/macro/Cards/Products/CardProduct";
import SearchInfo from "../../components/micro/SearchInfo/SearchInfo";

export default function Search(props) {
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

    const precoDe = "2000"
    const precoPor = "1800"
    const ano = "1788"

    return (
        <>
            <section>
                <div class="container">
                    <div class="row">

                        <SearchInfo search="Estátua antiga" />
                        <div className="row row-correction form-filter">
                            <form   action="" className="col-12 col-sm-4 justify-content-md-end justify-content-center mb-3">
                            <Select default="Ordenar por: " options={filter}/>
                            </form>
                        </div>

                    </div>

                    <ul className="row lista-cards catalogo tamanho mb-3">

                        <CardProduct imagem={Chas} nome="Estátua antiga" precoDe={precoDe} precoPor={precoPor} ano={ano} />
                        <CardProduct imagem={Chas} nome="Estátua antiga" precoDe={precoDe} precoPor={precoPor} ano={ano} />
                        <CardProduct imagem={Chas} nome="Estátua antiga" precoDe={precoDe} precoPor={precoPor} ano={ano} />
                        <CardProduct imagem={Chas} nome="Estátua antiga" precoDe={precoDe} precoPor={precoPor} ano={ano} />
                        <CardProduct imagem={Chas} nome="Estátua antiga" precoDe={precoDe} precoPor={precoPor} ano={ano} />
                        <CardProduct imagem={Chas} nome="Estátua antiga" precoDe={precoDe} precoPor={precoPor} ano={ano} />
                        <CardProduct imagem={Chas} nome="Estátua antiga" precoDe={precoDe} precoPor={precoPor} ano={ano} />
                        <CardProduct imagem={Chas} nome="Estátua antiga" precoDe={precoDe} precoPor={precoPor} ano={ano} />
                        <CardProduct imagem={Chas} nome="Estátua antiga" precoDe={precoDe} precoPor={precoPor} ano={ano} />
                        <CardProduct imagem={Chas} nome="Estátua antiga" precoDe={precoDe} precoPor={precoPor} ano={ano} />


                    </ul>

                </div>

            </section>
        </>

    )

}