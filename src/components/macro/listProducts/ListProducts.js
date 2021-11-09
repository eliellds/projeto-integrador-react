import React from 'react'
import CardProduct from '../Cards/Products/CardProduct'

function ListProduct(props){
    products = props.products || []
    function listarProdutos(){
        return products.map(function(product){
            <CardProduct>
                <img src={"../../../assets/images/products/"+product.image}/>
            </CardProduct> 
        })
    }
    return<>
    </>

}
export default ListProduct