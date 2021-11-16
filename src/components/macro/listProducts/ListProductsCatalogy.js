import React from 'react';
import CardProduct from '../Cards/Products/CardProduct';

function ListProductsCatalogy(props){
    
    const products = props.products || []
    
    function image(image) {
        
            var imgSrc = require(`../../../assets/images/products/${image}`);
            
            return  imgSrc.default
            
    }

    function listProducts(){
        return products.map(product =>{
            console.log(products)
            return <>
            <CardProduct
            id={product.product.id}
            imagem={`${image(product.product.image)}`}
            nome={product.product.product}
            ano={product.product.year}
            precoDe={(product.price).toFixed(2)}
            precoPor={(product.salePrice).toFixed(2)}
            vezes={10}
            parcelas={(product.salePrice / 10).toFixed(2)}
            
            />
           
           
            </>
        })
    }

    return<>
        <ul className="row lista-cards  tamanho  mb-3 justify-content-around">
        
            {listProducts()}
       
  
        </ul>
    
    </>

}
export default ListProductsCatalogy;