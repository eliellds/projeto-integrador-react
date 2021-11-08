import React from 'react'
import './Category.css'
import CategoryLeft from "../../components/macro/categories/CategoriesLeft"
import CategoryRight from '../../components/macro/categories/CategoriesRight'

function Category(props) {

    return(
        <>
        <h1>Categorias</h1>
        <CategoryLeft/>
        <CategoryRight/>
        </>
    )
}

export default Category