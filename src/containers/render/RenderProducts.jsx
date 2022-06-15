import React from 'react'
import { useSelector } from "react-redux";
import FileContainer from './../../components/FileContainer';

export const RenderProducts = ({ setShow, showProductDetailsModal, setCurrentId, product, setShowDeleteModal, setDeleteId }) => {
    const fileView = useSelector(state => state.product.view)
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
