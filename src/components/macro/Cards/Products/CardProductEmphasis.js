import React from 'react'
import { Link } from 'react-router-dom';
import Button from '../../../micro/Button/Button'
import 'bootstrap/dist/css/bootstrap.min.css';


function Emphasis(props) {
    const addToCart = () => {
        const product = {
            id: props.id,
            salePrice: props.salePrice,
            price: props.price,
            product: props.product,
            year:props.year
        }
        let cartList = localStorage.getItem("cart")
            ? JSON.parse(localStorage.getItem("cart"))
            : []
        cartList.push(product)
        let cartString = JSON.stringify(cartList)
        localStorage.setItem("cart", cartString)
        localStorage.setItem('qtyCart', JSON.stringify(cartList.length))

        window.location.href = "/cart";
    }

    const precoDe = (props) => {

        if (props.precoDe) {
            return <div className="preco-de">R$ {props.price}</div>
        }
        return
    }

    const preco = (props) => {

        return (
            <>
                {precoDe(props)}
                <div className="preco-por">R$ {props.salePrice}</div>
                <div className="parcelas">À vista, ou em <em>{10}x</em> de <em>R$ {props.salePrice ? (props.salePrice / 10).toFixed(2) : (props.price / 10).toFixed(2)}</em> no cartão</div>
            </>
        )
    }

    function image() {
        var imgSrc = require(`../../../../assets/images/products/${props.image}`);
        console.log(imgSrc)
        return <img className="image-emphasis" src={`${imgSrc.default}`} />
    }
    if (props.variable==true) {
        return <>

            <div className="col-md-5 col-12 custom-section-item">
                <Link to={"/product/" + props.id}>{image()}</Link>

            </div>

            <div className="col-md-5 col-12 custom-section-item">

                <h6>{props.product}<br />{props.year}</h6>
                
                <p className={"text-center "+props.salePrice?"preco-de text-center ":"text-center  preco"}>{props.salePrice?"De: R$"+props.price :"R$"+props.price}</p>
                <p className={"text-center preco"}>{props.salePrice?"Por: R$"+props.salePrice :""}</p>       
                <Button label="Comprar" onclick={addToCart} class="btn-categoria py-2 px-0" />

            </div>

        </>
    } else {

        return <>


            <div className="col-md-5 col-12 custom-section-item">

                <h6>{props.product}<br />{props.year}</h6>

                <p className={"" + props.salePrice?"text-center preco-de":" text-center preco"}>{props.salePrice?"De: R$"+props.price :"R$"+props.price}</p>
                <p className={"text-center preco"}>{props.salePrice?"Por: R$"+props.salePrice :""}</p>


                <Button label="Comprar" onclick={addToCart} class="btn-categoria py-2 px-0" />

            </div>

            <div className="col-md-5 col-12 custom-section-item">
                <Link to={"/product/" + props.id}>{image()}</Link>

            </div>

        </>
    }
}
export default Emphasis