import React, { useState, useEffect } from 'react'

import Input from '../../../components/UI/Input';
import Modal from '../../../components/UI/Modal';
import { useSelector } from 'react-redux';


const RenderAddModal = (props) => {
    const { currentId, setCurrentId, show, formItems,
        submitWarrantyForm, handleClose, setFormItems } = props

    const architectLiId = useSelector((state) => currentId ? state.architectLi.architectLi.find((c) => c._id === currentId) : null)


    useEffect(() => {
        if (architectLiId) setFormItems(architectLiId)
    }, [architectLiId])
console.log("mainImg", formItems.mainImg)
    return (
        <Modal
            show={show}
            handleClose={handleClose}
            modalTitle={currentId ? "Редактировать" : "Добавить"}
            onSubmit={submitWarrantyForm}
        >
            <Input
                label="Заголовок"
                name={"title"}
                value={formItems.title}
                placeholder={"Введите заголовок"}
                onChange={(e) => setFormItems({ ...formItems, title: e.target.value })}

            />

            <Input
                label="Мини заголовок"
                name={"miniTitle"}
                value={formItems.miniTitle}
                placeholder={"Введите Мини заголовок"}
                onChange={(e) => setFormItems({ ...formItems, miniTitle: e.target.value })}

            />
            <textarea
                className="AddModalTextarea"
                label="Подробнее 1"
                value={formItems.descriptionOne}
                placeholder={"Введите описание 1"}
                name={"descriptionOne"}
                onChange={(e) => setFormItems({ ...formItems, descriptionOne: e.target.value })}

            />
            <textarea
                className="AddModalTextarea"
                label="Подробнее 2"
                value={formItems.descriptionTwo}
                placeholder={"Введите описание 2"}
                name={"descriptionTwo"}
                onChange={(e) => setFormItems({ ...formItems, descriptionTwo: e.target.value })}

            />
            <textarea
                className="AddModalTextarea"
                label="Подробнее 3"
                value={formItems.descriptionThree}
                placeholder={"Введите описание 3"}
                name={"descriptionThree"}
                onChange={(e) => setFormItems({ ...formItems, descriptionThree: e.target.value })}

            />
            {!currentId ? <input
                type="file"
                name="mainImg"
                onChange={(e) => setFormItems({ ...formItems, mainImg: e.target.files[0] })}
            /> : null}
        </Modal>

    )
}


export default RenderAddModal
