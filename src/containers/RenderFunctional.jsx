import React from 'react'
import { Search, Sort } from './Component';
import { setFileView } from "../reducers/product.reducer";
import { Row, Col } from "react-bootstrap";
import { useDispatch } from "react-redux";



const RenderFunctional = (props) => {
    const dispatch = useDispatch();


    if (props.fullFunctional) {
        return (
            <Row>
                <Col md={12}>
                    <div className="disk">
                        <button className="disk__upload-label" onClick={props.handleShow}>
                            {props.buttonText || "Добавить"}
                        </button>
                        <Search
                            search={props.search}
                            get={props.get}
                        />
                        <Sort
                            productSort={props.productSort}
                            get={props.get}
                        />
                        <button
                            className="disk__plate"
                            onClick={() => dispatch(setFileView('plate'))}
                        />
                        <button
                            className="disk__list"
                            onClick={() => dispatch(setFileView('list'))}
                        />
                    </div>

                </Col>
            </Row>
        )
    }
    if (props.mediumFunctional) {
        return (
            <Row>
                <Col md={12}>
                    <div className="disk">
                        <button className="disk__upload-label" onClick={props.handleShow}>
                            {props.buttonText || "Добавить"}
                        </button>
                        <button
                            className="disk__plate"
                            onClick={() => dispatch(setFileView('plate'))}
                        />
                        <button
                            className="disk__list"
                            onClick={() => dispatch(setFileView('list'))}
                        />
                    </div>
                </Col>
            </Row>
        )
    } else {
        return (
            <Row>
                <Col md={12}>
                    <div className="disk">
                        <Search
                            search={props.search}
                            get={props.get}
                        />
                        <Sort
                            productSort={props.productSort}
                            get={props.get}
                        />
                    </div>

                </Col>
            </Row>
        )
    }
}

export default RenderFunctional