import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import ContainerSiteSetting from '../ContainerSiteSetting';
import { addDeliveryInfo, deleteDeliveryInfo, getDeliveryInfo } from '../../actions';
import RenderAddModalContainer from './../components/RenderAddModalContainer';
import RenderItemsContainer from './../components/RenderItemsContainer';
import { updateDeliveryInfo } from './../../actions/components/deliveryInfo';

function DeliveryInfo() {
    const [currentId, setCurrentId] = useState(null)
    const [show, setShow] = useState(false)
    const [formDeliveryInfo, setFormDeliveryInfo] = useState({
        title: "",
        description: "",
        iconImg: ""
    })
    const deliveryInfo = useSelector((state) => state.deliveryInfo.deliveryInfo)
    const deliveryIdUpdate = useSelector((state) => currentId ? state.deliveryInfo.deliveryInfo.find((delivery) => delivery._id === currentId) : null)

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getDeliveryInfo())
    }, [])

    const handleShow = () => {
        setShow(true)
    }

    return (
        <ContainerSiteSetting
            item={deliveryInfo}
            setShow={handleShow}
            title={"Инфо про доставку"}
            href="/siteSetting"
        >
            <RenderItemsContainer
                setShow={setShow}
                items={deliveryInfo}
                setCurrentId={setCurrentId}
                deleteButton={deleteDeliveryInfo}
            />
            <RenderAddModalContainer
                add={addDeliveryInfo}
                update={updateDeliveryInfo}
                formItems={formDeliveryInfo}
                setFormItems={setFormDeliveryInfo}
                show={show}
                setShow={setShow}
                setCurrentId={setCurrentId}
                currentId={currentId}
                currentIdUpdate={deliveryIdUpdate}
            />
        </ContainerSiteSetting>
    )
}

export default DeliveryInfo
