import React, { useState } from 'react'
import BtnSlider from './BtnSlider'
import { generatePublicUrl } from '../../../../urlConfig';

const Slider = (props) => {
    const [slideIndex, setSlideIndex] = useState(1)
    const nextSlide = () => {
        if (slideIndex !== props.item ? props.item.length : props.itemTwo.length) {
            setSlideIndex(slideIndex + 1)
        }
        else if (slideIndex === props.item ? props.item.length : props.itemTwo.length) {
            setSlideIndex(1)
        }
    }

    const prevSlide = () => {
        if (slideIndex !== 1) {
            setSlideIndex(slideIndex - 1)
        }
        else if (slideIndex === 1) {
            setSlideIndex(props.item ? props.item.length : props.itemTwo.length)
        }
    }

    return (
        <div>
            <div className="container-slider">
                {props.item ?
                    props.item.map((obj, index) => {
                        return (
                            <div className="sliderContainer">
                                <div
                                    // onMouseEnter={() => setTextName(obj.name)}
                                    // onClick={props.onClick}
                                    key={obj.id}
                                    className={slideIndex === index + 1 ? "container-slider__slide1 active-anim" : "container-slider__slide1"}
                                >
                                    <div className="container-slide__imgBlock">
                                        <div>
                                            <img
                                                src={generatePublicUrl(obj.img)}
                                                alt="hello"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }) :
                    props.itemTwo.map((objOne, index) => (
                        <>

                            <div
                                // onClick={props.onClick}
                                key={index}
                                className={slideIndex === index + 1 ? "container-slider__slide1 active-anim" : "container-slider__slide1"}
                            >
                                <div className="container-slide__imgBlock">
                                    <div className="row">
                                        <div className="col-12 col-sm-12 col-md-8 col-lg-8">
                                            <div className="landscaping__imgOneContainer">
                                                <img src={generatePublicUrl(objOne.productPictures[0].img)} alt="ss" />
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-4 col-lg-4">
                                            <div className="landscaping__contentBlock">
                                                {objOne.productPictures.slice(1, 3).map((obj, index) => (
                                                    <div
                                                        key={index}
                                                        className="landscaping__imgTwoContainer">
                                                        <img src={generatePublicUrl(obj.img)} alt="ss" />
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>

                    ))
                }

                <BtnSlider moveSlide={prevSlide} direction={"next"} />
                <BtnSlider moveSlide={prevSlide} direction={"prev"} />

            </div>

        </div>
    )
}

export default Slider