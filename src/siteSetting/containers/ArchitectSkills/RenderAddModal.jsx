import React, { useState, useEffect } from 'react'

import Input from '../../../components/UI/Input';
import Modal from '../../../components/UI/Modal';
import { useSelector } from 'react-redux';


const RenderAddModal = (props) => {
    const { currentId, setCurrentId, show, formItems,
        onSubmit, handleClose, setFormItems } = props

    const architectSkillsId = useSelector((state) => currentId ? state.architectSkills.architectSkills.find((c) => c._id === currentId) : null)


    useEffect(() => {
        if (architectSkillsId) setFormItems(architectSkillsId)
    }, [architectSkillsId])
    return (
        <Modal
            show={show}
            handleClose={handleClose}
            modalTitle={currentId ? "Редактировать" : "Добавить"}
            onSubmit={onSubmit}
        >
            <Input
                label="Заголовок"
                name={"title"}
                value={formItems.title}
                placeholder={"Введите заголовок"}
                onChange={(e) => setFormItems({ ...formItems, title: e.target.value })}

            />
            {!currentId ? <input
                type="file"
                name="iconImg"
                onChange={(e) => setFormItems({ ...formItems, iconImg: e.target.files[0] })}
            /> : null}
        </Modal>

    )
}


export default RenderAddModal
