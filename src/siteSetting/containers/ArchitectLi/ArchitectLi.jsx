import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import ContainerSiteSetting from '../../ContainerSiteSetting';
import { getArchitectLi, deleteArchitectLi, addArchitectLi, updateArchitectLi } from '../../../actions';
import RenderItemsContainer from '../../components/RenderItemsContainer';
import Loader from '../../../components/Loader';
import RenderAddModalContainer from './RenderAddModal';

function ArchitectLi() {
    const architectLi = useSelector((state) => state.architectLi)

    const dispatch = useDispatch()
    const [currentId, setCurrentId] = useState(null)
    const [show, setShow] = useState(false)
    const [architectLiForm, setArchitectLiForm] = useState({
        title: "",
        miniTitle: "",
        descriptionOne: "",
        descriptionTwo: "",
        descriptionThree: "",
        mainImg: "",
    })
    useEffect(() => {
        dispatch(getArchitectLi())
    }, [])
    const handleShow = () => {
        setShow(true)
    }
    if (architectLi.loading) {
        return <Loader />
    }
    const submitWarrantyForm = () => {
        if (currentId) {
            dispatch(updateArchitectLi(currentId, architectLiForm))
            handleClose()
        } else {
            const form = new FormData()
            form.append("title", architectLiForm.title)
            form.append("miniTitle", architectLiForm.miniTitle)
            form.append("descriptionOne", architectLiForm.descriptionOne)
            form.append("descriptionTwo", architectLiForm.descriptionTwo)
            form.append("descriptionThree", architectLiForm.descriptionThree)
            form.append("mainImg", architectLiForm.mainImg)
            dispatch(addArchitectLi(form)).then(() => handleClose())
        }

    }

    const handleClose = () => {
        setShow(false)
        clear()
    }
    const clear = () => {
        setCurrentId(null)
        setArchitectLiForm({
            title: "",
            miniTitle: "",
            descriptionOne: "",
            descriptionTwo: "",
            descriptionThree: "",
            mainImg: ""
        })
    }

    return (
        <ContainerSiteSetting
            item={architectLi.architectLi}
            setShow={handleShow}
            title={"Список подробностей"}
            href="/siteSetting"
        >
            <RenderItemsContainer
                setShow={setShow}
                items={architectLi.architectLi}
                setCurrentId={setCurrentId}
                deleteButton={deleteArchitectLi}
            />
            <RenderAddModalContainer
                formItems={architectLiForm}
                clear={clear}
                handleClose={handleClose}
                submitWarrantyForm={submitWarrantyForm}
                setFormItems={setArchitectLiForm}
                show={show}
                setShow={setShow}
                setCurrentId={setCurrentId}
                currentId={currentId}
                items={architectLi.architectLi}
            />
        </ContainerSiteSetting>
    )
}

export default ArchitectLi
