import React from "react";
import './Sales.css';
import Chas from '../../assets/images/cards/chas-schumacher-glamour.jpg'
import Select from "../../components/micro/Forms/Select/Select";
import ListProductsCatalogy from "../../components/macro/listProducts/ListProductsCatalogy";
import H1 from "../../components/micro/Title/H1";
export default function Sales(props) {
    const filter = [
        {
            id:1 ,
            subjectDescription:"Maior Valor"

        },
        {
            id:2 ,
            subjectDescription:"Menor Valor"

        },
        {
            id:3 ,
            subjectDescription:"Maior Desconto"

        },
        {
            id:4 ,
            subjectDescription:"Mais Antigo"

        },
        {
            id:5 ,
            subjectDescription:"Mais Novo"

        },
    ]

    const products = [
        {
            id: 1, imagem: "chas-schumacher-glamour.jpg", nome: "Vintage Máquina De Escrever Portátil Remington silencioso", ano: "1930",
            precoDe: "111,99", precoPor: "100,00", vezes: 10, parcelas: "10,00"
        },
        {
            id: 2, imagem: "chas-schumacher-glamour.jpg", nome: "Vintage Máquina De Escrever Portátil Remington silencioso", ano: "1930",
            precoDe: "111,99", precoPor: "100,00", vezes: 10, parcelas: "10,00"
        },
        {
            id: 3, imagem: "chas-schumacher-glamour.jpg", nome: "Vintage Máquina De Escrever Portátil Remington silencioso", ano: "1930",
            precoDe: "111,99", precoPor: "100,00", vezes: 10, parcelas: "10,00"
        },
        {
            id: 4, imagem: "chas-schumacher-glamour.jpg", nome: "Vintage Máquina De Escrever Portátil Remington silencioso", ano: "1930",
            precoDe: "111,99", precoPor: "100,00", vezes: 10, parcelas: "10,00"
        },
        {
            id: 5, imagem: "chas-schumacher-glamour.jpg", nome: "Vintage Máquina De Escrever Portátil Remington silencioso", ano: "1930",
            precoDe: "111,99", precoPor: "100,00", vezes: 10, parcelas: "10,00"
        },
        {
            id: 6, imagem: "chas-schumacher-glamour.jpg", nome: "Vintage Máquina De Escrever Portátil Remington silencioso", ano: "1930",
            precoDe: "111,99", precoPor: "100,00", vezes: 10, parcelas: "10,00"
        },
        {
            id: 7, imagem: "chas-schumacher-glamour.jpg", nome: "Vintage Máquina De Escrever Portátil Remington silencioso", ano: "1930",
            precoDe: "111,99", precoPor: "100,00", vezes: 10, parcelas: "10,00"
        },
        {
            id: 8, imagem: "chas-schumacher-glamour.jpg", nome: "Vintage Máquina De Escrever Portátil Remington silencioso", ano: "1930",
            precoDe: "111,99", precoPor: "100,00", vezes: 10, parcelas: "10,00"
        },
        {
            id: 9, imagem: "chas-schumacher-glamour.jpg", nome: "Vintage Máquina De Escrever Portátil Remington silencioso", ano: "1930",
            precoDe: "111,99", precoPor: "100,00", vezes: 10, parcelas: "10,00"
        },
        {
            id: 10, imagem: "chas-schumacher-glamour.jpg", nome: "Vintage Máquina De Escrever Portátil Remington silencioso", ano: "1930",
            precoDe: "111,99", precoPor: "100,00", vezes: 10, parcelas: "10,00"
        },

    ]
    return (
        <>

        {/* 10 por cento */}

        <div class="container mt-2">

            <div class="row justify-content-center mb-3 p-0 mx-0">
                {/* <!-- nome da categoria --> */}
                <H1 h1="Promoções"/> 
                <div class="col-9 linha-divisoria "></div>
            </div>

            <form action="" class="row justify-content-md-end justify-content-center mb-3">
                <div  class="col-md-3 p-0 m-0  col-8">
                <Select  label="Filtro :" default="filtro" options={filter} />
                </div>
               
            </form>

        </div>

        {/* <!-- Inicio lista cards produtos catalogo--> */}
        <div className="container cont ainer-cards my-4">

            <ListProductsCatalogy products={products}/>
           
        </div>

        <div className="ver-mais row justify-content-center tamanho pb-3">
            <a href="" className="btn-ver-mais col-6 mb-3">VER MAIS</a>
        </div>



        </>
    )

}