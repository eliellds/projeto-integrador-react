import React from 'react'
import './Home.css'
import Banners from '../../components/macro/Banners/Banner'
import ListProduct from '../../components/macro/Cards/Products/CardProduct'
import Imagem from '../../assets/images/products/BandeijaTurca.webp'
import Loucas from "../../assets/images/products/loucasPortuguesas.jpg"
import Caixa from "../../assets/images/products/caixaRegistradora.png"
function Home(props) {

    return (
        <>

            <Banners />
            <h2 className="home-titles">Promoções</h2>

            {/* <!-- Inicio lista cards produtos promocoes--> */}
            <div className="container container-cards">
                <ul className="row justify-content-md-between justify-content-sm-center "> 
                
                <ListProduct>
                <img src={Imagem}/>
                </ListProduct>
                <ListProduct><img src={Imagem}/></ListProduct>
                <ListProduct><img src={Imagem}/></ListProduct>
                <ListProduct><img src={Imagem}/></ListProduct>
                <ListProduct><img src={Imagem}/></ListProduct>
                {/* <ListProduct><img src={Imagem}/></ListProduct> */}

      
                </ul>

             
             

            </div>
            {/* <!-- Fim lista cards produtos promocoes --> */}


            {/* <!-- INÍCIO DESTAQUES --> */}

            <h2 className="mt-3 home-titles">Destaques</h2>

            <section className="container-fluid">

                <div className="row custom-section mb-5 justify-content-center">

                    <div className="col-md-5 col-12 custom-section-item">

                        <img src={Caixa} alt="Caixa Registradora" />

                    </div>

                    <div className="col-md-5 col-12 custom-section-item">

                        <h6>Caixa registradora <br /> (1932)</h6>
                        <p>R$ 8520,00</p>
                        <button> Comprar</button>

                    </div>

                    <div className="col-md-5 col-12 custom-section-item">

                        <h6>Louças Portuguesas <br />(1889)</h6>
                        <p>R$ 2520,00</p>
                        <button>Comprar</button>

                    </div>

                    <div className="col-md-5 col-12 custom-section-item">

                        <img src={Loucas}alt="Louças Portuguesas" />

                    </div>

                </div>

            </section>

            {/* <!-- FINAL  DESTAQUES --> */}

            <h2>Novidades</h2>

            {/* <!-- Inicio lista cards produtos novidades --> */}
            <div className="container container-cards">

                <ul className="row row justify-content-md-between justify-content-sm-center mb-5">

                <ListProduct>
                <img src={Imagem}/>
                </ListProduct>
                <ListProduct><img src={Imagem}/></ListProduct>
                <ListProduct><img src={Imagem}/></ListProduct>
                <ListProduct><img src={Imagem}/></ListProduct>
                <ListProduct><img src={Imagem}/></ListProduct>
                </ul>

            </div>
        </>
    )
}

export default Home