import React from 'react';

import Payment from '../../../assets/images/tracking/pagar.png'
import Separando from '../../../assets/images/tracking/packaging.png'
import Rota from '../../../assets/images/tracking/enviado.png'
import Recebido from '../../../assets/images/tracking/receber.png'

import './Tracking.css'


function TrackingPack(props) {


    return <>
        <div className="container">
            <div className="row">
               
                    <div className=" col-12 custom-tracking ">
                        
                        <div className="row justify-content-center">
                            <div className={"col-2 line default-line align-self-center default-line-initial "+ "completedTask" }>
                            </div>
                            <div className={"col-1 tracking-img-col " }>
                                <img src={Payment} className={ props.status > 1? "completedTask images-tracking": " images-tracking" }/>
                            </div>
                            <div className={props.status > 1?"col-2 line default-line align-self-center completedTask ": "col-2 line default-line align-self-center"}>
                            </div>
                            <div className="col-1 tracking-img-col">
                        
                                <img src={Separando}  className={ props.status > 2? "completedTask images-tracking col-12": " images-tracking col-12" }/>
                     
                           
                            </div>
                            <div className={props.status > 2?"col-2 line default-line align-self-center completedTask ": "col-2 line default-line align-self-center"}>
                            </div>
                            <div className="col-1 tracking-img-col">
                                <img src={Rota} className={ props.status > 3? "completedTask images-tracking": " images-tracking" } />
                            </div>
                            <div className={props.status > 3?"col-2 line default-line align-self-center completedTask ": "col-2 line default-line align-self-center"}>
                            </div>
                            <div className="col-1 tracking-img-col">
                                <img src={Recebido} className={ props.status == 4? "completedTask images-tracking": " images-tracking" } />
                            </div>
                        

                          
                        </div>
                    </div>

                    <div className="col-12 my-2 pb-2">
                        <div className="row justify-content-center text-center">
                            <div className="col-2">Aguardando <br/> Pagamento</div>
                            <div className="col-1 tracking-img-col">
                               
                            </div>
                            <div className="col-2 ">Separando <br/> Pedido</div>
                            <div className="col-1 tracking-img-col">
                               
                               </div>
                            <div className="col-2">Em <br/> Transito</div>
                            <div className="col-1 tracking-img-col">
                               
                               </div>
                            <div className="col-2">Entregue</div>


                        </div>

                    </div>

                    <hr/>

            </div>

        </div>

    </>
}
export default TrackingPack