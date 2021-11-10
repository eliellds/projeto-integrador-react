import React from "react";
import './Search.css';
import Chas from '../../assets/images/cards/chas-schumacher-glamour.jpg';
import Filter from "../../components/micro/Filter/Filter";
import CardProduct from "../../components/macro/Cards/Products/CardProduct";

export default function Search(props) {

    return (
        <>
            <section>
                <div class="container">
                    <div class="row">
                        <div class="container resultado col-6 col-xs-8 col-sm-7 col-md-8 col-lg-6 info-resultado mt-2">
                            <h2>Resultados para <span>{props.search}</span></h2>
                        </div>

                        <Filter/>

                    </div>

                    <CardProduct image={Chas} nome="Estátua antiga">
                    </CardProduct>

                </div>

            </section>
        </>

    )

}