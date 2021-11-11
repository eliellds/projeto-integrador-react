import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import ProductList from '../../Products/ProductList'
import Remove from '../../../assets/images/cart/remover.png'
import Produto from '../../../assets/images/cart/caixaRegistradora.png'

function CartItems(props) {
    const productItems = props.products || []
    const [products, setProducts] = useState(productItems)
    const [qtyCart, setQtyCart] = useState(0)

    useEffect(() => {
        setProducts(JSON.parse(localStorage.getItem("cart")))
        setQtyCart(JSON.parse(localStorage.getItem("qtyCart")))
    },[])

    return(
        <>
        <Link to='/'>Home</Link>
        <h1>Cart</h1>
        <h2>{qtyCart}</h2>
        <ProductList products={products} cart/>
        </>
    )
    // return (
    //     <>
    //         <div className="row carrinho-card mt-1 mb-2 mx-0 align-items-center justify-content-between">
    //             <div className="col-2 col-md-2  p-0">
    //                 {/* <a href="#"> <img src={Produto} className="card-image" /></a> */}
    //             </div>
    //             <a href="#paginaProduto" className="col-4 col-md-4 pe-0  texto-carrinho">
    //                 {props.description}
    //             </a>
    //             <div className=" col-1 numero quantidade align-content-center text-center">
    //                 <a href="#" className="controle positivo">+</a> 1 <a href="" className="controle negativo">-</a>
    //             </div>
    //             <div className="col-2 texto-carrinho  text-center">
    //                 R$<span className="numero">{props.price}</span>
    //             </div>
    //             <div className="col-2 ">
    //                 <a href="#" className="removerCarrinho row justify-content-center">
    //                     <img className="col-7 col-md-4" src={Remove} alt="" width="20px" />
    //                 </a>
    //             </div>
    //       </div>

    //     </>
    // )
}

export default CartItems;