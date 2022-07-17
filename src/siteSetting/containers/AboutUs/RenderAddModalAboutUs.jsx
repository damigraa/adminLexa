import React, { useState, useEffect } from 'react'

import Input from '../../../components/UI/Input';
import Modal from '../../../components/UI/Modal';
import { useSelector } from 'react-redux';


const RenderAddModalContainer = (props) => {
    const { currentId, setCurrentId, show, setShow, formItems,
        submitWarrantyForm, handleClose, setFormItems } = props

    const aboutUs = useSelector((state) => currentId ? state.aboutUs.aboutUs.find((c) => c._id === currentId) : null)


    useEffect(() => {
        if (aboutUs) setFormItems(aboutUs)
    }, [aboutUs])

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
                label="Заголовок"
                name={"titleDescription"}
                value={formItems.titleDescription}
                placeholder={"Введите заголовок"}
                onChange={(e) => setFormItems({ ...formItems, titleDescription: e.target.value })}

            />

            <Input
                label="Название компании"
                name={"nameCompany"}
                value={formItems.nameCompany}
                placeholder={"Введит название компании"}
                onChange={(e) => setFormItems({ ...formItems, nameCompany: e.target.value })}

            />

            <textarea
                className="AddModalTextarea"
                label="Подробнее"
                value={formItems.description}
                placeholder={"Введите описание"}
                name={"description"}
                onChange={(e) => setFormItems({ ...formItems, description: e.target.value })}

            />
            {!currentId ? <input
                type="file"
                onChange={(e) => setFormItems({ ...formItems, aboutUsPicture: e.target.files[0] })}
            /> : null}
        </Modal>

    )
}


export default RenderAddModalContainer
