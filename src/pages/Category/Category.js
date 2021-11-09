import React from 'react'
import './Category.css'
import CategoryLeft from "../../components/micro/categories/CategoriesLeft"
import CategoryRight from '../../components/micro/categories/CategoriesRight'
import Quarto from "../../assets/images/category/quarto.jpg"

function Category(props) {

    return(
        <>
        <h1>Categorias</h1>
        <CategoryLeft image={Quarto} category="Quarto" description="Encontre armários, penteadeiras \n e objetos para decorar seu quarto."/>
        <CategoryRight image={Quarto} category="Quarto" description="Encontre armários, penteadeiras \n e objetos para decorar seu quarto."/>
        </>
    )
}

export default Category