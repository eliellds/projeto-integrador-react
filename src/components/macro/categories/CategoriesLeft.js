import React from "react";
import './Category.css'
import Quarto from "../../../assets/images/category/quarto.jpg"

function CategoryLeft(props) {
    return (
        <>
            <section className="container-fluid">

                <div className="row custom-section justify-content-center">

                    <div className="col-md-5 col-12 custom-section-item um ">

                        <img src={Quarto} alt="Quarto antigo"/>

                    </div>

                    <div className="col-md-5 col-12 custom-section-item py-md-5 dois">

                        <a href="./catalogo.html"><button className="px-4">Quarto</button></a>
                        <h6>Encontre armários, penteadeiras <br/>e objetos para decorar seu quarto.</h6>

                    </div>

                </div>

            </section>
        </>
    )
}

export default CategoryLeft