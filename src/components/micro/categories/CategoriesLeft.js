import React from "react";
import './Category.css'
// import Quarto from "../../../assets/images/category/quarto.jpg"

function CategoryLeft(props) {
    return (
        <>
            <section className="container-fluid">

                <div className="row custom-section justify-content-center">

                    <div className="col-md-5 col-12 custom-section-item um ">

                        <img src={props.image} alt="Quarto antigo"/>

                    </div>

                    <div className="col-md-5 col-12 custom-section-item py-md-5 dois">

                        <a href="/catalog"><button className="px-4">{props.category}</button></a>
                        <h6>{props.description}</h6>

                    </div>

                </div>

            </section>
        </>
    )
}

export default CategoryLeft