import React from 'react'
import { Container, Row, Col, Table } from "react-bootstrap";
import { generatePublicUrl } from '../../urlConfig';
import Modal from '../../components/UI/Modal/index';


export const DetailsPortfolio = ({ portfolioDetailModal, setPortfolioDetailModal, portfolioDetails }) => {
    if (!portfolioDetails) {
        return null;
    }

    return (
        <Modal
            show={portfolioDetailModal}
            handleClose={() => setPortfolioDetailModal(false)}
            modalTitle={"Подробное описание"}
            size="lg"
        >
            <Row>
                <Col md="6">
                    <label className="key">Заголовок</label>
                    <p className="value">{portfolioDetails.title}</p>
                </Col>
                <Col md="6">
                    <label className="key">Артикул</label>
                    <p className="value">{portfolioDetails.slug}</p>
                </Col>
            </Row>
            <Row>
                <Col md="6">
                    <label className="key">Вторичный заголовок</label>
                    <p className="value">{portfolioDetails.titleTwo}</p>
                </Col>
                <Col md="6">
                    <label className="key">Город</label>
                    <p className="value">{portfolioDetails.city}</p>
                </Col>
            </Row>
            <Row>
                <Col md="12">
                    <label className="key">Подробное Описание</label>
                    <p className="value">{portfolioDetails.description}</p>
                </Col>

            </Row>
            <Row>
                <Col md="12">
                    <label className="key">Видео</label>
                    <p className="value">{portfolioDetails.videoHref}</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <label className="key">Фотографии</label>
                    <div style={{ display: "flex" }}>
                        {portfolioDetails.images.map((picture) => (
                            <div className="productImgContainer m-1">
                                <img src={generatePublicUrl(picture.img)} />
                            </div>
                        ))}
                    </div>
                </Col>
            </Row>
        </Modal>
    );
}
