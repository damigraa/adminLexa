import React, { useState, useEffect } from 'react'

import Input from '../../../components/UI/Input';
import Modal from '../../../components/UI/Modal';
import { useSelector } from 'react-redux';


const RenderAddModal = (props) => {
    const { currentId, setCurrentId, show, formItems,
        submitWarrantyForm, handleClose, setFormItems } = props

    const architect = useSelector((state) => currentId ? state.architect.architect.find((c) => c._id === currentId) : null)


    useEffect(() => {
        if (architect) setFormItems(architect)
    }, [architect])

    return (
        <Modal
            show={show}
            handleClose={handleClose}
            modalTitle={currentId ? "Редактировать" : "Добавить"}
            onSubmit={submitWarrantyForm}
        >

            <Input
                label="Заголовок"
                name={"headerTitle"}
                value={formItems.headerTitle}
                placeholder={"Введите заголовок"}
                onChange={(e) => setFormItems({ ...formItems, headerTitle: e.target.value })}

            />

            <Input
                label="ФотоЗаголовок"
                name={"textImage"}
                value={formItems.textImage}
                placeholder={"Введите заголовок на фото"}
                onChange={(e) => setFormItems({ ...formItems, textImage: e.target.value })}

            />

            <Input
                label="Текст слева"
                name={"contentTextLeft"}
                value={formItems.contentTextLeft}
                placeholder={"Введите текст который слева"}
                onChange={(e) => setFormItems({ ...formItems, contentTextLeft: e.target.value })}

            />
            <Input
                label="Мини-заголовок"
                name={"contentTitle"}
                value={formItems.contentTitle}
                placeholder={"Введит мини-заголовок"}
                onChange={(e) => setFormItems({ ...formItems, contentTitle: e.target.value })}

            />
            <textarea
                className="AddModalTextarea"
                label="Подробнее"
                value={formItems.contentDescription}
                placeholder={"Введите описание"}
                name={"contentDescription"}
                onChange={(e) => setFormItems({ ...formItems, contentDescription: e.target.value })}

            />
            {!currentId ? <input
                type="file"
                name={"mainImg"}
                onChange={(e) => setFormItems({ ...formItems, mainImg: e.target.files[0] })}
            /> : null}
        </Modal>

    )
}


export default RenderAddModal
