import React, { useState } from "react";

function ProductSuccess(props) {
    const products = JSON.parse(localStorage.getItem('cart')) || [] 
    let total=0 ;
    const [PrecoTotal,setPrecoTotal]=useState(total)
    console.log(products)
    function setTotalPrice(){
        setPrecoTotal(total)
        return PrecoTotal
    }
    function listProducts(){
    return products.map((product) => {
        total += parseInt(product.preco)
        localStorage.setItem('total', total)
        return  <>
        
            <li class="row bloco-produto item-1">

                <div class="atributos tipo-atributo col-3 d-none d-sm-flex">Desc.:</div>
                <div class="atributos atributo-descricao col-12 col-sm-9">{product.nome}</div>

                <div class="atributos tipo-atributo col-3 d-none d-sm-flex">Valor:</div>
                <div class="atributos atributo-valor col-12 col-sm-9">{product.preco}</div>
                
                
                
                <div class="atributos tipo-atributo col-3 d-none d-sm-flex">Qtd.:</div>
                <div class="atributos atributo-qtd col-12 col-sm-9">{1}</div>
              
            </li>
        </>

    })

    }
  


    return (
        <>
        {listProducts()} 
          {console.log(total)}
          
          
        
         <div class="valor-total">Frete: R$:&nbsp;<b>{props.frete}</b></div>
        <div class="valor-total">Total: R$:&nbsp;<b> {parseInt(total+props.frete)}</b></div>
        </>
    )
}

export default ProductSuccess;