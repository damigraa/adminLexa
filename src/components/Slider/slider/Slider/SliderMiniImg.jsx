import React, { useState } from 'react'
import { generatePublicUrl } from '../../urlConfig';
import BtnSlider from './BtnSlider';

const SliderMiniImg = (props) => {
    const [slideIndex, setSlideIndex] = useState(1)
    const nextSlide = () => {
        if (slideIndex !== props.itemObj.length) {
            setSlideIndex(slideIndex + 1)
        }
        else if (slideIndex === props.itemObj.length) {
            setSlideIndex(1)
        }
    }

    const prevSlide = () => {
        if (slideIndex !== 1) {
            setSlideIndex(slideIndex - 1)
        }
        else if (slideIndex === 1) {
            setSlideIndex(props.itemObj.length)
        }
    }

    const moveDot = index => {
        setSlideIndex(index)
    }
    return (

        <div>
            <div className="sliderMiniImg">
                {
                    props.itemObj ? props.itemObj.map((obj, index) => {
                        return (
                            <div
                                onClick={props.onClick}
                                key={obj.id}
                                className={slideIndex === index + 1 ? "sliderMiniImg__slide1 active-anim" : "sliderMiniImg__slide1"}
                            >
                                {/* <div className="slide1-imgContainer"> */}
                                <img
                                    src={generatePublicUrl(obj.img)}
                                />

                                {/* </div> */}
                            </div>
                        )
                    }) : " Продукты подгружаются"}
                <BtnSlider moveSlide={nextSlide} direction={"next"} />
                <BtnSlider moveSlide={prevSlide} direction={"prev"} />


                <div className="sliderMiniImg__container-dots">
                    {Array.from({ length: props.itemObj.length }).map((item, index) => (
                        <div
                            onClick={() => moveDot(index + 1)}
                            className={slideIndex === index + 1 ? "sliderMiniImg__dot active" : "sliderMiniImg__dot"}
                        ></div>
                    ))}
                </div>
            </div>
            {props.miniImg ? <div className='sliderMiniImg__containerMiniImg'>
                {
                    props.itemObj.length > 1 ? props.itemObj.map((obj, index) => {
                        return (
                            <div
                                key={obj._id}
                                onClick={() => moveDot(index + 1)}

                                className={slideIndex === index + 1 ? "sliderMiniImg__miniImg active-mini" : "sliderMiniImg__miniImg"}
                            >
                                <img
                                    src={generatePublicUrl(obj.img)}
                                />
                            </div>
                        )
                    }) : null}
            </div> : "Loading"}
        </div>

    )
}

export default SliderMiniImg