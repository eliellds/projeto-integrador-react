import React from 'react'
import { Link } from 'react-router-dom';
import Button from '../../../micro/Button/Button'
import 'bootstrap/dist/css/bootstrap.min.css';


function Emphasis(props) {
    const addToCart = () => {
        const product = {
            id: props.id,
            precoDe: props.precoDe,
            preco: props.precoPor,
            nome: props.nome,
            ano: props.ano
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
            return <div className="preco-de">R$ {props.precoDe}</div>
        }
        return
    }

    const preco = (props) => {

        return (
            <>
                {precoDe(props)}
                <div className="preco-por">R$ {props.precoPor}</div>
                <div className="parcelas">À vista, ou em <em>{props.vezes}x</em> de <em>R$ {props.parcelas}</em> no cartão</div>
            </>
        )
    }

    function image() {
        var imgSrc = require(`../../../../assets/images/products/${props.image}`);
        console.log(imgSrc)
        return <img src={`${imgSrc.default}`} />
    }
    if (props.variable) {
        return <>

            <div className="col-md-5 col-12 custom-section-item">
                <Link to={"/product/" + props.id}>{image()}</Link>

            </div>

            <div className="col-md-5 col-12 custom-section-item">

                <h6>{props.name}<br />{props.year}</h6>
                <p className="text-center preco">R${props.price}</p>
                <Button label="Comprar" onclick={addToCart} class="btn-categoria py-2 px-0" />

            </div>

        </>
    }

    return <>


        <div className="col-md-5 col-12 custom-section-item">

            <h6>{props.name}<br />{props.year}</h6>
            <p className="text-center preco">R${props.price}</p>
            <Button label="Comprar" onclick={addToCart} class="btn-categoria py-2 px-0" />

        </div>

        <div className="col-md-5 col-12 custom-section-item">
            <Link to={"/product/" + props.id}>{image()}</Link>

        </div>

    </>
}
export default Emphasis