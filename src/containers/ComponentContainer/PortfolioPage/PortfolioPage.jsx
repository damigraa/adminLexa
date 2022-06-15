import React, { useEffect, useState } from 'react'
import { deletePortfolio, getPortfolio } from '../../../actions';
import { RenderPortfolio } from './../../render/RenderPortfolio';
import { AddPortfolio } from './../../create/AddPortfolio';
import { DetailsPortfolio } from './../../detailsModal/DetailsPortfolio';
import { useDispatch, useSelector } from 'react-redux';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { MainContainer } from './../../MainContainer';
import ModalConfirm from './../../../components/BurgerMenu/ModalConfirm';

const PortfolioPage = () => {

    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [deleteId, setDeleteId] = useState(null);

    const [show, setShow] = useState(false);
    const [portfolioDetailModal, setPortfolioDetailModal] = useState(false);
    const [portfolioDetails, setBlogDetails] = useState(null);
    const [currentId, setCurrentId] = useState(null)
    const dispatch = useDispatch();

    const portfolio = useSelector((state) => state.portfolio.portfolio)

    const handleShow = () => setShow(true)
    const handleClose = () => setShow(false)

    useEffect(() => {
        dispatch(getPortfolio())
    }, [])


    const confirmDelete = () => {
        dispatch(deletePortfolio(deleteId))
        setShowDeleteModal(false)
    }
    const showPortfolioDetailsModal = (portfolio) => {
        setBlogDetails(portfolio);
        setPortfolioDetailModal(true);
    };
    const handleCloseDeleteModal = () => setShowDeleteModal(false)

    const renderDeleteModal = () => {
        return (
            <ModalConfirm
                description="Если в действительно хотите удалить этот продукт, подтвердите это"
                title={"Удалить продукт"}
                show={showDeleteModal}
                handleClose={handleCloseDeleteModal}
                onClick={confirmDelete}
            />
        )
    }
    return (
        <MainContainer
            backButtonProduct
            title="Портфолио"
            // productSort
            fullFunctional
            get={getPortfolio}
            handleShow={handleShow}
        >


            <Container>
                <Row>
                    <Col>
                        <RenderPortfolio
                            setDeleteId={setDeleteId}
                            setShowDeleteModal={setShowDeleteModal}
                            showPortfolioDetailsModal={showPortfolioDetailsModal}
                            setShow={setShow}
                            setCurrentId={setCurrentId}
                            portfolio={portfolio}
                        />
                    </Col>
                </Row>
            </Container>
            <AddPortfolio
                show={show}
                handleClose={handleClose}
                currentId={currentId}
                setCurrentId={setCurrentId}
            />
            <DetailsPortfolio
                portfolioDetailModal={portfolioDetailModal}
                portfolioDetails={portfolioDetails}
                setPortfolioDetailModal={setPortfolioDetailModal}
            />
            {renderDeleteModal()}
        </MainContainer>


    )
}

export default PortfolioPage