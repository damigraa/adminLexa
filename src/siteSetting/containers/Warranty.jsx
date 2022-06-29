import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import ContainerSiteSetting from '../ContainerSiteSetting';
import { getWarranty, deleteWarranty, addWarranty, updateWarranty } from './../../actions/components/warranty';
import RenderItemsContainer from './../components/RenderItemsContainer';
import RenderAddModalContainer from './../components/RenderAddModalContainer';

function Warranty() {
    const warranty = useSelector((state) => state.warranty.warranty)
    const dispatch = useDispatch()
    const [currentId, setCurrentId] = useState(null)
    const [show, setShow] = useState(false)
    const [formWarranty, setFormWarranty] = useState({
        title: "",
        description: "",
        iconImg: ""
    })
    useEffect(() => {
        dispatch(getWarranty())
    }, [])
    const handleShow = () => {
        setShow(true)
    }
    return (
        <ContainerSiteSetting
            item={warranty}
            setShow={handleShow}
            title={"Гарантии"}
            href="/siteSetting"
        >
            <RenderItemsContainer
                setShow={setShow}
                items={warranty}
                setCurrentId={setCurrentId}
                deleteButton={deleteWarranty}
            />
            <RenderAddModalContainer
                add={addWarranty}
                update={updateWarranty}
                formItems={formWarranty}
                setFormItems={setFormWarranty}
                show={show}
                setShow={setShow}
                setCurrentId={setCurrentId}
                currentId={currentId}
                items={warranty}
            />
        </ContainerSiteSetting>
    )
}

export default Warranty
