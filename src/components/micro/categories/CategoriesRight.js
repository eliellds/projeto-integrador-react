import React from "react";
import './Category.css'
import Button from "../Button/Button"
// import Cozinha from "../../../assets/images/category/loucasPortuguesas.jpg"

function CategoryRight(props) {
    return (
        <>
            <section className="container-fluid">

                <div className="row custom-section justify-content-center">

                    <div class="col-md-5 col-12 custom-section-item tres">
                        <Button label="Quarto" onclick="null" class="btn-categoria" navigation route="/catalog" />
                        <h6>{props.description}</h6>

                    </div>

                    <div class="col-md-5 col-12 custom-section-item quatro">

                        <img src={props.image} alt="Louças Portuguesas"/>

                    </div>

                </div>

            </section>
        </>
    )
}

export default CategoryRight