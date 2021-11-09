
import ListProduct from '../Cards/Products/CardProduct'
import React, { useState, useEffect } from 'react'
import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import Imagem from '../../../assets/images/products/BandeijaTurca.webp'



function ListProducts(props) {
    const products = props.products || []
    const [width, setWidth] = useState()
    const [visibleSlide, setVisibleSlide] = useState(5)

    function windowSize() {
        var widthNow = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

        setWidth(widthNow);
    }

    window.addEventListener('resize', () => {
        // foi necessario colocar um time para não ficar em loop infinito
        setTimeout(
            () => {

                windowSize(() => setSlide(width))


            }, 1000)

    });
    useEffect(() => {
        windowSize(setSlide(width))

    }
    )



    function setSlide(current) {
        if (current > 1250) {
            setVisibleSlide(5)
        } else if (current < 1250 && current > 1000) {
            setVisibleSlide(4)

        } else if (current < 1000 && current > 800) {
            setVisibleSlide(3)
        } else if (current < 800 && current > 570) {
            setVisibleSlide(2)
        } else {
            setVisibleSlide(1)
        }

    }



    //consome e faz o map do array
    function listarProdutos() {
        return (<>
         <Slide index={0}  >
                    <div className="row justify-content-center">
                        <ListProduct><img src={Imagem} /></ListProduct>
                    </div>
                </Slide>
                <Slide index={1} >
                    <div className="row justify-content-center">
                        <ListProduct><img src={Imagem} /></ListProduct>
                    </div>                        </Slide>
                <Slide index={2} >
                    <div className="row justify-content-center">
                        <ListProduct><img src={Imagem} /></ListProduct>
                    </div>                        </Slide>
                <Slide index={3}>
                    <div className="row justify-content-center">
                        <ListProduct><img src={Imagem} /></ListProduct>
                    </div>                        </Slide>
                <Slide index={4}>
                    <div className="row justify-content-center">
                        <ListProduct><img src={Imagem} /></ListProduct>
                    </div>                        </Slide>
                <Slide index={5}>
                    <div className="row justify-content-center">
                        <ListProduct><img src={Imagem} /></ListProduct>
                    </div>                        </Slide>
                <Slide index={6}>
                    <div className="row justify-content-center">
                        <ListProduct><img src={Imagem} /></ListProduct>
                    </div>                        </Slide>
                <Slide index={7}>
                    <div className="row justify-content-center">
                        <ListProduct><img src={Imagem} /></ListProduct>
                    </div>                        </Slide>
                <Slide index={8}>
                    <div className="row justify-content-center">
                        <ListProduct><img src={Imagem} /></ListProduct>
                    </div>
                </Slide>

        </>
        )

    }

    return <>

        <CarouselProvider
            naturalSlideWidth={100}
            naturalSlideHeight={100}
            totalSlides={9}
            infinite={true}
            isIntrinsicHeight={true}
            visibleSlides={visibleSlide}
            className=" container container-cards"
        >
            <Slider >
            {listarProdutos()}
               
            </Slider>

        </CarouselProvider>
    </>

}

export default ListProducts