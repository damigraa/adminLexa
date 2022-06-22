import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { getProducts, getProductsBySlug } from '../../actions';
import FileContainer from './../../components/FileContainer';
import { useParams } from 'react-router-dom';

export const RenderProducts = ({ showAll, setShow, showProductDetailsModal, setCurrentId, product, setShowDeleteModal, setDeleteId }) => {
    const fileView = useSelector(state => state.product.view)
    const loading = useSelector(state => state.product.loading)
    console.log("ldsdcsd", loading)
    const { slug } = useParams()

    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(getProductsBySlug(slug))
        if (showAll) {
            dispatch(getProducts())
        }
    }, [])

    return (
        <>
            <FileContainer
                loading={loading}
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
