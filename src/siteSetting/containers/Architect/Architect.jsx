import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import ContainerSiteSetting from '../../ContainerSiteSetting';
import { getArchitect, deleteArchitect, addArchitect, updateArchitect } from '../../../actions';
import RenderItemsContainer from '../../components/RenderItemsContainer';
import Loader from '../../../components/Loader';
import RenderAddModalContainer from './RenderAddModal';

function Architect() {
    const architect = useSelector((state) => state.architect)

    const dispatch = useDispatch()
    const [currentId, setCurrentId] = useState(null)
    const [show, setShow] = useState(false)
    const [architectForm, setArchitectForm] = useState({
        headerTitle: "",
        textImage: "",
        contentTextLeft: "",
        contentTitle: "",
        contentDescription: "",
        mainImg: "",
    })
    useEffect(() => {
        dispatch(getArchitect())
    }, [])
    const handleShow = () => {
        setShow(true)
    }
    if (architect.loading) {
        return <Loader />
    }
    const submitWarrantyForm = () => {
        if (currentId) {
            dispatch(updateArchitect(currentId, architectForm))
            handleClose()
        } else {
            const form = new FormData()
            form.append("headerTitle", architectForm.headerTitle)
            form.append("textImage", architectForm.textImage)
            form.append("contentTextLeft", architectForm.contentTextLeft)
            form.append("contentTitle", architectForm.contentTitle)
            form.append("contentDescription", architectForm.contentDescription)
            form.append("mainImg", architectForm.mainImg)
            dispatch(addArchitect(architectForm)).then(() => handleClose())
        }

    }

    const handleClose = () => {
        setShow(false)
        clear()
    }
    const clear = () => {
        setCurrentId(null)
        setArchitectForm({
            headerTitle: "",
            textImage: "",
            contentTextLeft: "",
            contentTitle: "",
            contentDescription: "",
            mainImg: ""
        })
    }

    return (
        <ContainerSiteSetting
            item={architect.architect}
            setShow={handleShow}
            title={"Для архитекторов"}
            href="/siteSetting"
            limitItem
        >
            <RenderItemsContainer
                limitItem
                setShow={setShow}
                items={architect.architect}
                setCurrentId={setCurrentId}
                deleteButton={deleteArchitect}
            />
            <RenderAddModalContainer
                formItems={architectForm}
                clear={clear}
                handleClose={handleClose}
                submitWarrantyForm={submitWarrantyForm}
                setFormItems={setArchitectForm}
                show={show}
                setShow={setShow}
                setCurrentId={setCurrentId}
                currentId={currentId}
                items={architect.architect}
            />
        </ContainerSiteSetting>
    )
}

export default Architect
