import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { getProductsBySlug } from '../../actions';
import FileContainer from './../../components/FileContainer';
import { useParams } from 'react-router-dom';

export const RenderProducts = ({ setShow, showProductDetailsModal, setCurrentId, product, setShowDeleteModal, setDeleteId }) => {
    const fileView = useSelector(state => state.product.view)
    const { slug } = useParams()

    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(getProductsBySlug(slug))
    }, [])
    return (
        <>
            <FileContainer
                setShowDeleteModal={setShowDeleteModal}
                setDeleteId={setDeleteId}
                items={product}
                fileView={fileView}
                showDetailsModal={showProductDetailsModal}
                setCurrentId={setCurrentId}
                setShow={setShow}
            />
        </>
    )
}
