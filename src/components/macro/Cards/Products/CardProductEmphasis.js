import React from 'react'
import Button from '../../../micro/Button/Button'


function Emphasis(props){
    
    function image(){   
        var imgSrc = require(`../../../../assets/images/products/${props.image}`);
        console.log(imgSrc)
        return <img src={`${imgSrc.default}`} />
    }
    if(props.variable){
    return <>
    
        <div className="col-md-5 col-12 custom-section-item">
            {image()}

        </div>

        <div className="col-md-5 col-12 custom-section-item">

            <h6>{props.name}<br />{props.year}</h6>
            <p className="text-center preco">R${props.price}</p>
            <Button label="Comprar" onclick="null" class="btn-categoria" navigation route={"/product/"+props.id} />

        </div>
        
        </>
    }

    return <>
    

    <div className="col-md-5 col-12 custom-section-item">

        <h6>{props.name}<br />{props.year}</h6>
        <p className="text-center preco">R${props.price}</p>
        <Button label="Comprar" onclick="null" class="btn-categoria" navigation route={"/product/"+props.id} />

    </div>
    
    <div className="col-md-5 col-12 custom-section-item">
        {image()}

    </div>
    
    </>
}
export default Emphasis