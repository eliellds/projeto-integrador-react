import React, { useState, useEffect} from 'react'
import './Home.css'
import ListProducts from '../../components/macro/listProducts/ListProductsCarroussel'
import Banners from '../../components/macro/Banners/Banner'
import Loucas from "../../assets/images/products/loucasPortuguesas.jpg"
import Caixa from "../../assets/images/products/caixaRegistradora.png"
import Emphasis from '../../components/macro/Cards/Products/CardProductEmphasis'
function Home(props) {
  
 

    return (
        <>

            <Banners />
            <h2 className="home-titles">Promoções</h2>

            {/* <!-- Inicio lista cards produtos promocoes--> */}

               
            <ListProducts/>
     
            {/* <!-- Fim lista cards produtos promocoes --> */}


            {/* <!-- INÍCIO DESTAQUES --> */}

            <h2 className="mt-3 home-titles">Destaques</h2>

            <section className="container-fluid">

                <div className="row custom-section mb-5 justify-content-center">
                    <Emphasis variable image="caixaRegistradora.png" price="2520,00" name="Caixa Registradora" year="1962" id={1}/>
                    <Emphasis  image="loucasPortuguesas.jpg" price="25120,00" name="Louças Portuguesas" year="1889" id={2}/> 
              
                </div>

            </section>

            {/* <!-- FINAL  DESTAQUES --> */}

            <h2>Novidades</h2>

            {/* <!-- Inicio lista cards produtos novidades --> */}
            <div className="container container-cards">
                <ListProducts/>
          

            </div>
        </>
    )
}

export default Home