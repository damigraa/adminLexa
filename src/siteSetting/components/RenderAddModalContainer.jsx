import React, { useState, useEffect } from 'react'
import Input from '../../components/UI/Input/index';
import Modal from '../../components/UI/Modal';
import { useDispatch, useSelector } from 'react-redux';


const RenderAddModalContainer = (props) => {
    const { currentId, setCurrentId, show, setShow, formItems, setFormItems, add, update, currentIdUpdate } = props
    const dispatch = useDispatch()

    const handleClose = () => {
        setShow(false)
        clear()
    }
    useEffect(() => {
        if (currentIdUpdate) setFormItems(currentIdUpdate)
    }, [currentIdUpdate])

    const submitWarrantyForm = () => {
        if (currentId) {
            dispatch(update(currentId, formItems))
            handleClose()
        } else {
            const form = new FormData()
            form.append("title", formItems.title)
            form.append("description", formItems.description)
            form.append("iconImg", formItems.iconImg)
            dispatch(add(form)).then(() => handleClose())
        }

    }
    const clear = () => {
        setCurrentId(null)
        setFormItems({
            title: "",
            description: "",
            iconImg: ""
        })
    }
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
                onChange={(e) => setFormItems({ ...formItems, iconImg: e.target.files[0] })}
            /> : null}
        </Modal>

    )
}


export default RenderAddModalContainer


