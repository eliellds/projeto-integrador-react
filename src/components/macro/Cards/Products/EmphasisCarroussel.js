import React from 'react'
import Emphasis from './CardProductEmphasis'
function CarrousselEmphasis(props) {
    const products = props.products || []
    
   
    function renderEmphasis(){
        let indexEmphasis=0
        return products.map((product=>{
            return <Emphasis variable={indexEmphasis++%2==0? true : false }
             image={product.product.image} price={product.price} salePrice={product.salePrice} product={product.product.product} year={product.product.year} id={product.product.id} />
        }))


    }
    

    return <section className="container-fluid">

        <div className="row custom-section mb-5 justify-content-center">
           
            {renderEmphasis()}
            
        </div>

    </section>


}
export default CarrousselEmphasis