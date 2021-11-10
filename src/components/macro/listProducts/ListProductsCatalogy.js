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
            return <>
            <CardProduct
            id={product.id}
            imagem={`${image(product.imagem)}`}
            nome={product.nome}
            ano={product.ano}
            precoDe={product.precoDe}
            precoPor={product.precoPor}
            vezes={product.vezes}
            parcelas={product.parcelas}
            
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