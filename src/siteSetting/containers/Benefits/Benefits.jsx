import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import ContainerSiteSetting from '../../ContainerSiteSetting';
import RenderItemBenefits from './RenderItemBenefits';
import Loader from '../../../components/Loader';
import RenderAddModalBenefits from './RenderAddModalBenefits';
import { addBenefits, deleteBenefits, getBenefits, updateBenefits } from './../../../actions/components/benefits';

function Benefits() {
    const benefits = useSelector((state) => state.benefits)

    const dispatch = useDispatch()
    const [currentId, setCurrentId] = useState(null)
    const [show, setShow] = useState(false)
    const [formBenefits, setFormBenefits] = useState({
        title: "",
        description: "",
    })
    useEffect(() => {
        dispatch(getBenefits())
    }, [])
    const handleShow = () => {
        setShow(true)
    }
    if (benefits.loading) {
        return <Loader />
    }
    const submitWarrantyForm = () => {
        if (currentId) {
            dispatch(updateBenefits(currentId, formBenefits))
            handleClose()
        } else {
            const form = new FormData()
            form.append("title", formBenefits.title)
            form.append("description", formBenefits.description)
            dispatch(addBenefits(formBenefits)).then(() => handleClose())
        }

    }

    const handleClose = () => {
        setShow(false)
        clear()
    }
    const clear = () => {
        setCurrentId(null)
        setFormBenefits({
            title: "",
            description: "",
        })
    }
    if (benefits.loading) {
        return <Loader />
    }
    return (
        <ContainerSiteSetting
            item={benefits.benefits}
            setShow={handleShow}
            title={"Преймущества нашей компании"}
            href="/siteSetting"
        >
            <RenderItemBenefits
                setShow={setShow}
                items={benefits.benefits}
                setCurrentId={setCurrentId}
                deleteButton={deleteBenefits}
            />
            <RenderAddModalBenefits
                formBenefits={formBenefits}
                handleClose={handleClose}
                submitWarrantyForm={submitWarrantyForm}
                setFormBenefits={setFormBenefits}
                show={show}
                currentId={currentId}
            />
        </ContainerSiteSetting>
    )
}

export default Benefits
