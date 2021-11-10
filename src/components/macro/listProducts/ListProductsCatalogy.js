import React from 'react';
import CardProduct from '../Cards/Products/CardProduct';
import Images from '../../../assets/images/products/'
function ListProductsCatalogy(props){
    const products = props.products || []
    function image(image) {
        {
            var imgSrc = require(`../../assets/images/products/${image}`);
            
            return  <img src={`${imgSrc.default}`} />
            } 
    }

    function listProducts(){
        return products.map(product =>{
            return <>
            
           
           
            </>
        })
    }

    return<>

    
    
    
    </>

}
export default ListProductsCatalogy;