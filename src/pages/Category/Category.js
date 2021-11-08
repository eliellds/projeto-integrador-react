import React from 'react'
import './Category.css'
import CategoryLeft from "../../components/micro/categories/CategoriesLeft"
import CategoryRight from '../../components/micro/categories/CategoriesRight'

function Category(props) {

    return(
        <>
        <h1>Categorias</h1>
        <CategoryLeft image="../../../assets/images/category/quarto.jpg" category="Quarto" desc="Encontre armários, penteadeiras \n e objetos para decorar seu quarto."/>
        <CategoryRight/>
        </>
    )
}

export default Category