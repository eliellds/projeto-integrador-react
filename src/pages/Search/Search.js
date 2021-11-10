import React from "react";
import './Search.css';
import Chas from '../../assets/images/cards/chas-schumacher-glamour.jpg'
import Select from "../../components/micro/Forms/Select/Select";
import CardProduct from "../../components/macro/Cards/Products/CardProduct";
import SearchInfo from "../../components/micro/SearchInfo/SearchInfo";

export default function Search(props) {

    return (
        <>
            <section>
                <div class="container">
                    <div class="row">

                        <SearchInfo search="Estátua antiga" />
                        <div className="row row-correction form-filter">
                            <form action="" className="col-12 col-sm-4 justify-content-md-end justify-content-center mb-3">

                                <Select label="Ordenar por: " default="filtro"/>

                            </form>
                        </div>

                    </div>

                    <ul className="row lista-cards catalogo tamanho mb-3">

                        <CardProduct imagem={Chas} nome="Estátua antiga" />
                        <CardProduct imagem={Chas} nome="Estátua antiga" />
                        <CardProduct imagem={Chas} nome="Estátua antiga" />
                        <CardProduct imagem={Chas} nome="Estátua antiga" />
                        <CardProduct imagem={Chas} nome="Estátua antiga" />
                        <CardProduct imagem={Chas} nome="Estátua antiga" />
                        <CardProduct imagem={Chas} nome="Estátua antiga" />
                        <CardProduct imagem={Chas} nome="Estátua antiga" />
                        <CardProduct imagem={Chas} nome="Estátua antiga" />
                        <CardProduct imagem={Chas} nome="Estátua antiga" />


                    </ul>

                </div>

            </section>
        </>

    )

}