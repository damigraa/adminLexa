import React, { useEffect, useState } from 'react'
import { Row, Col } from "react-bootstrap";
import { useDispatch } from 'react-redux';
import { getApplication, searchApplication, deleteApplicationById } from './../../actions/application.action';
import Modal from "../../components/UI/Modal";
import { MainContainer } from '../MainContainer';
import { RenderApplication } from './RenderApplication';
import { generatePublicUrl } from '../../urlConfig';

const Applications = (props) => {
    const [applicationDetails, setApplicationDetails] = useState(null);
    const [applicationDetailModal, setApplicationDetailModal] = useState(false);
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getApplication())
    }, [])

    const showApplicationDetailsModal = (a) => {
        setApplicationDetails(a);
        setApplicationDetailModal(true);
    };
    const handleCloseApplicationDetailsModal = () => {
        setApplicationDetailModal(false);
    };
    const deleteCloseModal = () => {
        dispatch(deleteApplicationById(applicationDetails._id))
        setApplicationDetailModal(false)
    }
    const renderApplicationDetailsModal = () => {
        if (!applicationDetails) {
            return null;
        }
        return (
            <Modal
                show={applicationDetailModal}
                handleClose={handleCloseApplicationDetailsModal}
                modalTitle={"Детали заявки на звонок"}
                size="lg"
            >

                <div style={{
                    margin: "10px",

                }}>
                    <button className="btn btn-secondary" onClick={deleteCloseModal}>Удалить заявку</button>

                </div>
                <Row>
                    <Col md="6">
                        <label className="key">Имя</label>
                        <p className="value">{applicationDetails.firstName}</p>
                    </Col>
                    <Col md="6">
                        <label className="key">Название фирмы</label>
                        <p className="value">{applicationDetails.nameCompany}</p>
                    </Col>
                </Row>
                <Row>
                    <Col md="6">
                        <label className="key">Номер</label>
                        <div>
                            <a href='tel:' className="value">{applicationDetails.contactNumber}</a>
                        </div>
                    </Col>
                    <Col md="6">
                        <label className="key">Email
                        </label>
                        <p className="value">{applicationDetails.email}</p>
                    </Col>
                </Row>
                <Row>
                    <Col md="12">
                        <label className="key">Описание проблемы</label>
                        <p className="value">{applicationDetails.descriptionProblem}</p>
                    </Col>
                    <Col>

                    </Col>
                </Row>
                <Row>
                    <Col>
                        {applicationDetails.samplePhoto > 0 ?
                            <>
                                <label className="key">Фотографии</label>
                                <div style={{ display: "flex" }}>
                                    {applicationDetails.samplePhoto.map((picture) => (
                                        <div className="productImgContainer p-1">
                                            <img src={generatePublicUrl(picture.samplePhoto)} />
                                        </div>
                                    ))}
                                </div>
                            </>
                            :
                            <label className="key">Покупатель не добавлял фото</label>
                        }

                    </Col>
                </Row>
            </Modal>
        );
    };

    return (
        <MainContainer
            backButtonProduct
            backHref
            search={searchApplication}
            get={getApplication}
            title={"Запросы на Звонок"}
        >
            <Row style={{ marginTop: "15px" }}>
                <Col>
                    <RenderApplication
                        showApplicationDetailsModal={showApplicationDetailsModal}
                    />
                </Col>
            </Row>
            {renderApplicationDetailsModal()}
        </MainContainer>
    )
}

export default Applications
