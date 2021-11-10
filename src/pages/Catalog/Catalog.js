import React from "react";
import './Catalog.css';
import ListProductsCatalogy from "../../components/macro/listProducts/ListProductsCatalogy";
import Button from "../../components/micro/Button/Button";
import Select from "../../components/micro/Forms/Select/Select";
import H1 from "../../components/micro/Title/H1";

export default function Catalog(props) {

    const category = props.match.params.category;
    console.log(props);

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


    

    const filter = [
        { id: 1, subjectDescription: "Menor Valor" },
        { id: 2, subjectDescription: "Maior Valor" },
        { id: 3, subjectDescription: "Maior Desconto" },
        { id: 4, subjectDescription: "Mais Antigo" },
        { id: 5, subjectDescription: "Mais Novo" },
    ]

    return (
        <>
            <div className="row justify-content-center mb-3 p-0 mx-0">
                <H1 h1={`${category}`} />
                <div className="col-9 linha-divisoria "></div>
            </div>

            <div className="row row-correction form-filter">
                <form action="" className="col-12 col-sm-4 justify-content-md-end justify-content-center mb-3">

                    <Select label="Ordenar por: " default="filtro" options={filter} />

                </form>
            </div>

            <div className="container container-cards my-4">

              

                    <ListProductsCatalogy products={products}/>

                

            </div>

            <div className="ver-mais row justify-content-center tamanho pb-3">
                <Button route="" class="btn-ver-mais" label="VER MAIS" />
            </div>
        </>
    )

}