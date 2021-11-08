import React from "react";
import './Category.css'
import Cozinha from "../../../assets/images/category/loucasPortuguesas.jpg"

function CategoryRight(props) {
    return (
        <>
            <section className="container-fluid">

                <div className="row custom-section justify-content-center">

                    <div class="col-md-5 col-12 custom-section-item tres">

                        <a href="./catalogo.html"><button >Cozinha</button></a>
                        <h6>Louças, mesas, armários <br/> e muito mais para sua cozinha.</h6>

                    </div>

                    <div class="col-md-5 col-12 custom-section-item quatro">

                        <img src={Cozinha} alt="Louças Portuguesas"/>

                    </div>

                </div>

            </section>
        </>
    )
}

export default CategoryRight