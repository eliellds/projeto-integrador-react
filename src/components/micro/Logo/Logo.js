import React from "react";
import "./Logo.css";
import Logo from '../../../assets/images/headers/vl.png'
import Logo2 from '../../../assets/images/headers/vl.png'

export default function Logotipo(props) {

    return (
        <>
            <div className="titulo col-lg-3 col-md-8 col-sm-7 col-4 justify-content-center">
                <h1>
                    <a href="./" className="logo-marca" title="Velho Luxo">
                        <img className="logo d-sm-block d-none" alt="Velho Luxo"
                            src={Logo} />
                        <img className="logo-2 d-block d-sm-none" alt="Velho Luxo"
                            src={Logo2} />
                    </a>
                </h1>
            </div>
        </>
    )

}