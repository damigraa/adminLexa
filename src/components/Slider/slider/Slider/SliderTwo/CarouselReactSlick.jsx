import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { generatePublicUrl } from '../../../urlConfig';


const CarouselReactSlick = (props) => {

    var settings = {
        dots: true,
        infinite: true,
        speed: 1400,
        slidesToShow: 4,
        slidesToScroll: 5,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div>
            <h2>Похожие товары</h2>

            <div className="carouselReactSlick">
                <Slider {...settings}>
                    {props.product.products.map((item, index) => (
                        <a href={`${item._id}`} key={index} className="carouselReactSlick__container">
                            <div className="carouselReactSlick__boxImages">
                                <img src={generatePublicUrl(item.productPictures[0].img)} alt="" />
                            </div>
                            <div className="carouselReactSlick__boxText">
                                <div className="carouselReactSlick__name">
                                    {item.name}
                                </div>
                                <div className="carouselReactSlick__boxPrice">
                                    <div className="carouselReactSlick__price">
                                        {item.price} грн.
                                    </div>
                                    <div className="carouselReactSlick__priceTwo">
                                        {item.price} грн.
                                    </div>
                                </div>
                            </div>
                        </a>
                    ))}
                </Slider>

            </div>
        </div>
    )
}

export default CarouselReactSlick