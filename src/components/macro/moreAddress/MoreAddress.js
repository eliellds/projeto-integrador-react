import React from 'react';
import Cruz from '../../../assets/images/moreAddressButton/cruz.png'
import './MoreAddress.css'
function MoreAddresses(props) {
    function ButtonClick(e){
        e.preventDefault();
        props.function()
        
    }
    return <>
        <div className="container">
            <div className="row">
                <div className="col-2 cardContAddress">
        
                    <button onClick={e=>{ButtonClick(e)}} className="row m-0 mt-3 p-0 text-center buttonAddress justify-content-center" type="button">
                            <img src={Cruz}  className="col-12 imgAddAddress" />
                            Adicionar novo endereço
                    </button>
               


                </div>
            </div>

        </div>
    </>
}
export default MoreAddresses