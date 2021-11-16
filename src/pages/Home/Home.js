import React, { useState, useEffect} from 'react'
import './Home.css'
import ListProducts from '../../components/macro/listProducts/ListProductsCarroussel'
import Banners from '../../components/macro/Banners/Banner'
import Emphasis from '../../components/macro/Cards/Products/CardProductEmphasis'
import api from '../../services/api'

function Home(props) {
    const[offers, setOffers] = useState()
    useEffect(() => {
        api.get("/products/offers").then((response) => {setOffers(response.data)
        console.log(response.data)
        }).catch((error) => console.log("Erro ao carregar api de offers"+error))
    },[])
    
    return (
        <>

            <Banners />
            <h2 className="home-titles mt-4">Promoções</h2>

            {/* <!-- Inicio lista cards produtos promocoes--> */}

               
            <ListProducts products ={offers}/>
     
            {/* <!-- Fim lista cards produtos promocoes --> */}


            {/* <!-- INÍCIO DESTAQUES --> */}

            <h2 className="mt-3 home-titles mb-4">Destaques</h2>

            <section className="container-fluid">

                <div className="row custom-section mb-5 justify-content-center">
                    <Emphasis variable image="caixaRegistradora.png" price="2520,00" name="Caixa Registradora" year="1962" id={1}/>
                    <Emphasis  image="loucasPortuguesas.jpg" price="25120,00" name="Louças Portuguesas" year="1889" id={2}/> 
                </div>

            </section>

            {/* <!-- FINAL  DESTAQUES --> */}

            <h2 id="novidades">Novidades</h2>

            {/* <!-- Inicio lista cards produtos novidades --> */}
            <div className="container container-cards">
                <ListProducts/>
          

            </div>
        </>
    )
}

export default Home