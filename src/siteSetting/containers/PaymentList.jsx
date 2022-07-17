import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import ContainerSiteSetting from '../ContainerSiteSetting';
import { getPaymentList, deletePaymentList, addPaymentList, updatePaymentList } from '../../actions';
import RenderItemsContainer from '../components/RenderItemsContainer';
import RenderAddModalContainer from '../components/RenderAddModalContainer';
import Loader from './../../components/Loader';

function PaymentList() {
    const [currentId, setCurrentId] = useState(null)
    const [show, setShow] = useState(false)
    const [formPaymentList, setFormPaymentList] = useState({
        title: "",
        description: "",
        iconImg: ""
    })
    const paymentList = useSelector((state) => state.paymentList)
    const currentIdUpdate = useSelector((state) => currentId ? state.paymentList.paymentList.find((c) => c._id === currentId) : null)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getPaymentList())
    }, [])
    const handleShow = () => {
        setShow(true)
    }
    if (paymentList.loading) {
        return <Loader />
    }
    console.log("paymentList", paymentList)
    return (
        <ContainerSiteSetting
            item={paymentList.paymentList}
            setShow={handleShow}
            title={"Способы оплаты"}
            href="/siteSetting"
        >
            <RenderItemsContainer
                setShow={setShow}
                items={paymentList.paymentList}
                setCurrentId={setCurrentId}
                deleteButton={deletePaymentList}
            />
            <RenderAddModalContainer
                add={addPaymentList}
                update={updatePaymentList}
                formItems={formPaymentList}
                currentIdUpdate={currentIdUpdate}
                setFormItems={setFormPaymentList}
                show={show}
                setShow={setShow}
                setCurrentId={setCurrentId}
                currentId={currentId}
                items={paymentList.paymentList}
            />
        </ContainerSiteSetting>
    )
}

export default PaymentList
