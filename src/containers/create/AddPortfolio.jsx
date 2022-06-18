

import React, { useEffect, useState } from 'react'
import Input from '../../components/UI/Input/index';
import Modal from '../../components/UI/Modal';
import { useSelector, useDispatch } from 'react-redux';
import { addPortfolio, updatePortfolio } from '../../actions';


export const AddPortfolio = ({portfolioForm, setPortfolioForm, show, handleClose, setCurrentId, currentId }) => {
    const dispatch = useDispatch();
    const portfolio = useSelector((state) => currentId ? state.portfolio.portfolio.find((portfolio) => portfolio._id === currentId) : null)

    const [images, setImages] = useState([]);
 

    useEffect(() => {
        if (portfolio) setPortfolioForm(portfolio)
    }, [portfolio])


    const submitStandMonumentForm = (e) => {
        if (currentId) {
            e.preventDefault()
            dispatch(updatePortfolio(currentId, portfolioForm))
            handleClose()
            // clear()
        } else {
            const form = new FormData();
            form.append("title", portfolioForm.title);
            form.append("titleTwo", portfolioForm.titleTwo);
            form.append("videoHref", portfolioForm.videoHref);
            form.append("description", portfolioForm.description);
            form.append("city", portfolioForm.city);
            for (let i = 0; i < images.length; i++) {
                form.append("images", images[i]);
            }
            dispatch(addPortfolio(form)).then(() => handleClose());
            // clear()

        }

    };



    function fileUploadHandler(event) {
        const files = [...event.target.files]
        // files.forEach(file => dispatch(uploadFile(file, currentDir)))
    }

    const handleProductPictures = (e) => {
        setImages(e.target.files);
    };


    return (
        <Modal
            show={show}
            handleClose={handleClose}
            modalTitle={"Добавить новый продукт"}
            onSubmit={submitStandMonumentForm}
        >

            <Input
                label="Заголовок"
                name="title"
                value={portfolioForm.title}
                placeholder={`Введите аголовок`}
                onChange={(e) => setPortfolioForm({ ...portfolioForm, title: e.target.value })}
            />
            <Input
                label="Подробный заголовок"
                name="titleTwo"
                value={portfolioForm.titleTwo}
                placeholder={`введить текст`}
                onChange={(e) => setPortfolioForm({ ...portfolioForm, titleTwo: e.target.value })}
            />
            <Input
                label="Город"
                title="city"
                value={portfolioForm.city}
                placeholder={`Город`}
                onChange={(e) => setPortfolioForm({ ...portfolioForm, city: e.target.value })}
            />
            <Input
                label="Видео Ютуб"
                name="videoHref"
                value={portfolioForm.videoHref}
                placeholder={"Ссылка на видео"}
                onChange={(e) => setPortfolioForm({ ...portfolioForm, videoHref: e.target.value })}
            />
            <Input
                label="Подробное описание"
                name="description"
                value={portfolioForm.description}
                placeholder={"Подробное описание"}
                onChange={(e) => setPortfolioForm({ ...portfolioForm, description: e.target.value })}
            />
            {/* {images.length > 0
                ? images.map((pic, index) => (
                    <div key={index}>{pic.img}</div>
                ))
                : null} */}
            <input
                type="file"
                name="images"
                onChange={(e) => handleProductPictures(e)}
                required
                multiple
            />
            <input multiple={true} onChange={(event) => fileUploadHandler(event)} type="file" id="disk__upload-input" className="disk__upload-input" />

            {/* <button onClick={(e) => clearAddedPhotos(e)}>Удалить фото</button> */}
        </Modal>
    )
}
