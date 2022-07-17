import React, {useEffect } from 'react'
import Input from '../../../components/UI/Input';
import Modal from '../../../components/UI/Modal';
import { useSelector } from 'react-redux';


const RenderAddModalBenefits = (props) => {
    const { currentId, show, formBenefits,
        submitWarrantyForm, handleClose, setFormBenefits } = props

    const benefits = useSelector((state) => currentId ? state.benefits.benefits.find((c) => c._id === currentId) : null)


    useEffect(() => {
        if (benefits) setFormBenefits(benefits)
    }, [benefits])

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
                value={formBenefits.title}
                placeholder={"Введите заголовок"}
                onChange={(e) => setFormBenefits({ ...formBenefits, title: e.target.value })}

            />
            <textarea
                className="AddModalTextarea"
                label="Подробнее"
                value={formBenefits.description}
                placeholder={"Введите описание"}
                name={"description"}
                onChange={(e) => setFormBenefits({ ...formBenefits, description: e.target.value })}

            />
        </Modal>

    )
}


export default RenderAddModalBenefits
