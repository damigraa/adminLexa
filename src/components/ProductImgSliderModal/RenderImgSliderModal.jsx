import React from 'react'
import ProductImgSliderModal from './ProductImgSliderModal';
import Slider from './../Slider/slider/Slider/Slider';

const RenderImgSliderModal = (props) => (
    <ProductImgSliderModal
        size="xl"
        modalTitle="Просмотр фотографий"
        show={props.showModalImg}
        handleClose={() => props.setShowModalImg(false)}
    >
        <div>
            <Slider
                item={props.item}
                onClick
            />
        </div>
    </ProductImgSliderModal>
)

export default RenderImgSliderModal