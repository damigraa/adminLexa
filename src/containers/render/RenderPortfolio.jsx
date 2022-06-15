import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { generatePublicUrl } from '../../urlConfig'
import Loader from '../../components/Loader';
import { deletePortfolio } from '../../actions';
import FileContainer from './../../components/FileContainer';


export const RenderPortfolio = ({ setShow, showPortfolioDetailsModal, setCurrentId, portfolio, setDeleteId, setShowDeleteModal }) => {

    const fileView = useSelector(state => state.portfolio.view)

    return (
        <>
            <FileContainer
                setShowDeleteModal={setShowDeleteModal}
                setDeleteId={setDeleteId}
                items={portfolio}
                fileView={fileView}
                showDetailsModal={showPortfolioDetailsModal}
                setCurrentId={setCurrentId}
                setShow={setShow}
            />
        </>
    )
}
