import React from 'react';
function EachItemOrderProduct(props) {
    const item = props.item || {}
    function imgRender(){
        
        var img = require(`../../../assets/images/products/${item.image}`)
        
        return <img src={`${img.default}`} className="imagePedido" />
    }

    return <>
        

            <div className="container-fluid backGroundCustom ">
                <div className="row m-0">
                    <div className="col-3">
                        {imgRender()}
                    </div>
                    <div className="col-9">
                        {item.product}
                    </div>

                </div>

            </div>

        
    </>

}
export default EachItemOrderProduct;