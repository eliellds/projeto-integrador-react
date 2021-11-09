import React from "react";
import './Catalog.css';
import Chas from '../../assets/images/cards/chas-schumacher-glamour.jpg'
import CardProduct from "../../components/macro/Cards/Products/CardProduct";
import Button from "../../components/micro/Button/Button";

export default function Catalog(props) {

    return (
        <>
            <div className="row justify-content-center mb-3 p-0 mx-0">
                <h1 className="categoria_nome mb-2 mx-0 col-12">Cozinha</h1>
                <div className="col-9 linha-divisoria "></div>
            </div>

            <form action="" className="form-filter row justify-content-md-end justify-content-center mb-3">
                <label for="filtro" className="col-md-2 p-0 m-0  col-8">Ordenar por: </label>
                <select name="filtro" className="col-md-2 col-8" id="filtro">
                    <option value="default">Selecione o filtro</option>
                    <option value="maior-preco">Maior Valor</option>
                    <option value="menor-preco">Menor Valor</option>
                    <option value="ofertas">Maior desconto</option>
                    <option value="mais-antigo">Mais Antigo</option>
                    <option value="mais-novo">Mais Novo</option>


                </select>
            </form>

            <div className="container container-cards my-4">

                <ul className="row lista-cards catalogo tamanho mb-3">

                    <CardProduct nome="Vintage Máquina De Escrever Portátil Remington silencioso"
                        ano="1930" precoDe="111,99" precoPor="100,00" vezes={10} parcelas="10,00">

                        <a href="./produto.html" className="">
                            <img src={Chas} />
                        </a>

                    </CardProduct>

                    <CardProduct nome="Vintage Máquina De Escrever Portátil Remington silencioso"
                        ano="1930" precoDe="111,99" precoPor="100,00" vezes={10} parcelas="10,00">

                        <a href="./produto.html" className="">
                            <img src={Chas} />
                        </a>

                    </CardProduct>

                    <CardProduct nome="Vintage Máquina De Escrever Portátil Remington silencioso"
                        ano="1930" precoDe="111,99" precoPor="100,00" vezes={10} parcelas="10,00">

                        <a href="./produto.html" className="">
                            <img src={Chas} />
                        </a>

                    </CardProduct>

                    <CardProduct nome="Vintage Máquina De Escrever Portátil Remington silencioso"
                        ano="1930" precoDe="111,99" precoPor="100,00" vezes={10} parcelas="10,00">

                        <a href="./produto.html" className="">
                            <img src={Chas} />
                        </a>

                    </CardProduct>

                    <CardProduct nome="Vintage Máquina De Escrever Portátil Remington silencioso"
                        ano="1930" precoDe="111,99" precoPor="100,00" vezes={10} parcelas="10,00">

                        <a href="./produto.html" className="">
                            <img src={Chas} />
                        </a>

                    </CardProduct>

                    <CardProduct nome="Vintage Máquina De Escrever Portátil Remington silencioso"
                        ano="1930" precoDe="111,99" precoPor="100,00" vezes={10} parcelas="10,00">

                        <a href="./produto.html" className="">
                            <img src={Chas} />
                        </a>

                    </CardProduct>

                    <CardProduct nome="Vintage Máquina De Escrever Portátil Remington silencioso"
                        ano="1930" precoDe="111,99" precoPor="100,00" vezes={10} parcelas="10,00">

                        <a href="./produto.html" className="">
                            <img src={Chas} />
                        </a>

                    </CardProduct>

                    <CardProduct nome="Vintage Máquina De Escrever Portátil Remington silencioso"
                        ano="1930" precoDe="111,99" precoPor="100,00" vezes={10} parcelas="10,00">

                        <a href="./produto.html" className="">
                            <img src={Chas} />
                        </a>

                    </CardProduct>

                    <CardProduct nome="Vintage Máquina De Escrever Portátil Remington silencioso"
                        ano="1930" precoDe="111,99" precoPor="100,00" vezes={10} parcelas="10,00">

                        <a href="./produto.html" className="">
                            <img src={Chas} />
                        </a>

                    </CardProduct>

                    <CardProduct nome="Vintage Máquina De Escrever Portátil Remington silencioso"
                        ano="1930" precoDe="111,99" precoPor="100,00" vezes={10} parcelas="10,00">

                        <a href="./produto.html" className="">
                            <img src={Chas} />
                        </a>

                    </CardProduct>

                </ul>

            </div>

            <div className="ver-mais row justify-content-center tamanho pb-3">
                <Button route="" class="btn-ver-mais" label="VER MAIS"/>
            </div>
        </>
    )

}