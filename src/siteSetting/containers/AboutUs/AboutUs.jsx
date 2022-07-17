import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import ContainerSiteSetting from '../../ContainerSiteSetting';
import { getAboutUs, deleteAboutUs, addAboutUs, updateAboutUs } from '../../../actions';
import RenderItemsContainer from '../../components/RenderItemsContainer';
import Loader from '../../../components/Loader';
import RenderAddModalContainer from './RenderAddModalAboutUs';

function AboutUs() {
    const aboutUs = useSelector((state) => state.aboutUs)

    const dispatch = useDispatch()
    const [currentId, setCurrentId] = useState(null)
    const [show, setShow] = useState(false)
    const [formAboutUs, setFormAboutUs] = useState({
        title: "",
        titleDescription: "",
        nameCompany: "",
        description: "",
        aboutUsPicture: "",
    })
    useEffect(() => {
        dispatch(getAboutUs())
    }, [])
    const handleShow = () => {
        setShow(true)
    }
    if (aboutUs.loading) {
        return <Loader />
    }
    const submitWarrantyForm = () => {
        if (currentId) {
            dispatch(updateAboutUs(currentId, formAboutUs))
            handleClose()
        } else {
            const form = new FormData()
            form.append("title", formAboutUs.title)
            form.append("titleDescription", formAboutUs.titleDescription)
            form.append("nameCompany", formAboutUs.nameCompany)
            form.append("description", formAboutUs.description)
            form.append("aboutUsPicture", formAboutUs.aboutUsPicture)
            dispatch(addAboutUs(form)).then(() => handleClose())
        }

    }

    const handleClose = () => {
        setShow(false)
        clear()
    }
    const clear = () => {
        setCurrentId(null)
        setFormAboutUs({
            title: "",
            titleDescription: "",
            description: "",
            aboutUsPicture: ""
        })
    }

    return (
        <ContainerSiteSetting
            item={aboutUs.aboutUs}
            setShow={handleShow}
            title={"О нас"}
            href="/siteSetting"
            limitItem
        >
            <RenderItemsContainer
                limitItem
                setShow={setShow}
                items={aboutUs.aboutUs}
                setCurrentId={setCurrentId}
                deleteButton={deleteAboutUs}
            />
            <RenderAddModalContainer
                formItems={formAboutUs}
                clear={clear}
                handleClose={handleClose}
                submitWarrantyForm={submitWarrantyForm}
                setFormItems={setFormAboutUs}
                show={show}
                setShow={setShow}
                setCurrentId={setCurrentId}
                currentId={currentId}
                items={aboutUs.aboutUs}
            />
        </ContainerSiteSetting>
    )
}

export default AboutUs
