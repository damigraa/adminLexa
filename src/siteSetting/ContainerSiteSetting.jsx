import React from 'react'
import Layout from './../components/Layout/index';
import { Container, Row, Col } from 'react-bootstrap';
import { IoIosAdd, IoIosCloudUpload, IoIosTrash } from 'react-icons/io';
import BackButton from './components/BackButton';
import { ButtonShow } from './ButtonShow';


const ContainerSiteSetting = (props) => {

    return (
        <>
            <Layout sidebar>
                <Container>
                    <Row>
                        <Col md={12}>
                            <h3 style={{ textAlign: "center", margin: "20px" }}>{props.title}</h3>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12}>
                            <div style={{ margin: '20px auto', display: 'flex', justifyContent: 'space-between', maxWidth: "800px", alignItems: "center" }}>
                                <div className="actionBtnContainer">
                                    <span>Действие: </span>
                                    <ButtonShow
                                        setShow={props.setShow}
                                    />
                                </div>
                                <BackButton
                                    href={props.href}
                                    text={props.text}
                                />

                            </div>

                        </Col>
                    </Row>
                    <Row>
                        <Col md={12}>

                            {props.children}
                        </Col>
                    </Row>

                </Container>

            </Layout>
        </>
    )
}
export default ContainerSiteSetting;
