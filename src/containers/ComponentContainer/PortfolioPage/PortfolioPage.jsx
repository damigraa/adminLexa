import React, { useEffect, useState } from 'react'
import { deletePortfolio, getPortfolio } from '../../../actions';
import { AddPortfolio } from './../../create/AddPortfolio';
import { DetailsPortfolio } from './../../detailsModal/DetailsPortfolio';
import { useDispatch, useSelector } from 'react-redux';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { MainContainer } from './../../MainContainer';
import ModalConfirm from './../../../components/BurgerMenu/ModalConfirm';
import RenderFileContainer from './../../../components/RenderFileContainer';

const PortfolioPage = () => {


    const fileView = useSelector(state => state.portfolio.view)

    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [deleteId, setDeleteId] = useState(null);

    const [show, setShow] = useState(false);
    const [portfolioDetailModal, setPortfolioDetailModal] = useState(false);
    const [portfolioDetails, setBlogDetails] = useState(null);
    const [currentId, setCurrentId] = useState(null)
    const [showModalImg, setShowModalImg] = useState(false);

    const [portfolioForm, setPortfolioForm] = useState({
        title: "",
        titleTwo: "",
        videoHref: "",
        description: "",
        city: "",
    })
    const clear = () => {
        setCurrentId(null)
        setPortfolioForm({
            title: "",
            titleTwo: "",
            videoHref: "",
            description: "",
            city: "",
            images: []
        })
    }


    const dispatch = useDispatch();

    const portfolio = useSelector((state) => state.portfolio.portfolio)

    const handleShow = () => setShow(true)
    const handleClose = () => {
        setShow(false)
        clear()
    }

    useEffect(() => {
        dispatch(getPortfolio())
    }, [])

    const handleShowModalImg = () => {
        setShowModalImg(true)
    }
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
                description="???????? ?? ?????????????????????????? ???????????? ?????????????? ???????? ??????????????, ?????????????????????? ??????"
                title={"?????????????? ??????????????"}
                show={showDeleteModal}
                handleClose={handleCloseDeleteModal}
                onClick={confirmDelete}
            />
        )
    }
    return (
        <MainContainer
            backButtonProduct
            title="??????????????????"
            // productSort
            mediumFunctional
            get={getPortfolio}
            handleShow={handleShow}
            backHref
        >


            <Container>
                <Row>
                    <Col>
                        <RenderFileContainer
                            setShowDeleteModal={setShowDeleteModal}
                            setDeleteId={setDeleteId}
                            items={portfolio}
                            fileView={fileView}
                            showDetailsModal={showPortfolioDetailsModal}
                            setCurrentId={setCurrentId}
                            setShow={setShow}
                        />
                    </Col>
                </Row>
            </Container>
            <AddPortfolio
                portfolioForm={portfolioForm}
                setPortfolioForm={setPortfolioForm}
                show={show}
                handleClose={handleClose}
                currentId={currentId}
                setCurrentId={setCurrentId}
            />
            <DetailsPortfolio
                handleShowModalImg={handleShowModalImg}
                setShowModalImg={setShowModalImg}
                showModalImg={showModalImg}
                portfolioDetailModal={portfolioDetailModal}
                portfolioDetails={portfolioDetails}
                setPortfolioDetailModal={setPortfolioDetailModal}
            />
            {renderDeleteModal()}
        </MainContainer>


    )
}

export default PortfolioPage